
$('.first.circle').circleProgress({
  value: 0.90,
  fill: {gradient: [['#ff1e41', .5], ['#ff5f43', .5]], gradientAngle: Math.PI / 4}
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');;
});



$('.second.circle').circleProgress({
  value: 0.85
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(85 * progress) + '<i>%</i>');
});


$('.third.circle').circleProgress({
  value: 0.65,
  fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
});

$('.forth.circle').circleProgress({
  value: 0.52,
  fill: {gradient: [['#DE0B86', .5], ['#F56EBD', .5]], gradientAngle: Math.PI / 4}
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').html(parseInt(52 * progress) + '<i>%</i>');
});

$('.fifth.circle').circleProgress({
  value: 0.55,
  fill: {gradient: [['#078F2B', .5], ['#26F05C', .5]], gradientAngle: Math.PI / 4}
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').html(parseInt(56 * progress) + '<i>%</i>');
});

