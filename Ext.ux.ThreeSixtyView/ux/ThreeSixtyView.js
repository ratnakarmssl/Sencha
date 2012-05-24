Ext.define('Ext.ux.ThreeSixtyView', {	
  extend: 'Ext.Container',
  xtype: 'threesixtyview',
  require:[
	  
	],
  config: {
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    
    me.data = me.config.data;
    me.index = 0;
    me.deltaX = 4;
    
    delete me.config;
    
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    
    var initImg = Ext.create('Ext.Img',{
      src:me.data[me.index].src,
      width:640,
      height:378
    });
    
    me.add(initImg);

    me.setDraggable({
      direction: 'horizontal',
      constraint: {
          min: { x: 0, y: 0 },
          max: { x: 0, y: 0 }
      },
      listeners: {
        dragstart: {
          fn: me.onDragStart,
          order: 'before'
        },
        drag: me.onDrag,
        dragend: me.onDragEnd,
        scope: me
      }
    });
  }  ,
  onDragStart: function(draggable, e, offsetX, offsetY){
    this.start = e.startX;
  }, 
  onDrag: function(draggable, e, offsetX, offsetY){
    var me = this;
    var direction;
    if(e.deltaX > 0)
      direction = (e.deltaX > me.deltaX) ? "left" : "right";
    else
      direction = (e.deltaX < me.deltaX) ? "right" : "left";

    me.deltaX = e.deltaX;
    
    switch (direction) {
      case "right":
        if(me.index == me.data.length-1)
          me.index = 0;
        else
          me.index++;
        break;
      case "left":
        if(me.index == 0)
          me.index = me.data.length-1;
        else
          me.index--;
        break;
    }    
    me.removeAll();
    var image = Ext.create('Ext.Img',{
      src: me.data[me.index].src,
      width:640,
      height:378
    });
    
    me.add(image);
  },
  onDragEnd: function(draggable, e, offsetX, offsetY){

  }
});