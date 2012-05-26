Ext.define('Ext.ux.ListOptions', {	
  extend: 'Ext.List',
  xtype: 'listoptions',
  require:[
	  'Ext.Img'
	],
  config: {
    scrollable:{
      direction:'vertical',
      directionLock: true
    },
    itemCls:'list-options-item',
    pressedCls:'list-options-pressed',
    selectedCls:'list-options-selected',
    itemTpl: '{title}'
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    me.store = me.config.store;
    me.direction = me.config.direction;
    me.htmlArray = [];
    me.targets = [];
    delete me.config;
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    me.getScrollable()._scroller.on({
      scroll: Ext.Function.createThrottled(me.onScroll, 100, me),
      scope:me
    });
    me.on({
      painted : this.onPainted,
      itemswipe : this.onItemSwipe,
      scope:this
    });
  },
  onPainted: function(list){
    var me = this;
    var items = Ext.DomQuery.select('div.list-options-item');
    var height = list.items.items[0].element.dom.offsetHeight/items.length;
    var width = list.element.dom.offsetWidth;

    var top = 0;
    for(var i=0;i<items.length;i++){
      me.htmlArray.push('<div class="list-options-menu" style="position:absolute;top:'+top+'px;left:0;width:'+width+'px;height:'+height+'px;z-index:0;"></div>')
      top+=height;
    };
    me.setHtml(me.htmlArray.join("")); 
    window.mee = me;
  },
  onScroll:function(scroller){
    var me = this;
    var nb = me.targets.length;
    if(nb > 0){
      var i;
      for(var i=0;i<nb;i++){
        var offset = me.targets[0][0];
        var target = me.targets[0][1];
        me.hideOptions(offset, target);
        me.targets.shift();
      }
    }
  },
  onItemSwipe: function(list,target,index,e){
    var me = this;
    var direction = (e.deltaX > 0) ? 'right' :'left';
    if(me.direction == 'both' || direction == me.direction){
      
      var offsetX = (direction == 'right') ? parseInt(screen.width) : -parseInt(screen.width) ;
      
      me.targets.push([offsetX,target]);
      me.showOptions(offsetX, target);
    }
  },
  hideOptions: function(offset, target){
    var anim = Ext.create('Ext.Anim',{
      autoClear: false,
      from:{
        '-moz-transform':'translate('+offset+'px,0px)',
        '-webkit-transform':'translate('+offset+'px,0px)',
        '-o-transform':'translate('+offset+'px,0px)',
        '-ms-transform':'translate('+offset+'px,0px)',
        'transform':'translate('+offset+'px,0px)'
      },
      to: {
        '-moz-transform':'translate(0px,0px)',
        '-webkit-transform':'translate(0px,0px)',
        '-o-transform':'translate(0px,0px)',
        '-ms-transform':'translate(0px,0px)',
        'transform':'translate(0px,0px)'
      },
      easing:'ease-out',
      delay: 10,
      duration: 250
    });
    
    anim.run(target);
  },
  showOptions: function(offset, target){
    var anim = Ext.create('Ext.Anim',{
      autoClear: false,
      from:{
        '-moz-transform':'translate(0px,0px)',
        '-webkit-transform':'translate(0px,0px)',
        '-o-transform':'translate(0px,0px)',
        '-ms-transform':'translate(0px,0px)',
        'transform':'translate(0px,0px)'
      },
      to: {
        '-moz-transform':'translate('+offset+'px,0px)',
        '-webkit-transform':'translate('+offset+'px,0px)',
        '-o-transform':'translate('+offset+'px,0px)',
        '-ms-transform':'translate('+offset+'px,0px)',
        'transform':'translate('+offset+'px,0px)'
      },
      easing:'ease-out',
      delay: 10,
      duration: 250
    });
    anim.run(target);
  }
});