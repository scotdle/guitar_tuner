// Tuner Function
// Scott Caudle
// 10/21/17

//Declare Variables

const whereYouTune = document.querySelector('.where-you-tune');
const stopButtonArea = document.querySelector('.stop_button_area');
const audio = document.createElement('audio');
const stopButton = document.createElement("icon");





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
    const getNote = this.querySelector('h1').id;
    const stringConversion = JSON.stringify(getNote).replace(/^"(.*)"$/, '$1');

    audio.src = ('sound_files/' + stringConversion + '.mp3');
whereYouTune.appendChild(audio);

    audio.play();
    audio.loop = true;




}


function stopNote() {

  audio.pause();

}







// Hook Up Event Listeners

function findCurrentTuning()
{
        if($('.tunings').is(':visible')) { //if the class is visible on the page
            // selecting all elements with the class "tunings"
    const currentTuning = document.querySelectorAll(".tunings");
    // adding event listeners to the nodeList
    Array.from(currentTuning).forEach(element => element.addEventListener('click', playNote ));

            //adding in the stop button

            stopButton.className = "fa fa-stop-circle fa-2x";
            stopButton.id = "stop_button";
            stopButtonArea.appendChild(stopButton);
            stopButtonArea.style.visibility = "visible";
            stopButtonArea.addEventListener('click', stopNote);
            stopButtonArea.style.webkitTransitionDurationDuration = "0.3s";
            stopButtonArea.style.transitionDuration= "0.3s";


} else {
    setTimeout(findCurrentTuning, 50); //wait 50 ms, then try again
            stopButtonArea.style.visibility = "hidden";
            stopButtonArea.style.webkitTransitionDurationDuration = "0.0s";
            stopButtonArea.style.transitionDuration= "0.0s";

}

}


