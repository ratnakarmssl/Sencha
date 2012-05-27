Ext.define('Ext.ux.InfiniteCarousel', {	
  extend: 'Ext.Carousel',
  xtype: 'infinitecarousel',
  config: {
    indicator: false
  },
  initConfig: function(){
    var me = this;
    me.callParent(arguments);
    me.delay = me.config.delay;
    delete me.config;
  },
  initialize: function(){
    var me = this;
    me.callParent();
    
    var isEven = function(nb){
        return (nb%2 == 0) ? true : false;
    };
    
    me.nbItems = me.getItems().length;
    me.interval = (isEven(me.nbItems) ? me.nbItems/2 : (me.nbItems-1)/2);
    me.setActiveItem(me.interval);
    
    me.on('activeitemchange', me.onActiveItemChange, me);
    if(me.delay > 0)
      me.timeout = Ext.defer(me.rotate, me.delay, me);
  },
  onActiveItemChange: function(c,v,ov){
    var me = this;
    
    if (me.timeout){
      clearTimeout(me.timeout);
      me.timeout = Ext.defer(me.rotate, me.delay, me);
    }
    
    var active = c.getActiveIndex(),
        direction = (c.getItems().indexOf(v) > c.getItems().indexOf(ov)) ? 'forward' : 'backward',
        container = (direction=='forward') ? c.getAt(active-me.interval-1) : c.getAt(active+me.interval+1);
    
    c.remove(container, false);
    (direction=='forward') ? c.add(container) : c.insert(0,container);
  },
  rotate: function(){
    this.next();
  }
});