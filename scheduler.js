let waterInterval = null;
let stretchInterval = null;
let studyInterval = null;
let codingInterval = null;
let motivationInterval = null;
let complimentInterval = null;
let sleepInterval = null;

function startScheduler(){

    // Water

    // waterInterval = setInterval(() => {

    //     console.log("Water Reminder Queued 💧");
        
    //     queueReminder(REMINDERS.water);
    
    // },10000);

    // Stretch

    // Study

    // Coding

    // Motivation

    // Compliment

    // Sleep

    sleepInterval = setInterval(() => {

        console.log("Sleep Reminder Queued 😴");
        
        queueReminder(REMINDERS.sleep);
    
    },10000);

}

function stopScheduler(){

    clearInterval(waterInterval);
    clearInterval(stretchInterval);
    clearInterval(studyInterval);
    clearInterval(codingInterval);
    clearInterval(motivationInterval);
    clearInterval(complimentInterval);

    // clearTimeout(sleepTimeout);

}

function restartScheduler(){

    stopScheduler();

    startScheduler();


}