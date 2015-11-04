Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
  'click #add-restaurant-button': () => {
    $('#forms').css('display', 'table');
    $('#add-restaurant').show();
    return false;
  },
  
  'click #order-something': () => {
    $('#forms').css('display', 'table');
    $('#add-order').show();
    return false;
  },
  
  'click .close': () => {
    $('#forms, #add-restaurant, #add-order').hide();
  }
});
