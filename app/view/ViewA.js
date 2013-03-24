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
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/infinitecarousel/1.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/infinitecarousel/2.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/infinitecarousel/3.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/infinitecarousel/4.jpg)"></div>'
      }, {
        html: '<div class="carousel-item picture" style="background-image:url(resources/images/infinitecarousel/5.jpg)"></div>'
      }]
    }]
  }
});

