Meteor.publish("restaurants", () => {
    return Restaurants.find();
});
