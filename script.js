const characterContainer = document.querySelector(".character-container");
const speechBubble = document.getElementById("speech-bubble");
const buttonContainer = document.getElementById("button-container");
const girlVideo = document.getElementById("girl-video");
const girlSprite = document.getElementById("girl-sprite");
const button1 = document.getElementById("drink-btn");
const button2 = document.getElementById("snooze-btn");

function showFrame(frameNumber){

    girlSprite.style.objectPosition =
    `-${frameNumber*256}px 0`;

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

    characterContainer.classList.remove("walk-out");
    characterContainer.classList.add("walk-in");

    girlVideo.src = "Assets/walking_in.webm";

    girlVideo.load();
    girlVideo.currentTime = 0;
    girlVideo.play();
}

function walkOut(){

    hideUI();
    hideSprite();
    showVideo();

    characterContainer.classList.remove("walk-in");
    characterContainer.classList.add("walk-out");

    girlVideo.src = "Assets/walking_out.webm";

    girlVideo.load();
    girlVideo.currentTime = 0;
    girlVideo.playbackRate = 0.7;
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

let currentReminder = REMINDERS.water;

let reminderFinished;

function loadReminder(reminder){

    girlSprite.src = reminder.sprite;

    speechBubble.innerHTML = reminder.message;

    if(reminder.showButtons){

        buttonContainer.style.display = "flex";

        button1.textContent = reminder.button1;

        button2.textContent = reminder.button2;

    }

    else{

        buttonContainer.style.display = "none";

    }

}

async function playReminder(reminder){

    console.log("1. playreminder started")

    currentReminder = reminder;

    loadReminder(currentReminder);

    console.log("2. reminder loaded")

    walkIn();

    console.log("3. walking in")

    await new Promise(resolve => setTimeout(resolve, 2500));

    console.log("4. finished waiting")

    switchToSprite();

    console.log("5. switched to sprite")

    // Hi 👋
    showFrame(0);

    await new Promise(resolve => setTimeout(resolve, 500));

    console.log("6. showing idle")

    // Idle 😊
    showFrame(currentReminder.idleFrame);

    showUI();

    if(
        currentReminder === REMINDERS.encouragement ){

        const endTime = Date.now() + (currentReminder.displayTime || 3000);

        while (Date.now() < endTime) {

            showFrame(2); // Smile
            await new Promise(resolve => setTimeout(resolve, 1000));

            showFrame(1); // Blink
            await new Promise(resolve => setTimeout(resolve, 1000));

            showFrame(2); // Smile
            await new Promise(resolve => setTimeout(resolve, 1000));

            showFrame(3); // Wave
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        hideUI();

        walkOut();

        await new Promise(resolve => setTimeout(resolve, 2500));

        setTimeout(() => {
            
            setBuddyBusy(false);

            processQueue();

        }, QUEUE_COOLDOWN);

        return;
    }

}

button1.addEventListener("click", async () => {

    speechBubble.innerHTML = "GREAT JOB! 🥳<br>KEEP IT UP!";

    await new Promise(resolve => setTimeout(resolve, 1500));

    hideUI();

    await playFrames(

        currentReminder.animationFrames,

        currentReminder.frameDuration

    );

    walkOut();

    await new Promise(resolve => setTimeout(resolve,2500))

    setBuddyBusy(false);

    processQueue();

    if(reminderFinished){

    reminderFinished();

}


});

button2.addEventListener("click",async () => {

    speechBubble.innerHTML = "OKAY I'LL BE <br>BACK LATER!";

    await new Promise(resolve => setTimeout(resolve, 1500));

    hideUI();

    walkOut();

    await new Promise(resolve => setTimeout(resolve,2500))

    setBuddyBusy(false);

    processQueue();

    if(reminderFinished){

    reminderFinished();

}

});


