Infinite Carousel
===============

This is an infinite and possibly automatic carousel.

Getting started
-----------------

Just add the './ux' folder within your app directory and add this at the top of your 'app.js'::

    Ext.Loader.setPath({
      'Ext.ux':   'PATH_TO_UX_FOLDER'
    });
    
Replace 'PATH_TO_UX_FOLDER' with the appropriate value (probably './ux' or './app/ux')

Then, you just need to add this in the component where you wish to use the view::

    requires: [
      'Ext.ux.InfiniteCarousel'
    ],

And, then you can use the component like this for instance::

    config: {
      fullscreen: true,
      items: [{
        xtype:'infinitecarousel',
        height: 128,
        delay:3000,
        items:[{
          xtype:'panel',
          html:'Page 1'
        },{
          xtype:'panel',
          html:'Page 2'
        },{
          xtype:'panel',
          html:'Page 3'
        },{
          xtype:'panel',
          html:'Page 4'
        },{
          xtype:'panel',
          html:'Page 5'
        }]
      }]
    }

You can see an example in 'app/view/Main.js'

Documentation
-----------------

- **delay** : Miliseconds before switching to the next items. Set it to ``0`` to disable automatic mode.

Demo
-----------------

You can check out `this demo`_

.. _`this demo`: http://titouanvanbelle.fr/GitHub/Sencha/Ext.ux.InfiniteCarousel/
