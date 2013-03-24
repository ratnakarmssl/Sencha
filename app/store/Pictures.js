Ext.define('KitchenSink.store.Pictures', {
  extend: 'Ext.data.Store',

  config: {
    proxy: {
      id: 'pictures'
    },
    autoLoad: true,
    model: 'KitchenSink.model.Picture',
    data: [{
      src: 'resources/images/collection/1.jpg'
    }, {
      src: 'resources/images/collection/2.jpg'
    }, {
      src: 'resources/images/collection/3.jpg'
    }, {
      src: 'resources/images/collection/4.jpg'
    }, {
      src: 'resources/images/collection/5.jpg'
    }, {
      src: 'resources/images/collection/6.jpg'
    }, {
      src: 'resources/images/collection/6.jpg'
    }, {
      src: 'resources/images/collection/7.jpg'
    }, {
      src: 'resources/images/collection/8.jpg'
    }, {
      src: 'resources/images/collection/9.jpg'
    }, {
      src: 'resources/images/collection/10.jpg'
    }, {
      src: 'resources/images/collection/11.jpg'
    }, {
      src: 'resources/images/collection/12.jpg'
    }, {
      src: 'resources/images/collection/13.jpg'
    }, {
      src: 'resources/images/collection/14.jpg'
    }, {
      src: 'resources/images/collection/15.jpg'
    }, {
      src: 'resources/images/collection/16.jpg'
    }, {
      src: 'resources/images/collection/17.jpg'
    }, {
      src: 'resources/images/collection/18.jpg'
    }, {
      src: 'resources/images/collection/19.jpg'
    }, {
      src: 'resources/images/collection/20.jpg'
    }, {
      src: 'resources/images/collection/21.jpg'
    }]
  }
});

