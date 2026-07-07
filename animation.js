const characterContainer = document.querySelector(".character-container");

const girlVideo = document.getElementById("girl-video");

const girlSprite = document.getElementById("girl-sprite");

const speechBubble = document.getElementById("speech-bubble");

const buttonContainer = document.getElementById("button-container");


function showFrame(frameNumber){

    girlSprite.style.objectPosition =
    `-${frame*256}px 0`;

}

function hideSprite(){

    girlSprite.classList.add("hidden");

}

function showSprite(){

    girlSprite.classList.remove("hidden");

}

function hideVideo(){

    girlVideo.classList.add("hidden");

}

function showVideo(){

    girlVideo.classList.remove("hidden");

}

function showUI(){

    speechBubble.style.opacity = "1";
    buttonContainer.style.opacity = "1";

}

function hideUI(){

    speechBubble.style.opacity = "0";
    buttonContainer.style.opacity = "0";

}

function walkIn(){

    hideUI();
    showVideo();
    hideSprite();

    girlVideo.classList.remove("flip");

    characterContainer.classList.remove("walk-out");
    characterContainer.classList.add("walk-in");

    girlVideo.currentTime = 0;
    girlVideo.play();

}

function walkOut(){

    hideUI();
    hideSprite();
    showVideo();

    girlVideo.classList.add("flip");

    characterContainer.classList.remove("walk-in");
    characterContainer.classList.add("walk-out");

    girlVideo.currentTime=0;
    girlVideo.play();

}

function switchToSprite(){

    girlVideo.pause();
    hideVideo();
    showSprite();

}

function switchToVideo(){

    hideSprite();
    showVideo();
    girlVideo.currentTime = 0;

}

async function playFrames(sequence,speed){

    for(const frame of sequence){

        showFrame(frame);

        await new Promise(resolve=>setTimeout(resolve,speed));

    }

}