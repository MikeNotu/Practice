(function($) {

  $('.first.circle').circleProgress({
    value: .5
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });

})(jQuery);
