Three Sixty View
===============

I started this project to answer this `StackOverflow post`_. Basically, the OP wanted to create `this`_ with Sencha Touch 2.

.. _`this`: http://lukedurrant.com/threesixty/index.htm
.. _`StackOverflow post`: http://stackoverflow.com/questions/10725598/360-rotation-of-image-in-sencha-touch-2/10728733#10728733

Getting started
-----------------

Just add the './ux' folder within your app directory and add this at the top of your 'app.js'::

    Ext.Loader.setPath({
      'Ext.ux':   'PATH_TO_UX_FOLDER'
    });
    
Replace 'PATH_TO_UX_FOLDER' with the appropriate value (probably './ux' or './app/ux')

Then, you just need to add this in the component where you wish to use the view::

    requires: [
      'Ext.ux.ThreeSixtyView'
    ],

And, then you can use the component like this for instance::

    config: {
      fullscreen: true,
      items: [{
        xtype:'threesixtyview',
        data:[{ 
          src : 'resources/images/threesixty/threesixty/Seq_v04_640x378_01.jpg'
        },  { 
          src : 'resources/images/threesixty/threesixty/Seq_v04_640x378_02.jpg'
        },  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_03.jpg'
        },  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_04.jpg'
        },  
        // ...
            { 
          src : 'resources/images/threesixty/Seq_v04_640x378_68.jpg'
        }  ,  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_69.jpg'
        }  ,  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_70.jpg'
        }  ,  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_71.jpg'
        }  ,  { 
          src : 'resources/images/threesixty/Seq_v04_640x378_72.jpg'
        }]
      }]
    }

You can see an example in 'app/view/Main.js'

Demo
-----------------

You can check out `this demo`_

.. _`this demo`: http://titouanvanbelle.fr/GitHub/Sencha/Ext.ux.ThreeSixtyView/
