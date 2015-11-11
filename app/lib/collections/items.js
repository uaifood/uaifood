Items = new Mongo.Collection('items');

Meteor.methods({

  addItem: (item) => {
    
    check(item, {
      orderId: String,
      name: String,
      what: String,
      cost: Number
    });

    if (!Orders.find({_id: item.orderId})) {
      throw new Meteor.Error(403, 'Invalid order');
    } else {
      return Items.insert(item);
    }
  },

  removeItem: (id) => {
    Items.remove(id);
  }

});
