// TODO: tap and hold to edit item

Ext.define('Ext.ux.Reminder', {
  extend: 'Ext.List',

  xtype: 'reminder',

  config: {

  },

  initialize: function () {
    this.callParent(arguments);

    var newTaskBtn = Ext.create('Ext.Button',{
      text: 'New',
      align: 'right',
      handler: this.addTask,
      scope: this
    });

    Ext.ComponentQuery.query('navigationview')[0].getNavigationBar().add(newTaskBtn);

    this.on('itemtap', this.itemTap, this);
    this.on('itemtaphold', this.itemTapHold, this);
  },

  itemTapHold: function (list, index, target, record) {
   alert('itemtaphold');
  },

  itemTap: function (list, index, target, record) {
    var query = Ext.DomQuery.select('div[class="reminder-item-ticker"] input')[index];

    if (record.get('status') !== 'Done') {
      query.checked = true;
      query.className += ' checked';
      record.set('status', 'Done');
    } else {
      // query.className = query.className;
      window.q = query;
      query.checked = false;
      record.set('status', '2do');
    }

    list.getStore().load();
  },

  addTask: function () {
    var me = this,
        store = this.getStore(),
        selector = 'div[class="reminder-item-title"]',
        query,
        record,
        textfield,
        inputHTML, input;

    record = store.add({
      title:'',
      status:'2do'
    });

    textfield = Ext.create('Ext.field.Text', {
      listeners: {
        blur: function () {
          this.createTask(record);
        },
        scope: this
      }
    });

    inputHTML = textfield.element.dom.innerHTML,
    input = inputHTML.match(/<input.+?\/?>/g),
    query = Ext.DomQuery.select(selector);

    query[store.getGroups()[0].children.length - 1].innerHTML = '<div class="reminder-textfield" id="new-task">' + input + '</div>';
    selector += ' input';
    query = Ext.DomQuery.select(selector);
    query[query.length - 1].focus();
  },

  createTask: function (rec) {
    var value = Ext.DomQuery.select('div[id=new-task] input')[0].value,
        store = this.getStore();

    if (value.length > 0) {
      store.add({
        title: value,
        status: '2do'
      });
    }

    store.remove(rec);
    store.sync();
  }
});