Restaurants = new Mongo.Collection('restaurants');

Meteor.methods({

  addRestaurant: (restaurant) => {
    
    check(restaurant, {
         name: String,
         phone: Number,
         deliveryFee: Number,
         image: Match.Optional(String),
         menu: Match.Optional(String)
    })

    return Restaurants.insert(restaurant);

  },

  removeRestaurant: (id) => {
    Restaurants.remove(id);
  }

});
