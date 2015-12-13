Meteor.subscribe('items');

Template.Order.helpers({
  items: () => {
    items = Items.find({orderId: Router.current().params.orderId});
    Session.set('itemsCount', items.count())
    return items;
  },

  reverse: (items) => {
    return items.fetch().reverse();
  },

  individualFee: () => {
    fee = Session.get('deliveryFee') / Session.get('itemsCount');
    return (fee == Infinity ? 0 : Math.round(fee * 100) / 100);
  },

  individualPrice: (individualFee, cost) => {
    return Math.round((individualFee + cost) * 100) / 100;
  },

  total: (deliveryFee) => {
    return Math.round(((Items.find({orderId: Router.current().params.orderId})
              .fetch().reduce( (sum, item) => item.cost + sum, 0) + deliveryFee) * 100)) / 100;
  },

  isOpened: (closes) => {
    if (closes) return closes.getTime() < (new Date()).getTime();
    return false;
  },

  cart: () => {
    return mountOrder(this.items.fetch());
  },

  whoWithCommas: (who) => {
    return who.join(', ');
  },

  displayOrder: (closes) => {
    isClosing = false;
    if (closes) isClosing = closes.getTime() < (new Date()).getTime();
    return isClosing || Session.get('showOrder');
  }
});

Template.Order.events({
  'click .delete': (e) => {
    Meteor.call('removeItem', e.currentTarget.id);
  },

  'click #see-order': (e) => {
    Session.set('showOrder', true);
  }
});
