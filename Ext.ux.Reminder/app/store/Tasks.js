Ext.define('Reminder.store.Tasks', {
  extend: 'Ext.data.Store',
  requires:"Ext.data.proxy.LocalStorage",
  config: {
    proxy: {
      type: 'localstorage',
      id: 'reminder-tasks'
    },
    autoLoad: true,
    model: 'Reminder.model.Task',    
  }
});

