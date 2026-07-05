const drinkButton=document.getElementById("drink-btn");
const snoozeButton=document.getElementById("snooze-btn");
const speechBubble=document.getElementById("speech-bubble");
const buttonContainer=document.getElementById("button-container");
const characterContainer=document.querySelector(".character-container");

setTimeout(function () {
    speechBubble.style.opacity = "1";
    buttonContainer.style.opacity = "1";
}, 2500);

drinkButton.addEventListener("click",function() {
    speechBubble.innerHTML="GREAT JOB! 🎉<br>KEEP IT UP!";
    setTimeout(function(){
        speechBubble.style.opacity = "0";
        buttonContainer.style.opacity = "0";
        characterContainer.classList.add("walk-out");
    },2000);
});
snoozeButton.addEventListener("click",function() {
    speechBubble.innerHTML="OKAY I'LL <br>BE BACK LATER";
    setTimeout(function(){
        speechBubble.style.opacity = "0";
        buttonContainer.style.opacity = "0";
        characterContainer.classList.add("walk-out");
    },2000);
});
