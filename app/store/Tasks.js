Ext.define('KitchenSink.store.Tasks', {
  extend: 'Ext.data.Store',

  requires:"Ext.data.proxy.LocalStorage",

  config: {
    proxy: {
      type: 'localstorage',
      id: 'reminder-tasks'
    },
    autoLoad: true,
    model: 'KitchenSink.model.Task',
    sorters: [{
      property : 'status',
    }],
    direction: 'ASC',

    grouper: {
      groupFn: function (record) {
        return record.get('status');
      },
    },

    sorters: [{
      sorterFn: function (record1, record2) {
        var name1 = record1.data.status.substr(0, 1),
            name2 = record2.data.status.substr(0, 1);

        return name1 > name2 ? 1 : (name1 === name2 ? 0 : -1);
      }
    }],
  }
});

