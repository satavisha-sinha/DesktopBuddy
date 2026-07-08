let waterInterval = null;
let stretchInterval = null;
let studyInterval = null;
let codingInterval = null;
let complimentInterval = null;
let sleepInterval = null;

function startScheduler(){

    // Water

    // waterInterval = setInterval(() => {

    //     console.log("Water Reminder Queued 💧");
        
    //     queueReminder(REMINDERS.water);
    
    // },10000);

    // Stretch

    // stretchInterval = setInterval(() => {

    //     console.log("Stretch Reminder Queued 🤸‍♀️");
        
    //     queueReminder(REMINDERS.stretch);

    // Study

    // studyInterval = setInterval(() => {

    //     console.log("Study Reminder Queued 🤓");
        
    //     queueReminder(REMINDERS.study);

    // Coding

    // codingInterval = setInterval(() => {

    //     console.log("Coding Reminder Queued 💻");
        
    //     queueReminder(REMINDERS.coding);

    // Compliment

     complimentInterval = setInterval(() => {

        console.log("Compliment Reminder Queued 💕");
        
        queueReminder(REMINDERS.compliment);

    },20000);


    // Sleep

    // sleepInterval = setInterval(() => {

    //     console.log("Sleep Reminder Queued 😴");
        
    //     queueReminder(REMINDERS.sleep);
    
    // },20000);

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