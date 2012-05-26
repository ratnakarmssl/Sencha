Ext.define('Ext.ux.NotificationCenter', {	
  extend: 'Ext.Container',
  xtype: 'notificationcenter',
  require:[
	  'Ext.Img'
	],
  config: {
    cls:'notification-center',
    style: 'position: absolute; top: -'+parseInt(document.height)+'px; left: 0; height: '+parseInt(document.height+10)+'px;width: 320px !important; z-index: 2;'
  },
  initConfig: function(){
    
    var me = this;
    me.callParent(arguments);
    
    me.height = me.config.height;
    me.width = me.config.width;
    me.store = me.config.store;
    
    delete me.config;
    
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    me.initDragSystem();
    me.initCenter();
  },
  initCenter: function(){
    var me = this;
    var container = Ext.create('Ext.Container',{
      layout:'fit',
      html:'<div style="position: absolute; top: '+parseInt(document.height-16)+'px; left: 139px; height: 16px;width: 43px !important; z-index: 2;background-image: url(resources/images/puller.png);background-repeat:no-repeat;"></div>',
      width: '100%',
      height: parseInt(document.height),
      docked:'top',
      style:'max-width:640px;background-image: url(resources/images/bg.png);background-repeat: repeat;'
    });
    
    console.log(me.store);
    
    var list = Ext.create('Ext.List', {
      height:parseInt(document.height-20),
      cls:'notification-list',
      itemCls:'notification-item',
      pressedCls:'notification-item-pressed',
      selectedCls: 'notification-item-selected',
      itemTpl: ['<div>',
                 '<div class="notification-item-title">{title}</div>',
                 '<div class="notification-item-description">{description}</div>',
               '</div>'].join(""),
      store:me.store,
      grouped: true
    });
    
    container.add(list);
    me.add(container);
  },
  initDragSystem: function(){
    var me = this;
    me.setDraggable({
      direction: 'vertical',
      constraint: {
          min: { x: 0, y: 0 },
          max: { x: 0, y: parseInt(document.height) }
      },
      listeners: {
        dragstart: {
          fn: me.onDragStart,
          order: 'before'
        },
        drag: Ext.Function.createThrottled(me.onDrag, 1, me),
        dragend: me.onDragEnd,
        scope: me
      }
    });
  },
  onDragStart: function(draggable, e, offsetX, offsetY){
    var node = e.target;
    while (node = node.parentNode) {
        if (node.className && node.className.indexOf('notification-list') > -1) {
          console.log('found notification list');
          return false;
        }
    }
    return true;
  }, 
  onDrag: function(draggable, e, offsetX, offsetY){
    
  },
  onDragEnd: function(draggable, e, offsetX, offsetY){
    var me = this;
    var velocity  = Math.abs(e.deltaY / e.deltaTime),
        height     = parseInt(document.height),
        direction = (e.deltaY > 0) ? "down" : "up",
        offset    = Ext.clone(draggable.offset),
        threshold = parseInt(height * .5);

    switch (direction) {
      case "down":
        me.offsetY = (velocity > 0.75 || offsetY > threshold) ? height : 0;
        break;
      case "up":
        me.offsetY = (velocity > 0.75 || offsetY < threshold) ? 0 : height;
        break;
    } 
    me.moveContainer();
  },
  moveContainer: function(){
    var me = this;
    
    me.getDraggable().setOffset(0, me.offsetY, {
      duration: 100
    });
  }
});