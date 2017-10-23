// Tuner Function
// Scott Caudle
// 10/21/17

//Declare Variables
const homePage = document.querySelector(".where-you-tune");






// Load the tuning that was clicked on
$(document).ready(function(){
    // Changing the pages
    $('.tuning-selection').click(function(e){
        e.preventDefault(); //preventing default browser behavior = not redirecting to the href
        console.log($(this).attr('href'));
        $('.where-you-tune').empty().load($(this).attr('href')).hide().fadeIn('slow');
        findCurrentTuning();
    });
});





//Perform the function of getting the audio and playing it
function playNote() {
   console.log(this);

}





// Hook Up Event Listeners

function findCurrentTuning()
{
        if($('.tunings').is(':visible')) { //if the class is visible on the page
            // selecting all elements with the class "tunings"
    const currentTuning = document.querySelectorAll(".tunings");
    // adding event listeners to the nodeList
    Array.from(currentTuning).forEach(element => element.addEventListener('click', playNote ));
    console.log(currentTuning);

} else {
    setTimeout(findCurrentTuning, 50); //wait 50 ms, then try again

}

}

