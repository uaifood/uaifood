Template.restaurantInfo.events({
  'click .delete': (e) => {
    Meteor.call('removeRestaurant', e.currentTarget.id);
  }
});
