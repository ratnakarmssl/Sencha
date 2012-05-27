List Options
===============

Basically, I tried to make a `List Options Plugin`_ for Sencha Touch 2

.. _`List Options Plugin`: http://www.swarmonline.com/2011/03/ext-ux-touch-listoptions-add-a-twitter-style-menu-to-your-list-items/

Getting started
-----------------

Just add the './ux' folder within your app directory and add this at the top of your 'app.js'::

    Ext.Loader.setPath({
      'Ext.ux':   'PATH_TO_UX_FOLDER'
    });
    
Replace 'PATH_TO_UX_FOLDER' with the appropriate value (probably './ux' or './app/ux')

Then, you just need to add this in the component where you wish to use the view::

    requires: [
      'Ext.ux.ListOptions'
    ],

And, then you can use the component like this for instance::

    config: {
      fullscreen: true,
      items: [{
        xtype:'listoptions',
        store:'Tasks',
        direction: 'right';
        allowMultiple: false,
        options: [{
          cls: 'bookmark',
          handler:function(record){
            alert('Bookmark : '+record.data.title);
          }
        },{
          cls: 'action',
          handler:function(record){
            alert('Action : '+record.data.title);
          }
        },{
          cls: 'delete',
          handler:function(record){
            alert('Delete : '+record.data.title);
          }
        }
      }]
    }

You can see an example in 'app/view/Main.js'

Documentation
-----------------

- **direction** : The direction you want the user to swipe the list item. Possitable value are ``right``, ``left`` and ``both``. Default value is ``right``.
- **allowMultiple** : ``true`` if you want the user to be able to swipe multiple items. Default value is ``false``.
- **hideAfterUse** : ``true`` if you want the to hide the option menu when the user clicks on an option. Default value is ``true``.

Demo
-----------------

You can check out `this demo`_

.. _`this demo`: http://titouanvanbelle.fr/GitHub/Sencha/Ext.ux.ListOptions/
