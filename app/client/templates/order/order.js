Meteor.subscribe('items');

Template.Order.helpers({
  items: () => {
    items = Items.find({orderId: Router.current().params.orderId});
    Session.set('itemsCount', items.count())
    return items;
  },

  individualFee: () => {
    fee = Session.get('deliveryFee') / Session.get('itemsCount');
    return (fee == Infinity ? 0 : fee);
  },

  individualPrice: (individualFee, cost) => {
    return individualFee + cost;
  },

  total: (deliveryFee) => {
    return Items.find({orderId: Router.current().params.orderId})
              .fetch().reduce( (sum, item) => item.cost + sum, 0) + deliveryFee;
  },

  isOpened: (closes) => {
    return closes.getTime() < (new Date()).getTime();
  }
});

Template.Order.events({
  'click .delete': (e) => {
    Meteor.call('removeItem', e.currentTarget.id);
  }
});
