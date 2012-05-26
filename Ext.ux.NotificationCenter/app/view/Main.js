Ext.define("NotificationCenter.view.Main", {
  extend: 'Ext.Panel',

  requires: [
  'Ext.ux.NotificationCenter'
  ],

  config: {
    fullscreen: true,
    items: [{
      xtype:'notificationcenter',
      store:'Notifications'
    }]
  },
  initialize:function(){
    this.callParent(arguments);
    
    Ext.getStore('Notifications').add([
      { type: 'Phone', icon: 'phone', title: 'Kyle Rix', description: 'Voicemail'},
      { type: 'Messages', icon: 'sms', title: 'Steve Campbell', description: 'I\'m gonna be late. Start the meeting without me.'},
      { type: 'Facebook', icon: 'facebook', title: 'Facebook', description: 'Frank Filipeli commented on your link : "Great article"'},
      { type: 'Facebook', icon: 'facebook', title: 'Facebook', description: 'Sarah Filipeli likes your status'} 
    ]);
  }
});