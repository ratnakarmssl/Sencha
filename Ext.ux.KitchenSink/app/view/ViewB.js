Ext.define("KitchenSink.view.ViewB", {
  extend: 'Ext.Container',

  xtype: 'viewb',

  requires:  [
    'Ext.ux.ListOptions'
  ],

  config:  {
    layout: 'fit',
    title: 'List Options',
    items: [{
      xtype: 'listoptions',
      store: 'Tasks',
      cls: 'list-options',
      itemCls:' list-options-item',
      pressedCls: 'list-options-pressed',
      selectedCls: 'list-options-selected',
      itemTpl: '{title}',
      direction: 'right', // 'left', 'right', 'both'
      allowMultiple: false, // true or false
      hideAfterUse: true,// true of false
      options: [{
        name: 'bookmark',
        cls: 'bookmark',
      },{
        name: 'action',
        cls: 'action'
      },{
        name: 'delete',
        cls: 'delete'
      }]
    }]
  }
});

