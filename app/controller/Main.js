Ext.define('KitchenSink.controller.Main', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      main: 'main',
      list: 'main list[name=mainlist]'
    },

    control: {
      list: {
        itemtap: 'onItemTap'
      }
    }
  },

  onItemTap: function (list, index, target, record, e) {
    var xtype = record.data.xtype;
    this.getMain().push({
      xtype: xtype
    });
  }
});
