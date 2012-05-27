Notification Center
===============

This is basically the same system as the Notification Center, you just need to drag your finger from the very left of the screen to the right to make a panel appear. 

Getting started
-----------------

Just add the './ux' folder within your app directory and add this at the top of your 'app.js'::

    Ext.Loader.setPath({
      'Ext.ux':   'PATH_TO_UX_FOLDER'
    });
    
Replace 'PATH_TO_UX_FOLDER' with the appropriate value (probably './ux' or './app/ux')

Then, you just need to add this in the component where you wish to use the view::

    requires: [
      'Ext.ux.NotificationCenter'
    ],

And, then you can use the component like this for instance::

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
        { type: 'Phone', icon: 'phone', title: 'Lisa Brown', description: 'Missed Call'},
        { type: 'Phone', icon: 'phone', title: 'Lisa Brown', description: 'Voicemail'},
        { type: 'Messages', icon: 'sms', title: 'Steve Campbell', description: 'I\'m gonna be late. Start the meeting without me.'},
        { type: 'Messages', icon: 'sms', title: 'Lisa Brown', description: 'Pick up your damn phone !!'},
        { type: 'Facebook', icon: 'facebook', title: 'Facebook', description: 'Frank Filipeli commented on your link : "Great article"'},
      ]);
    }

You can see an example in 'app/view/Main.js' and also find the store and the model here.

Demo
-----------------

You can check out `this demo`_

.. _`this demo`: http://titouanvanbelle.fr/GitHub/Sencha/Ext.ux.NotificationCenter/
