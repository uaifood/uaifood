Meteor.subscribe("orders");

Handlebars.registerHelper('howMany', function (orderId) {
    return Items.find({orderId: orderId}).count();
});

Template.Home.helpers({
  orders: () => {
    return Orders.find({"closes": { $gte : new Date() }}, {sort: {'closes': -1}});
  },

  expired: () => {
    return Orders.find({"closes": { $lt : new Date() }}, {sort: {'closes': -1}});
  }
});
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'click .order': (event) => {
    window.location.pathname = `/order/${event.currentTarget.id.replace('order-', '')}/`;
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
