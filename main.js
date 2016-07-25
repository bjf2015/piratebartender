var Pantry = [];
var Pantry = {
  strongIngredients: ['glugOfRum', 'slugOfWhiskey', 'splashOfGin'],
  saltyIngredients: ['oliveOnStick', 'saltDustedRim', 'baconRasher'],
  bitterIngredients: ['bitters', 'splashOfTonic', 'lemonTwist'],
  sweetIngredients: ['sugar', 'honey', 'cola'],
  fruityIngredients: ['orangeSlice', 'cassis', 'cherry']
}

$(document).ready(function() {
      function prefCreator(strong, salty, bitter, sweet, fruity) {
        this.strong = strong;
        this.salty = salty;
        this.bitter = bitter;
        this.sweet = sweet;
        this.fruity = fruity;
    }
$('form').submit(function(event) {
    event.preventDefault();
    var preferences = new prefCreator(
     parseInt($('input[name="strong"]:checked').val()),
     parseInt($('input[name="salty"]:checked').val()),
     parseInt($('input[name="bitter"]:checked').val()),
     parseInt($('input[name="sweet"]:checked').val()),
     parseInt($('input[name="fruity"]:checked').val()));



    })
});

