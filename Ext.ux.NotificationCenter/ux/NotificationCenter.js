Ext.define('Ext.ux.NotificationCenter', {	
  extend: 'Ext.Container',
  xtype: 'notificationcenter',
  require:[
	  'Ext.Img'
	],
  config: {
    cls:'notification-center',
    style: 'position: absolute; top: 0; left: -'+parseInt(document.width)+'px; height: '+parseInt(document.height)+'px;width: '+parseInt(document.width+10)+'px !important; z-index: 2;'
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
    });
        
    var list = Ext.create('Ext.List', {
      height:parseInt(document.height),
      width: parseInt(screen.width-40),
      docked:'right',
      style:'background-image: url(resources/images/bg.png);background-repeat: repeat;margin-right:50px',
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
      direction: 'horizontal',
      constraint: {
          min: { x: 0, y: 0 },
          max: { x: parseInt(screen.width), y: 0 }
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
          return false;
        }
    }
    return true;
  }, 
  onDrag: function(draggable, e, offsetX, offsetY){
    
  },
  onDragEnd: function(draggable, e, offsetX, offsetY){
    var me = this;
    var velocity  = Math.abs(e.deltaX / e.deltaTime),
        width     = parseInt(screen.width),
        direction = (e.deltaX > 0) ? "right" : "left",
        offset    = Ext.clone(draggable.offset),
        threshold = parseInt(width * .5);
    
    switch (direction) {
      case "right":
        me.offsetX = (velocity > 0.75 || offsetX > threshold) ? width : 0;
        break;
      case "left":
        me.offsetX = (velocity > 0.75 || offsetX < threshold) ? 0 : width;
        break;
    } 
    me.moveContainer();
  },
  moveContainer: function(){
    var me = this;
    me.getDraggable().setOffset(me.offsetX, 0, {
      duration: 100
    });

  }
});