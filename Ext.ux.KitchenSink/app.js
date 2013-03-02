Ext.Loader.setPath({
  'Ext': '../../src',
  'Ext.ux':   './ux'
});

Ext.application({
  name: 'KitchenSink',

  requires: [],

  controllers: [
    'Main',
    'ViewB'
  ],

  views: [
    'Main',
    'ViewA',
    'ViewB',
    'ViewC'
  ],

  stores: [
    'Tasks',
    'Notifications'
  ],

  models: [
    'Task',
    'Notification'
  ],

  icon: {
    57: 'resources/icons/Icon.png',
    72: 'resources/icons/Icon~ipad.png',
    114: 'resources/icons/Icon@2x.png',
    144: 'resources/icons/Icon~ipad@2x.png'
  },

  viewport: {
    autoMaximize: true
  },

  phoneStartupScreen: 'resources/loading/Homescreen.jpg',
  tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

  launch: function() {
    Ext.fly('appLoadingIndicator').destroy();

    var store = Ext.getStore('Tasks');

    store.removeAll();
    store.sync();

    if (store.getCount() <= 0) {
      store.add([
        {title: 'Apples', status: '2do'},
        {title: 'Cheerios', status: '2do'},
        {title: 'Milk', status: '2do'},
        {title: 'Beer', status: '2do'}
      ]);
      store.sync();
    }

    store.load();

    Ext.create('KitchenSink.view.Main').push({
      title: 'Kitchen Sink',
      xtype: 'list',
      name: 'mainlist',
      itemTpl: '{title}',
      data: [{
        title: 'Infinite Carousel',
        xtype: 'viewa'
      },{
        title: 'List Options',
        xtype: 'viewb'
      },{
        title: 'Reminder',
        xtype: 'viewc'
      },{
        title: 'Three Sixty View',
        xtype: 'viewd'
      }]
    });
  },

  onUpdated: function() {
    Ext.Msg.confirm(
      "Application Update",
      "This application has just successfully been updated to the latest version. Reload now?",
      function() {
        window.location.reload();
      }
    );
  }
});
