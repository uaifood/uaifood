Meteor.subscribe("restaurants");

Template.restaurants.helpers({
  restaurants: () => {
    return Restaurants.find({});
  },

  deliveryFeeFormated: (deliveryFee) => {
    return deliveryFee.toFixed(2);
  }
});

Template.restaurants.events({
  'click .delete': (e) => {
    Meteor.call('removeRestaurant', e.currentTarget.id);
  }
});
