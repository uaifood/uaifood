Template.addItem.events({
  'submit #add-item': (event) => {
    item = {
      orderId: event.target.orderId.value,
      name: event.target.name.value,
      cost: parseFloat(event.target.cost.value.replace(',', '.').replace('R$', '')),
      what: event.target.what.value
    }

    Meteor.call('addItem', item,
      (error, result) => {
        if (error) {
          alert('Preencha os valores corretamente!');
          console.log(error);
        }
      });
    return false;
  }
});
