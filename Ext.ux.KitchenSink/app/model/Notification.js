Ext.define('KitchenSink.model.Notification', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      'id',
      'type',
      'title',
      'icon',
      'description'
    ]
  }
});
