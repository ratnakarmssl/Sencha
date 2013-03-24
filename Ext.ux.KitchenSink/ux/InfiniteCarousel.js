Ext.define('Ext.ux.InfiniteCarousel', {
  extend: 'Ext.Carousel',

  xtype: 'infinitecarousel',

  config: {
    cls: 'infinite-carousel',
    delay: 2000,
    automatic: false,
    indicator: false,
    start: true
  },

  initialize: function () {
    this.callParent();

    function isEven(nb) {
      return (nb%2 === 0) ? true : false;
    }

    var nbItems = this.getItems().length - (this.getIndicator() ? 1 : 0);

    this.interval = isEven(nbItems) ? nbItems / 2 : (nbItems - 1) / 2;
    this.setActiveItem(this.interval);

    this.on('activeitemchange', this.onActiveItemChange, this);

    this.setDraggable({
      constraint: { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } },
      listeners: {
        dragstart: {
          fn: this.dragstart,
          order: 'before',
          scope: this
        },
        dragend: {
          fn: this.dragend,
          scope: this
        }
      }
    });

    if (!!this.getStart()) {
      this.start();
    }
  },

  applyDelay: function (delay) {
    if (delay !== null && typeof delay !== 'number') {
      throw new Error('Ext.ux.InfiniteCarousel: [delay] trying to pass a value which is not a number');
    }

    return delay;
  },

  applyAutomatic: function (automatic) {
    if (automatic !== null && typeof automatic !== 'boolean') {
      throw new Error('Ext.ux.InfiniteCarousel: [automatic] trying to pass a value which is not a boolean');
    }

    return automatic;
  },

  applyStart: function (start) {
    if (start !== null && typeof start !== 'boolean') {
      throw new Error('Ext.ux.InfiniteCarousel: [start] trying to pass a value which is not a boolean');
    }

    return start;
  },

  dragstart:function(){
    this.stop();
  },

  dragend:function(){
    this.start();
  },

  onActiveItemChange: function(container, value, old) {
    if (this.timeout) clearTimeout(this.timeout);

    var index   = container.getActiveIndex();
        forward = (container.getItems().indexOf(value) > container.getItems().indexOf(old));
        panel   = forward ? container.getAt(index - this.interval - 1) : container.getAt(index + this.interval);

    container.remove(panel, false);

    if (forward) {
      container.add(panel);
    } else {
      container.insert(0, panel);
    }

    this.timeout = Ext.defer(this.rotate, this.getDelay(), this);
  },

  start: function() {
    this.timeout = Ext.defer(this.rotate, this.getDelay(), this);
  },

  stop: function() {
    if (this.timeout) clearTimeout(this.timeout);
  },

  rotate: function() {
    this.next();
  }
});