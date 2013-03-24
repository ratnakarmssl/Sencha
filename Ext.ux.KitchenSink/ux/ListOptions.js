Ext.define('Ext.ux.ListOptions', {
  extend: 'Ext.List',

  xtype: 'listoptions',

  config: {
    direction: 'right', // 'left', 'right', 'both'
    hideAfterUse: true, // true of false
    options: [],
    optionsHTML: ''
  },

  applyDirection: function (direction) {
    if (direction !== null && typeof direction !== 'string') {
      throw new Error('Ext.ux.ListOptions: [direction] trying to pass a value which is not a number');
    }

    if (direction !== 'right' && direction !== 'left' && direction !== 'both') {
      throw new Error('Ext.ux.ListOptions: [direction] direction must be \'right\', \'left\' or \'both\'');
    }

    return direction;
  },

  // applyAllowMultiple: function (allowMultiple) {
  //   if (allowMultiple !== null && typeof allowMultiple !== 'boolean') {
  //     throw new Error('Ext.ux.ListOptions: [allowMultiple] trying to pass a value which is not a boolean');
  //   }
  //
  //   return allowMultiple;
  // },

  applyHideAfterUse: function (hideAfterUse) {
    if (hideAfterUse !== null && typeof hideAfterUse !== 'boolean') {
      throw new Error('Ext.ux.ListOptions: [hideAfterUse] trying to pass a value which is not a boolean');
    }

    return hideAfterUse;
  },

  applyOptions: function (options) {
    if (options !== null && typeof options !== 'object' && typeof options.length !== 'undefined') {
      throw new Error('Ext.ux.ListOptions: [options] trying to pass a value which is not an array');
    }

    return options;
  },

  // updateOptions: function (oldOptions, newOptions) {
  //   this.
  // },

  initialize: function () {
    this.callParent();

    this.getScrollable().getScroller().on({
      scroll: Ext.Function.createThrottled(this.scroll, 100, this),
      scope:this
    });

    this.on({
      itemswipe : this.itemSwipe,
      scope:this
    });
  },

  addOptions: function (target) {
    var options = this.getOptions(),
        width = target.dom.offsetWidth,
        height = target.dom.offsetHeight,
        optionWidth = width / options.length,
        optionsHTML = '',
        i = 0;

    for (; i < options.length; i++) {
      option = '<li class="' + options[i].cls + '" style="float:left;list-style-type: none;width:' + optionWidth.toString().split('.')[0] + 'px;height:' + height + 'px;">&nbsp;</li>';
      optionsHTML += option;
    }

    i = 0;
    var listOptions = ['<ul class="list-options-menu top-shadow bottom-shadow" style="position: absolute;top:0;left:0px;width:' + width + 'px;height:' + height + 'px;z-index:-1;">',
                   optionsHTML,
                '</ul>'].join('');

    target.dom.children[0].insertAdjacentHTML('afterend', listOptions);

    var HTMLElement;
    i = 0;

    for (; i < options.length; i++) {
      HTMLElement = Ext.DomQuery.select('li[class=' + options[i].cls + ']', target.dom)[0];
      Ext.get(HTMLElement).on({
        touchstart: function (e, node, opts) {
          this.optionTap(e, node, opts);
        },
        scope:this
      });
    }
  },

  scroll:function () {
    // this.hideAllOptions();
  },

  optionTap: function (e, node) {
    var options = this.getOptions(),
        opt;

    this.previousTarget = null;

    for (opt in options) {
      var name = options[opt].name;
      if (name === node.className) {

        this.fireEvent('optiontap', this, name, this.currentRecord, e);
        if (this.getHideAfterUse()) {
           this.hideOptions(this.currentTarget);
        }
      }
    }
  },

  itemSwipe: function (list, index, target, record, e) {
    this.currentRecord = record;

    this.addOptions(target);

    var direction = (e.deltaX > 0) ? 'right' :'left';

    if (this.getDirection() === 'both' || direction === this.getDirection()) {
      this.offsetX = (direction === 'right') ? parseInt(document.width, 10) : -parseInt(document.width, 10);
      this.showOptions(target);
    }
  },

  hideOptions: function (target) {
    var me = this,
        label = target.dom.children[0],
        anim;

    anim = Ext.create('Ext.Anim', {
      autoClear: false,
      from: {
        '-moz-transform':'translate(' + me.offsetX + 'px,0px)',
        '-webkit-transform':'translate(' + me.offsetX + 'px,0px)',
        '-o-transform':'translate(' + me.offsetX + 'px,0px)',
        '-ms-transform':'translate(' + me.offsetX + 'px,0px)',
        'transform':'translate(' + me.offsetX + 'px,0px)'
      },
      to: {
        '-moz-transform':'translate(0px,0px)',
        '-webkit-transform':'translate(0px,0px)',
        '-o-transform':'translate(0px,0px)',
        '-ms-transform':'translate(0px,0px)',
        'transform':'translate(0px,0px)'
      },
      easing: 'ease-out',
      delay: 10,
      duration: 250,
      after: function () {
        label.nextSibling.remove();
      }
    });

    anim.run(label);
  },

  showOptions: function (target) {
    var me = this,
        label = target.dom.children[0],
        anim;

    this.currentTarget = target;

    anim = Ext.create('Ext.Anim', {
      autoClear: false,
      from: {
        '-moz-transform':'translate(0px,0px)',
        '-webkit-transform':'translate(0px,0px)',
        '-o-transform':'translate(0px,0px)',
        '-ms-transform':'translate(0px,0px)',
        'transform':'translate(0px,0px)'
      },
      to: {
        '-moz-transform':'translate(' + me.offsetX + 'px,0px)',
        '-webkit-transform':'translate(' + me.offsetX + 'px,0px)',
        '-o-transform':'translate(' + me.offsetX + 'px,0px)',
        '-ms-transform':'translate(' + me.offsetX + 'px,0px)',
        'transform':'translate(' + me.offsetX + 'px,0px)'
      },
      easing: 'ease-out',
      delay: 10,
      duration: 250,
      before: function () {
        if (me.previousTarget) {
          me.hideOptions(me.previousTarget);
        }

        me.previousTarget = target;
      }
    });

    anim.run(label);
  }
});