var target;
var guess_input_text;
var guess_input;
var colors;
var finished = false;
var total_attempts = 0;
var colorSerial;

function startGame() {
    colors = ["aliceblue",
        "antiquewhite",
        "aqua",
        "aquamarine",
        "beige",
        "black",
        "blue",
        "brown",
        "burlywood",
        "cadetblue",
        "cornsilk",
        "crimson",
        "cyan",
        "darkgrey",
        "darkgreen",
        "navy",
        "olive",
        "pink",
        "red",
        "silver",
        "teal",
        "wheat",
        "yellow"
    ];
    colorSerial = Math.floor(Math.random() * colors.length) + 1;
    console.log(colorSerial);
    target = colors[colorSerial].toLowerCase();

    console.log(target);
    while (!finished) {
        guess_input_text = prompt(" Welcome To Color Guessing Game!\n \n I am thinking of one of those colors:\n AliceBlue , AntiqueWhite , Aqua , Aquamarine , Beige , Black , Blue , Brown , BurlyWood , CadetBlue , Cornsilk , Crimson , Cyan  , DarkGrey , DarkGreen , Navy,Olive , Pink,Red , Silver , Teal , Wheat , Yellow \n \n What color am i thinking of?");
        guess_input = guess_input_text.toLowerCase();
        console.log("This is guess input value " + guess_input);
        total_attempts += 1;
        finished = check_guess();
        console.log("total attempts" + total_attempts);
    }
}

function check_guess() {
    // Check the conditions
    // return appropriate results  
    var checkColor = colors.indexOf(guess_input) > -1;

    if (checkColor === false) {
        alert("Sorry I don't recognize your color \n Please Try Again!");
        return false;
    } else if (checkColor === true) {
        if (target == guess_input) {
        	document.body.style.background = target;
            alert("Congratulations You won the game \n you have takes " + total_attempts + " attempts.");
            return true;
            console.log("matched");
        } else if(target < guess_input){
        	alert("Sorry,  your guess is not correct! \n Hint: Your color is alphabetically Higher than mine \n Please Try Again");
        }
        else if( target > guess_input){
        	alert("Sorry,  your guess is not correct! \n Hint: Your color is alphabetically Lower than mine \n Please Try Again");
        }
    }
}
