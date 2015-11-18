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

$(document).ready(() => {
  $(document).on('focus', '#closing', () => {
    d = new Date();
    $('#closing').val(("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
  });

  $(document).on('focus', '#estimating', () => {
    d = new Date();
    $('#estimating').val(("0" + d.getDate()).slice(-2) + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2));
  });
});
