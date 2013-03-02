Ext.define('KitchenSink.controller.ViewB', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      main: 'viewb',
      list: 'viewb list'
    },

    control: {
      list: {
        optiontap: 'onOptionTap'
      }
    }
  },

  onOptionTap: function (list, option, record, e) {
    alert(option + ': ' + record.get('title'));
  }
});
