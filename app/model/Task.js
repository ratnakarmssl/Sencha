Ext.define('KitchenSink.model.Task', {
  extend: 'Ext.data.Model',

  config: {
    identifier: 'uuid',
    fields: [
      'title',
      'status'
    ]
  }
});
