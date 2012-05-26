Ext.Loader.setPath({
    'Ext': '../../src',
    'Ext.ux':   './ux'
});

Ext.application({
    name: 'Reminder',

    requires: [],

    views: [
        'Main'
    ],
    
    models: [
        'Task'
    ],
    
    stores: [
        'Tasks'
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();

        Ext.Viewport.add(Ext.create('Reminder.view.Main'));
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
