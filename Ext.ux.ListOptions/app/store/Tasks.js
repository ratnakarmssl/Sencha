Ext.define('ListOptions.store.Tasks', {
  extend: 'Ext.data.Store',
  requires:"Ext.data.proxy.LocalStorage",
  config: {
    model: 'ListOptions.model.Task', 
    data:[{
      title:'Item 1'
    },{
      title:'Item 2'
    },{
      title:'Item 3'
    }]
  }
});

