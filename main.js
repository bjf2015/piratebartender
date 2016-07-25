var Questions = new Array();
var Ingredients = new Array();
var Pantry = new Array();

Questions[0] = new question(
  'Do ye like yer drinks strong?');

Questions[1] = new question(
  'Do ye like it with a salty tang?') ;

Questions[2] = new question(
  'Are ye a lubber who likes it bitter?');

Questions[3] = new question(
  'Would ye like a bit of sweetness with yer poison?');

Questions[4] = new question(
  'Are ye one for a fruity finish?');

var Ingredients = new Array();

var Ingredients = function(ingredientName, ingredientType) {
  this.ingredientName = ingredientName;
  this.ingredientType = ingredientType;
}

var glugOfRum = new Ingredients('glugOfRum', 'strong');


$(document).ready(function() {
  console.log(Ingredients);

});
