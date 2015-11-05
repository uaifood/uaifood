Meteor.subscribe("restaurants");

Template.restaurants.helpers({
  restaurants: () => {
    return Restaurants.find({});
  }
});
