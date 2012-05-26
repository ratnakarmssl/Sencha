Ext.define("Reminder.view.Main", {
  extend: 'Ext.Panel',

  requires: [
  'Ext.ux.Reminder'
  ],

  config: {
    fullscreen: true,
    layout:'fit',
    items: [{
      xtype:'reminder',
      store:'Tasks'
    }]
  }
});