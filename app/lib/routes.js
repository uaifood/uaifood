Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('restaurants', {
  path: '/restaurants/',
  data: function() {
    return Restaurants.find({});
  }
});

Router.route('order', {
  path: '/order/:orderId',
  data: function() {
    order = Orders.findOne(this.params.orderId);
    if (order) Session.set('deliveryFee', order.restaurant.deliveryFee);
    return order;
  }
});
