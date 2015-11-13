Items = new Mongo.Collection('items');

Meteor.methods({

  addItem: (item) => {
    
    check(item, {
      orderId: String,
      name: String,
      what: String,
      cost: Number
    });

    order = Orders.findOne({_id: item.orderId});

    if (!order) {
      throw new Meteor.Error(403, 'Invalid order');
    } else {
      if (order.closes.getTime() < (new Date()).getTime()) {
        throw new Meteor.Error(403, 'This order expired');
      } else {
        return Items.insert(item);
      }
    }
  },

  removeItem: (id) => {
    Items.remove(id);
  }

});
