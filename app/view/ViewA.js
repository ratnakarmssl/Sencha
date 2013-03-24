Ext.define("KitchenSink.view.ViewA", {
  extend: 'Ext.Container',

  xtype: 'viewa',

  requires:  [
    'Ext.ux.InfiniteCarousel'
  ],

  config:  {
    layout: 'fit',
    title: 'Infinite Carousel',
    items: [{
      xtype: 'infinitecarousel',
      centered: true,
      height: 320,
      width: '100%',
      docked: 'top',
      items: [{
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/collection/1.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/collection/2.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/collection/3.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/collection/4.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/collection/5.jpg)"></div>'
      }]
    }]
  }
});

