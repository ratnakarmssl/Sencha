Ext.define("ListOptions.view.Main", {
  extend: 'Ext.Panel',

  requires: [
  'Ext.ux.ListOptions'
  ],

  config: {
    fullscreen: true,
    layout:'fit',
    items: [{
      xtype:'toolbar',
      ui:'dark',
      docked:'top',
      height:43,
      title:'List Options'
    },{
      xtype:'listoptions',
      store:'Tasks',
      direction: 'right', // 'left', 'right', 'both'
      allowMultiple: false, // true or false
      options: [{
        cls: 'bookmark',
      }, {
        cls: 'like'
      },{
        cls: 'edit',
      }, {
        cls: 'delete'
      }]
    }]
  }
});