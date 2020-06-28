window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll("audio");
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#22E1FF",
        "#225dff",
        "#22ff47",
        "#e06a08",
        "#ff22c8",
        "#c4ff22",
    ];
    
// console.log(sounds)
    pads.forEach( (pad, index) => {
      pad.addEventListener('click', () => {
        sounds[index].currentTime = 0
        sounds[index].play();
        
        createBubbles(index);
      });
    });

    //create a function that makes a bubbles\
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function (){
            visual.removeChild(this);
        })
    }
});