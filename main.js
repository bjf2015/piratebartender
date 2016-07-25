


var Pantry = [];

var Pantry = {
  strongIngredients: ['glugOfRum', 'slugOfWhiskey', 'splashOfGin'],
  saltyIngredients: ['oliveOnStick', 'saltDustedRim', 'baconRasher'],
  bitterIngredients: ['bitters', 'splashOfTonic', 'lemonTwist'],
  sweetIngredients: ['sugar', 'honey', 'cola'],
  fruityIngredients: ['orangeSlice', 'cassis', 'cherry']
}

console.log(Pantry);
$('#strong').submit(function(event) {
  event.preventDefault();
  var strong = $('#strong').val();
  alert(strong);

});

$(document).ready(function() {




});

