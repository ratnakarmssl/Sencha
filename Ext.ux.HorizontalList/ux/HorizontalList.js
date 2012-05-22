Ext.define('Ext.ux.HorizontalList', {	
  extend: 'Ext.Container',
  xtype: 'horizontallist',
  require:[
	  'Ext.DataView'
	],
  config: {
    indicator: false
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    
    me.data = me.config.data || [];
    me.height = me.config.height || 96;
    
    delete me.config;
    
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    var dataview = Ext.create('Ext.DataView',{
      data: me.data,
      itemTpl: new Ext.XTemplate('<div style="margin:5px;background-color:#777;"><div>{title}</div><div>{content}</div></div>'),
      height: me.height,
      scrollable: {
        direction: 'horizontal',
        directionLock: true
      },
      inline: {
          wrap: false
      },
    });
    
    dataview.on('itemtap', function(dataview, index, target, record){
      Ext.Msg.alert(
          "Tap",
          record.data.title,
          null
      );
    }, this);
    
    me.add(dataview);
  }
});