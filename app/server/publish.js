Meteor.publish("restaurants", () => {
    return Restaurants.find();
});

Meteor.publish("orders", (orderId) => {
    return Orders.find({orderId: orderId});
});

Meteor.publish("items", () => {
    return Items.find();
});
