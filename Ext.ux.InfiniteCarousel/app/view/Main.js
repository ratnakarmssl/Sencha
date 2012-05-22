Ext.define("InfiniteCarousel.view.Main", {
  extend: 'Ext.Panel',

  requires: [
  'Ext.ux.InfiniteCarousel'
  ],

  config: {
    fullscreen: true,

    defaults: {
      style: 'background: #fff',
      xtype: 'container'
    },

    items: [{
      xtype:'infinitecarousel',
      height: 128,
      delay:3000,
      items:[{
        xtype:'panel',
        html:'Page 1'
      },{
        xtype:'panel',
        html:'Page 2'
      },{
        xtype:'panel',
        html:'Page 3'
      },{
        xtype:'panel',
        html:'Page 4'
      },{
        xtype:'panel',
        html:'Page 5'
      }]
    }]
  }
});