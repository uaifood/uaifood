Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client',
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('restaurants');
  }
});

Router.route('restaurants', {
  path: '/restaurants/'
});

Router.route('order', {
  path: '/order/:orderId',
  waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('orders');
  },
  data: function() {
    order = Orders.findOne(this.params.orderId);
    if (order) Session.set('deliveryFee', order.restaurant.deliveryFee);
    if (order) Session.set('closes', order.closes);
    return order;
  }
});
