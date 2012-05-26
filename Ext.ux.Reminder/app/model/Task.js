Ext.define('Reminder.model.Task', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      'timestamp',
      'title'
    ]
  }
});
