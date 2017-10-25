// Tuner Function
// Scott Caudle
// 10/21/17

//Declare Variables

const whereYouTune = document.querySelector('.where-you-tune');




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


    const audio = document.createElement('audio');
    audio.src = ('sound_files/' + stringConversion + '.mp3');
whereYouTune.appendChild(audio);

    audio.play();
    audio.loop = true;


    document.addEventListener('play', function (e) {

    const whatsPlaying = document.getElementsByTagName('audio');

   for( i = 0; i < whatsPlaying.length; i++) {

      if (whatsPlaying[i] != e.target) {

whatsPlaying[i].pause();
      }

   }

}, true);


/*
   audio.loop = true;
    if (audio.paused) {
        audio.loop = true;
        audio.play();



    }else{
        audio.pause();
        audio.currentTime = 0

    }

*/


}

function oneAudioPlaying () {

 conso

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


