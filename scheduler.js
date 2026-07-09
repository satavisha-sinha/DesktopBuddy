let waterInterval = null;
let stretchInterval = null;
let studyInterval = null;
let codingInterval = null;
let encouragementInterval = null;
let sleepInterval = null;

function startScheduler(){

    setTimeout(() => {

        console.log("Water Reminder Queued 💧");

        queueReminder(REMINDERS.water);

    }, 5000);

    // Water

    // waterInterval = setInterval(() => {

    //     console.log("Water Reminder Queued 💧");
        
    //     queueReminder(REMINDERS.water);
    
    // },10000);

    // Stretch

    stretchInterval = setInterval(() => {

        console.log("Stretch Reminder Queued 🤸‍♀️");
        
        queueReminder(REMINDERS.stretch);

     },20000);

    // Study

    studyInterval = setInterval(() => {

        console.log("Study Reminder Queued 🤓");
        
        queueReminder(REMINDERS.study);

     },20000);

    // Coding

    codingInterval = setInterval(() => {

        console.log("Coding Reminder Queued 💻");
        
        queueReminder(REMINDERS.coding);

     },20000);

    // Encouragement

     encouragementInterval = setInterval(() => {

        console.log("Encouragement Reminder Queued 💕");
        
        queueReminder(REMINDERS.encouragement);

    },20000);


    // Sleep

    sleepInterval = setInterval(() => {

        console.log("Sleep Reminder Queued 😴");
        
        queueReminder(REMINDERS.sleep);
    
    },20000);

}

function stopScheduler(){

    clearInterval(waterInterval);
    clearInterval(stretchInterval);
    clearInterval(studyInterval);
    clearInterval(codingInterval);
    clearInterval(encouragementInterval);

    // clearTimeout(sleepTimeout);

}

function restartScheduler(){

    stopScheduler();

    startScheduler();


}