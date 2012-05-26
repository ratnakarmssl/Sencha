Ext.define('Reminder.store.Tasks', {
  extend: 'Ext.data.Store',

  config: {
    proxy: new Ext.data.LocalStorageProxy({
        id: 'reminder-tasks'
    }),
    autoLoad: false,
    model: 'Reminder.model.Task',    
  }
});
