Reminder
===============

I started this project to answer this `StackOverflow post`_. Basically, the OP wanted to have the same effect as the iOS 5 Reminder app when you add a new reminder; when you tap the add button, a new row is added to the list with a textfield that you can edit and when you've finished editing it, the reminder is automatically created. That's all this widget is about for the moment.

.. _`StackOverflow post`: http://stackoverflow.com/questions/8892792/sencha-touch-add-item-to-list-in-same-panel/10767182#10767182

Getting started
-----------------

Just add the './ux' folder within your app directory and add this at the top of your 'app.js'::

    Ext.Loader.setPath({
      'Ext.ux':   'PATH_TO_UX_FOLDER'
    });
    
Replace 'PATH_TO_UX_FOLDER' with the appropriate value (probably './ux' or './app/ux')

Then, you just need to add this in the component where you wish to use the view::

    requires: [
      'Ext.ux.Reminder'
    ],

And, then you can use the component like this for instance::

    config: {
      fullscreen: true,
      layout:'fit',
      items: [{
        xtype:'reminder',
        store:'Tasks'
      }]
    }

You can see an example in 'app/view/Main.js'

Demo
-----------------

You can check out `this demo`_

.. _`this demo`: http://titouanvanbelle.fr/GitHub/Sencha/Ext.ux.Reminder/
