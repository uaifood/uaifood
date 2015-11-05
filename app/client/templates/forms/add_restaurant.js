Template.addRestaurant.events({

  'submit #adding-restaurant': (event) => {
    restaurant = {
      name: event.target.name.value,
      phone: parseInt(event.target.phone.value.replace(/[^0-9]/, '')),
      deliveryFee: parseFloat(event.target.deliveryfee.value.replace(',', '.').replace('R$', '')),
      image: event.target.image.value,
      menu: event.target.menu.value
    }

    Meteor.call('addRestaurant', restaurant,
      (error, result) => {
        if (error) {
          alert('Preencha os valores corretamente!');
          console.log(error);
        } else {
          if (window.location.pathname.match('restaurants')) $('.close').trigger('click');
          else window.location.pathname = '/restaurants/';
        }
      });
    return false;
  }

});
