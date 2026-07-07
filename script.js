const speechBubble = document.getElementById("speech-bubble");
const buttonContainer = document.getElementById("button-container");

const button1 = document.getElementById("drink-btn");
const button2 = document.getElementById("snooze-btn");

const girlSprite = document.getElementById("girl-sprite");

let currentReminder = REMINDERS.water;

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

async function showReminder(){

    walkIn();

    await new Promise(resolve=>setTimeout(resolve,2500));

    switchToSprite();

    showFrame(0);

    showUI();

}

button1.addEventListener("click",async()=>{

    hideUI();

    await playFrames(currentReminder.animation,350);

    walkOut();

});

button2.addEventListener("click",()=>{

    hideUI();

    walkOut();

});

loadReminder(currentReminder);

showReminder();


// const drinkButton = document.getElementById("drink-btn");
// const snoozeButton = document.getElementById("snooze-btn");
// const speechBubble = document.getElementById("speech-bubble");
// const buttonContainer = document.getElementById("button-container");
// const characterContainer = document.querySelector(".character-container");
// const girl = document.getElementById("girl");

// function showFrame(f) {
//     girl.style.objectPosition = `-${f * 256}px 0`;
// }

// // -------------------- WALK IN --------------------

// function walkIn() {

//     speechBubble.style.opacity = "0";
//     buttonContainer.style.opacity = "0";

//     characterContainer.classList.remove("walk-out");
//     characterContainer.classList.add("walk-in");

//     const frames = [0, 1];
//     let i = 0;

//     const walk = setInterval(() => {
//         showFrame(frames[i % 2]);
//         i++;
//     }, 180);

//     setTimeout(() => {
//         clearInterval(walk);
//         idle();
//     }, 2500);
// }

// // -------------------- IDLE --------------------

// function idle() {

//     showFrame(2);

//     speechBubble.style.opacity = "1";
//     buttonContainer.style.opacity = "1";
// }

// // -------------------- DRINK --------------------

// function drinkAnimation() {

//     const sequence = [3, 4, 3, 4, 5, 6];
//     let i = 0;

//     const drink = setInterval(() => {

//         showFrame(sequence[i]);

//         i++;

//         if (i >= sequence.length) {

//             clearInterval(drink);

//             walkOut();

//         }

//     }, 350);

// }

// // -------------------- WALK OUT --------------------

// function walkOut() {

//     speechBubble.style.opacity = "0";
//     buttonContainer.style.opacity = "0";

//     characterContainer.classList.remove("walk-in");
//     characterContainer.classList.add("walk-out");

//     let frames = [7, 0];
//     let i = 0;

//     const walk = setInterval(() => {

//         showFrame(frames[i % 2]);

//         i++;

//     }, 180);

//     setTimeout(() => {

//         clearInterval(walk);

//         showFrame(7);

//     }, 2500);

// }

// // -------------------- BUTTONS --------------------

// drinkButton.addEventListener("click", () => {

//     speechBubble.innerHTML = "GREAT JOB! 🥳<br>KEEP IT UP!";

//     setTimeout(() => {

//         drinkAnimation();

//     }, 500);

// });

// snoozeButton.addEventListener("click", () => {

//     speechBubble.innerHTML = "OKAY! I'LL BE BACK LATER 😊";

//     showFrame(6);

//     setTimeout(() => {

//         walkOut();

//     }, 1200);

// });

// // -------------------- START --------------------

// walkIn();


