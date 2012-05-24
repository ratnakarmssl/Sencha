Ext.define('Ext.ux.ThreeSixtyView', {	
  extend: 'Ext.Container',
  xtype: 'threesixtyview',
  require:[
	  'Ext.Img'
	],
  config: {
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    
    me.data = me.config.data;
    me.index = 0;
    me.deltaX = 4;
    me.velocity = 1;
    me.oldDeltaT = 0;
    
    delete me.config;
    
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    var initImg = Ext.create('Ext.Panel',{
      style:'background-image:url('+me.data[me.index].src+');background-size:640px 378px;background-repeat: no-repeat;',
      width:640,
      height:378
    });
    
    me.add(initImg);
    // var i;
    //  for(i=me.data.length-1;i>=0;i--){
    //    initImg.setSrc(me.data[i].src);
    //  }

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
        drag: Ext.Function.createThrottled(me.onDrag, 1, me),
        dragend: me.onDragEnd,
        scope: me
      }
    });    
  },
  onDragStart: function(draggable, e, offsetX, offsetY){
    this.oldDeltaT = 0;
  }, 
  onDrag: function(draggable, e, offsetX, offsetY){
    var me = this;
    me.velocity = Math.abs(e.deltaX / e.deltaTime)
    
    if(e.deltaX < me.deltaX)
      me.direction = "left";
    if(e.deltaX > me.deltaX)
      me.direction = "right";

    if(e.deltaX != me.deltaX)
      me.updatePicture();
      
    me.deltaX = e.deltaX;
  },
  onDragEnd: function(draggable, e, offsetX, offsetY){
    var me = this;
    
    me.deltaX = 4;
    me.decelerate();
  },
  decelerate: function(){
    var me = this;
    var decelerate = function(){
      me.updatePicture();
      me.velocity = me.velocity/1.05;
      if(me.velocity>1)
        setTimeout(function(){decelerate()}, 50/me.velocity);
    }
    setTimeout(function(){decelerate()}, 50/me.velocity);
  },
  updatePicture: function(scope){
    var me = (scope ? scope : this);
    switch (me.direction) {
      case "left":
        if(me.index == me.data.length-1)
          me.index = 0;
        else
          me.index++;
        break;
      case "right":
        if(me.index == 0)
          me.index = me.data.length-1;
        else
          me.index--;
        break;
    }    
    console.log(me.getItems().getAt(0));
    me.getItems().getAt(0).setStyle('background-image:url('+me.data[me.index].src+');background-size:640px 378px;background-repeat: no-repeat;');
    //me.getItems().getAt(0).setSrc(me.data[me.index].src);
  }
});