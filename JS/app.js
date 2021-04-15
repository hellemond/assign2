/* Function to change theme between light and dark via button press,
changes background-colour of body tag */

/* Function to create note taking area from clicking new note button.
- Ask Nathan how note taking area is hidden/revealed. */

/* For loop function to check if save or cancel is pressed.
-if save, remove and send text to notes area
-if cancel, remove note and dont send to notes area */

/* notes area should be an array that saved notes get pushed into. */

const cccockkkanfball = document.getElementById('darkbutton');

function changetheme(){
    var check = document.querySelector('.theme').innerHTML;
    if (check === 'Dark') {
    document.querySelector('.buttstyle').style.color = '#31748f';
    
    document.querySelector('.dark').innerHTML = "Light";
    }
    if (check === 'Light') {        
    document.querySelector('.dark').innerHTML = "Dark";
    }
}


cccockkkanfball.addEventListener("click", changetheme);
