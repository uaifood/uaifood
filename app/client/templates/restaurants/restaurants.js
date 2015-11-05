Meteor.subscribe("restaurants");

Template.restaurants.helpers({
  restaurants: () => {
    return Restaurants.find({});
  }
});

Template.restaurants.events({
  'click .delete': (e) => {
    Meteor.call('removeRestaurant', e.currentTarget.id);
  }
});
