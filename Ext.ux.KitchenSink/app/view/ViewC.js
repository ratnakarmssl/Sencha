Ext.define("KitchenSink.view.ViewC", {
  extend: 'Ext.Container',

  xtype: 'viewc',

  requires:  [
    'Ext.ux.Reminder'
  ],

  config:  {
    layout: 'fit',
    title: 'Reminder',
    items: [{
      xtype: 'reminder',
      store: 'Tasks',
      cls: 'reminder-list',
      itemCls: 'reminder-item',
      pressedCls: 'reminder-item-pressed',
      selectedCls: 'reminder-item-selected',
      itemTpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div>',
          '<div class="reminder-item-ticker">',
            '<tpl if="status == \'Done\'">',
              '<span class="checkbox checked">',
                '<input name="{id}" type="checkbox" value="1" checked="checked">',
              '</span>',
            '<tpl else>',
              '<span class="checkbox">',
                '<input name="{id}" type="checkbox" value="1">',
              '</span>',
            '</tpl>',
          '</div>',
          '<div class="reminder-item-title"><span class="label">{title}</span></div>',
        '</div>',
        '</tpl>'
      ),
      grouped:true
    }]
  }
});

