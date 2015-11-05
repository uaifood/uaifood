Template.addOrder.helpers({
  restaurants: () => {
    return Restaurants.find({});
  }
});

Template.addOrder.events({
  'submit #add-order-form': (event) => {
    order = {
      restaurantId: event.target.restaurant.value,
      by: event.target.by.value,
      deliveryFee: parseFloat(event.target.deliveryfee.value.replace(',', '.').replace('R$', '')),
      closes: new Date(event.target.closing.value),
      delivery: new Date(event.target.estimating.value)
    }

    Meteor.call('addOrder', order,
      (error, result) => {
        if (error) {
          alert('Preencha os valores corretamente!');
          console.log(error);
        } else {
          window.location.pathname = `/order/${result}/`;
        }
      });
    return false;
  }
});
