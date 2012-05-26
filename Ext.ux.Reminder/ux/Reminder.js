Ext.define('Ext.ux.Reminder', {	
  extend: 'Ext.Container',
  xtype: 'reminder',
  require:[
	  'Ext.Img'
	],
  config: {
    layout:'fit',
    items: []
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    
    me.store = me.config.store,
    
    delete me.config;
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    var toolbar = Ext.create('Ext.Toolbar',{
      xtype: 'toolbar',
      docked:'top',
      width:'100%',
      title:'Reminder',
      items: [{xtype:'spacer'},{
        align:'right',
        iconCls:'add',
        iconMask:true,
        handler: me.addTask,
        scope: me
      }]
    });
    
    var list = Ext.create('Ext.List',{
      xtype:'list',
      store:me.store,
      cls:'reminder-list',
      itemCls:'reminder-item',
      itemTpl: [
        '<div>',
          '<div class="reminder-item-ticker"><input name="{id}" value="" type="checkbox"></div>',
          '<div class="reminder-item-title"><span class="label">{title}</span></div>',
        '</div>',
      ].join(""),
      listeners:{
        itemtap: function(dataview, index, item, event) {

        }
      }
    });
    
    me.add([toolbar,list]);
  },
  addTask: function(){
    var me = this;
    var store = Ext.getStore(this.store);
    
    var createTask = function(value){
      store.add({title:Ext.DomQuery.select('div[id=new-task] input')[0].value});
      store.removeAt(store.getCount()-2);
    };
    
    store.add({title:''});

    var textfield = Ext.create('Ext.field.Text', {
        listeners:{
          blur: function(){
            createTask();
          }
        }
    });    
    
    var inputHTML = textfield.element.dom.innerHTML;
    var input = inputHTML.match(/<input.+?\/?>/g);

    var query = Ext.DomQuery.select('div[class="reminder-item-title"]');
    query[query.length-1].innerHTML = '<div class="reminder-textfield" id="new-task">'+input+'</div>';

    selector += ' input';
    query = Ext.DomQuery.select(selector);
    query[0].focus();    
  }
});