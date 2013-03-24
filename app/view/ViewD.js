Ext.define("KitchenSink.view.ViewD", {
  extend: 'Ext.Container',

  xtype: 'viewd',

  requires:  [
    'Ext.ux.CollectionView'
  ],

  config:  {
    layout: 'fit',
    title: 'Collection View',
    items: [{
      xtype: 'collectionview',
      store: 'Pictures',
      itemTpl: '<div class="picture" style="background-image:url({src})"></div>',
    }]
  }
});

