const burger=document.querySelector(".burger");
const navManu = document.querySelector(".nav-manu");

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    navManu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>
    n.addEventListener("click",()=>{
        burger.classList.remove("active");
        navManu.classList.remove("active");
    }))


const accordionItems = document.querySelectorAll("[data-accordion] > details");

    const siblings = (el) => {
      if (el.parentNode === null) return [];
      return Array.prototype.filter.call(el.parentNode.children, function (child) {
        return child !== el;
      });
    };
    
    accordionItems.forEach((el) => {
      el.addEventListener("click", () => {
        const others = siblings(el);
        others.forEach((sibling) => {
          sibling.removeAttribute("open");
        });
      });
    });
    
    
    // const textToRead = document.getElementById('text-to-read');
    // const speakButton = document.getElementById('speak-button');
    // const stopButton = document.getElementById('stop-button');
    // const resumeButton = document.getElementById('resume-button');
    // let utterance = null;
    
    // speakButton.addEventListener('click', () => {
    //   const text = textToRead.textContent;
    //   if (text && window.speechSynthesis) {
    //     utterance = new SpeechSynthesisUtterance(text);
    //     speechSynthesis.speak(utterance);
    //   }
    // });
    
    // stopButton.addEventListener('click', () => {
    //   if (utterance && speechSynthesis) {
    //     speechSynthesis.cancel();
    //   }
    // });
    
    // resumeButton.addEventListener('click', () => {
    //   if (utterance && speechSynthesis) {
    //     speechSynthesis.resume();
    //   }
    // });

    // 2

    const  playButtons = document.querySelectorAll('.playButton');
    const stopButtons = document.querySelectorAll('.stopButton');
    const paragraphs = document.querySelectorAll('.paragraph p');
    
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


    function showAlert() {
        alert('TECHNICAL TEAM:Bishal Kumar Ghosh,Anirban Pal,Debapriyo Paul')
    }



    let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
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



   