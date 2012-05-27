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
    me.store = me.config.store;
    delete me.config;
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    var toolbar = Ext.create('Ext.Toolbar',{
      docked:'top',
      height:43,
      title:'Reminder',
      items: [{
        text:'Clear',
        handler: function(){
          Ext.getStore(me.store).removeAll();
          Ext.getStore(me.store).sync();
        }
      },{
        xtype:'spacer'
      },{
        text:'New',
        handler: me.addTask,
        scope: me
      }]
    });
    
    var list = Ext.create('Ext.List',{
      xtype: 'list',
      store: me.store,
      cls: 'reminder-list',
      itemCls: 'reminder-item',
      pressedCls: 'reminder-item-pressed',
      selectedCls: 'reminder-item-selected',
      itemTpl: [
        '<div>',
          '<div class="reminder-item-ticker"><input name="{id}" value="" type="checkbox"></div>',
          '<div class="reminder-item-title"><span class="label">{title}</span></div>',
        '</div>',
      ].join("")
    });

    me.add([toolbar,list]);
  },
  
  addTask: function(){

    var me = this,
        store = Ext.getStore(this.store);
    store.add({title:'',timestamp:new Date().getTime()+10000});
    var textfield = Ext.create('Ext.field.Text', {
          listeners:{
            blur: function(){
              me.createTask();
            }
          }
        }),
        inputHTML = textfield.element.dom.innerHTML,
        input = inputHTML.match(/<input.+?\/?>/g),
        selector = 'div[class="reminder-item-title"]',
        query = Ext.DomQuery.select(selector);
        
    query[query.length-1].innerHTML = '<div class="reminder-textfield" id="new-task">'+input+'</div>';
    selector += ' input';
    query = Ext.DomQuery.select(selector);
    query[query.length-1].focus();   
  },
  
  createTask: function(){
    var value = Ext.DomQuery.select('div[id=new-task] input')[0].value;
    var store = Ext.getStore(this.store);
    if(value != ''){
      store.add({title:value,timestamp:new Date().getTime()});
    }
    store.removeAt(store.getCount()-1);
    store.sync();
  }
  
});