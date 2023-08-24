var  playButtons = document.querySelectorAll('.playButton');
    var stopButtons = document.querySelectorAll('.stopButton');
    var paragraphs = document.querySelectorAll('.paragraph p');
    
    const speechSynthesisUtterances = {};
    
    playButtons.forEach((playButton) => {
        playButton.addEventListener('click', () => {
            speechSynthesis.cancel();
            var paragraphId = playButton.getAttribute('data-paragraph');
            var paragraph = document.getElementById(paragraphId);
            
            if (paragraph && paragraph.textContent.trim() !== '') {
                speechSynthesisUtterances[paragraphId] = new SpeechSynthesisUtterance(paragraph.textContent);
                speechSynthesis.speak(speechSynthesisUtterances[paragraphId]);
            }
        });
    });
    
    stopButtons.forEach((stopButton) => {
        stopButton.addEventListener('click', () => {
            var paragraphId = stopButton.getAttribute('data-paragraph');
            
            if (speechSynthesisUtterances[paragraphId]) {
                speechSynthesisUtterances[paragraphId].onend = () => {
                    delete speechSynthesisUtterances[paragraphId];
                };
                speechSynthesisUtterances[paragraphId].onpause = () => {
                    delete speechSynthesisUtterances[paragraphId];
                };
                speechSynthesis.cancel();
            }
        });
    });




let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



