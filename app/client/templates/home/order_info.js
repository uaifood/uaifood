Meteor.subscribe("restaurants");

$(document).ready(() => {
  setInterval(() => {
    $('.friendly-time').each(function(){
      $(this).text(friendlyTime(new Date($(this).attr('data-time'))));
    });

    $('.delivery-time').each(function(){
      $(this).text(estimatedTime(new Date($(this).attr('data-time'))));
    });
  }, 60000);
});
