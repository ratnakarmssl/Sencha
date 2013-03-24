Ext.define('Ext.ux.CollectionView', {
  extend: 'Ext.Container',

  xtype: 'collectionview',

  config: {
    itemsPerLine: 3,
    direction: 'veritcal'
  },

  initialize: function () {
    this.callParent(arguments);

  }

});