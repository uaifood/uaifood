Meteor.publish("restaurants", () => {
    return Restaurants.find();
});

Meteor.publish("orders", () => {
    return Orders.find();
});
