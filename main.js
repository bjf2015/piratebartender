var Pantry = [];
var Pantry = {
    strong: ['glugOfRum', 'slugOfWhiskey', 'splashOfGin'],
    salty: ['oliveOnStick', 'saltDustedRim', 'baconRasher'],
    bitter: ['bitters', 'splashOfTonic', 'lemonTwist'],
    sweet: ['sugar', 'honey', 'cola'],
    fruity: ['orangeSlice', 'cassis', 'cherry']
}

	
$(document).ready(function() {
    function prefCreator(strong, salty, bitter, sweet, fruity) {
        this.strong = strong;
        this.salty = salty;
        this.bitter = bitter;
        this.sweet = sweet;
        this.fruity = fruity;
    }
    $('#button').click(function(event) {
        var Drink = {};
        event.preventDefault();
        var preferences = new prefCreator(
            parseInt($('input[name="strong"]:checked').val()),
            parseInt($('input[name="salty"]:checked').val()),
            parseInt($('input[name="bitter"]:checked').val()),
            parseInt($('input[name="sweet"]:checked').val()),
            parseInt($('input[name="fruity"]:checked').val()));
        console.log(preferences);
        for (var key in preferences){
        	console.log(key);
        	console.log(preferences[key]);
        	if (preferences[key]) {
        		Drink[key] = Pantry[key][Math.floor(Math.random() * 3)];
        		console.log(Drink);

        }

        	
        }
        


    })
});

