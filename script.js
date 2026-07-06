const drinkButton = document.getElementById("drink-btn");
const snoozeButton = document.getElementById("snooze-btn");
const speechBubble = document.getElementById("speech-bubble");
const buttonContainer = document.getElementById("button-container");
const characterContainer = document.querySelector(".character-container");
const girl = document.getElementById("girl");

function showFrame(f) {
    girl.style.objectPosition = `-${f * 256}px 0`;
}

// -------------------- WALK IN --------------------

function walkIn() {

    speechBubble.style.opacity = "0";
    buttonContainer.style.opacity = "0";

    characterContainer.classList.remove("walk-out");
    characterContainer.classList.add("walk-in");

    const frames = [0, 1];
    let i = 0;

    const walk = setInterval(() => {
        showFrame(frames[i % 2]);
        i++;
    }, 180);

    setTimeout(() => {
        clearInterval(walk);
        idle();
    }, 2500);
}

// -------------------- IDLE --------------------

function idle() {

    showFrame(2);

    speechBubble.style.opacity = "1";
    buttonContainer.style.opacity = "1";
}

// -------------------- DRINK --------------------

function drinkAnimation() {

    const sequence = [3, 4, 3, 4, 5, 6];
    let i = 0;

    const drink = setInterval(() => {

        showFrame(sequence[i]);

        i++;

        if (i >= sequence.length) {

            clearInterval(drink);

            walkOut();

        }

    }, 350);

}

// -------------------- WALK OUT --------------------

function walkOut() {

    speechBubble.style.opacity = "0";
    buttonContainer.style.opacity = "0";

    characterContainer.classList.remove("walk-in");
    characterContainer.classList.add("walk-out");

    let frames = [7, 0];
    let i = 0;

    const walk = setInterval(() => {

        showFrame(frames[i % 2]);

        i++;

    }, 180);

    setTimeout(() => {

        clearInterval(walk);

        showFrame(7);

    }, 2500);

}

// -------------------- BUTTONS --------------------

drinkButton.addEventListener("click", () => {

    speechBubble.innerHTML = "GREAT JOB! 🥳<br>KEEP IT UP!";

    setTimeout(() => {

        drinkAnimation();

    }, 500);

});

snoozeButton.addEventListener("click", () => {

    speechBubble.innerHTML = "OKAY! I'LL BE BACK LATER 😊";

    showFrame(6);

    setTimeout(() => {

        walkOut();

    }, 1200);

});

// -------------------- START --------------------

walkIn();


// const drinkButton=document.getElementById("drink-btn");
// const snoozeButton=document.getElementById("snooze-btn");
// const speechBubble=document.getElementById("speech-bubble");
// const buttonContainer=document.getElementById("button-container");
// const characterContainer=document.querySelector(".character-container");

// setTimeout(function () {
//     speechBubble.style.opacity = "1";
//     buttonContainer.style.opacity = "1";
// }, 2500);

// drinkButton.addEventListener("click",function(){
//     speechBubble.innerHTML="Great Job! 🥳<br>Keep it up!";
//     setTimeout(()=>{
//         speechBubble.style.opacity="0";
//         buttonContainer.style.opacity="0";
//         drinkAnimation();
//     },500);

// });
// // drinkButton.addEventListener("click",function() {
// //     speechBubble.innerHTML="GREAT JOB! 🎉<br>KEEP IT UP!";
// //     setTimeout(function(){
// //         speechBubble.style.opacity = "0";
// //         buttonContainer.style.opacity = "0";
// //         characterContainer.classList.add("walk-out");
// //     },2000);
// // });

// snoozeButton.addEventListener("click", function () {

//     speechBubble.innerHTML = "OKAY, I'LL BE BACK LATER 😊";

//     speechBubble.style.opacity = "0";
//     buttonContainer.style.opacity = "0";

//     // Show smile frame
//     showFrame(6);

//     setTimeout(() => {
//         walkOut();
//     }, 1200);

// });
// // snoozeButton.addEventListener("click",function() {
// //     speechBubble.innerHTML="OKAY I'LL <br>BE BACK LATER";
// //     setTimeout(function(){
// //         speechBubble.style.opacity = "0";
// //         buttonContainer.style.opacity = "0";
// //         characterContainer.classList.add("walk-out");
// //     },2000);
// // });

// const girl = document.getElementById("girl");

// let frame = 0;

// function showFrame(f){
//     girl.style.objectPosition = `-${f*64}px 0`;
// }

// function walkIn(){
//     let frames=[0,1];
//     let i=0;
//     let walk=setInterval(()=>{

//         showFrame(frames[i%2]);

//         i++;

//     },180);
//     characterContainer.classList.remove("walk-out");
//     characterContainer.classList.add("walk-in");

//     setTimeout(()=>{
//         clearInterval(walk);
//         showFrame(2);
//         idle();
//     },2500);
// }

// function idle(){
//     showFrame(2);
//     speechBubble.style.opacity="1";
//     buttonContainer.style.opacity="1";
// }

// function drinkAnimation(){
// const sequence=[3,4,3,4,5,6];
// let i=0;
// let drink=setInterval(()=>{
// showFrame(sequence[i]);
// i++;
// if(i==sequence.length){
// clearInterval(drink);
// walkOut();
// }
// },350);

// }