Meteor.subscribe("orders");

Template.Home.helpers({
  orders: () => {
    return Orders.find({});
  }
});
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .order': (event) => {
    window.location.pathname = `/order/${event.target.id.replace('order-', '')}/`;
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
  $(document).ready(() => {
    $('.datetime-input').inputmask('datetime');
  });
});

Template.Home.onDestroyed(function () {
});
