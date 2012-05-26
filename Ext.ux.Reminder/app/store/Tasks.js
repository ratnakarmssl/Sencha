Ext.define('Reminder.store.Tasks', {
  extend: 'Ext.data.Store',

  config: {
    model: 'Reminder.model.Task',
    data: [
      { title: 'Task 1'},
      { title: 'Task 2'},
      { title: 'Task 3'}
    ]
    
  }
});
