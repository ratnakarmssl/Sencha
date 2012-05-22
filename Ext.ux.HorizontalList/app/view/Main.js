Ext.define("HorizontalList.view.Main", {
  extend: 'Ext.Panel',

  requires: [
  'Ext.ux.HorizontalList'
  ],

  config: {
    fullscreen: true,

    defaults: {
      style: 'background: #fff',
      xtype: 'container'
    },

    items: [{
      xtype:'horizontallist',
      height: 55,
      data:[
        { title : 'Item 1', content: 'This is the item 1'},
        { title : 'Item 2', content: 'This is the item 2'},
        { title : 'Item 3', content: 'This is the item 3'},
        { title : 'Item 4', content: 'This is the item 4'},
        { title : 'Item 5', content: 'This is the item 5'},
        { title : 'Item 6', content: 'This is the item 6'},
        { title : 'Item 7', content: 'This is the item 7'},
      ]
    }]
  }
});