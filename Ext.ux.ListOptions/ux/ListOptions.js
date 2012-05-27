Ext.define('Ext.ux.ListOptions', {	
  extend: 'Ext.List',
  xtype: 'listoptions',
  require:[
	  'Ext.Img'
	],
  config: {
    cls:'list-options',
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
    me.options = me.config.options;
    me.direction = me.config.direction || 'right';
    me.allowMultiple = me.config.allowMultiple || false;
    me.hideAfterUse = me.config.hideAfterUse || true;
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
    var optionWidth = width/me.options.length;
    var optionsHTML = '';
    for(var i=0;i<me.options.length;i++){
      var option ='<li class="'+me.options[i].cls+'" style="float:left;list-style-type: none;width:'+optionWidth.toString().split('.')[0]+'px;height:'+height+'px;">&nbsp;</li>';
      optionsHTML+=option;
    }
    var top = 0;
    for(var i=0;i<items.length;i++){
      me.htmlArray.push(['<ul class="list-options-menu" style="position:absolute;top:'+top+'px;left:0;width:'+width+'px;height:'+height+'px;z-index:0;">',
                           '<div class="top-shadow"><div class="bottom-shadow">',
                           optionsHTML,
                           '</div></div>',
                         '</ul>'].join(""));
      top+=height;
    };

    me.setHtml(me.htmlArray.join("")); 

    for(var i=0;i<me.options.length;i++){
      var HTMLElements = Ext.DomQuery.select('li[class='+me.options[i].cls+']');
      for(var j=0;j<HTMLElements.length;j++){
        var DOMElement = Ext.get(HTMLElements[j]);
        DOMElement.on({
          touchstart: function(e, node, opts){
            me.onOptionTap(e, node, opts);
          },
          scope:this
        }); 
      }
    }
  },
  onScroll:function(scroller){
    var me = this;
    me.hideOptions();
  },
  onOptionTap: function(e, node, opts){
    var me = this;
    for(o in me.options){
      if(me.options[o].cls == node.className){
        me.options[o].handler(me.currentRecord);
        if(me.hideAfterUse)
          me.hideOptions();
      }
    }
  },
  onItemSwipe: function(list,target,index,e,t){
    var me = this;
    me.currentRecord = Ext.getStore(me.store).getAt(index);
    
    var direction = (e.deltaX > 0) ? 'right' :'left';
    if(me.direction == 'both' || direction == me.direction){
      
      var offsetX = (direction == 'right') ? parseInt(screen.width) : -parseInt(screen.width) ;
      
      me.showOptions(offsetX, target);
    }
  },
  hideOptions: function(){
    var me = this;
    var nb = me.targets.length;
    if(nb > 0){
      var i;
      for(var i=0;i<nb;i++){
        var offset = me.targets[0][0];
        var target = me.targets[0][1];
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
        me.targets.shift();
      }
    }
    
  },
  showOptions: function(offset, target){
    var me = this;
    if(!me.allowMultiple)
      me.hideOptions();
    
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
    me.targets.push([offset,target]);
  }
});