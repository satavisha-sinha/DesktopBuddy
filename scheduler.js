
// // Scheduler Intervals


// const WATER_FIRST_DELAY = 20 * 60 * 1000;          // 20 min
// const WATER_FIRST_DELAY = 20 * 60 * 1000;          // 20 min

// const STRETCH_FIRST_DELAY = 2 * 60 * 60 * 1000;    // 2 hrs
// const STRETCH_INTERVAL = 2 * 60 * 60 * 1000;       // 2 hrs

// const ENCOURAGEMENT_FIRST_DELAY = 1 * 60 * 60 * 1000;     // 1 hr
// const ENCOURAGEMENT_INTERVAL = 1 * 60 * 60 * 1000;        // 1 hr


// const STUDY_INTERVAL = 60 * 60 * 1000;             // 1 hr
// const CODING_INTERVAL = 60 * 60 * 1000;            // 1 hr

// // 

// let waterInterval = null;
// let stretchInterval = null;
// let studyInterval = null;
// let codingInterval = null;
// let encouragementInterval = null;

// let sleepTimeout = null;
// let sleepInterval = null;

// // Start Scheduler

// function startScheduler() {

//     // Water Reminder

//     setTimeout(() => {

//         console.log("Water Reminder Queued 💧");

//         queueReminder(REMINDERS.water);

//         waterInterval = setInterval(() => {

//             console.log("Water Reminder Queued 💧");

//             queueReminder(REMINDERS.water);

//         }, WATER_INTERVAL);

//     }, WATER_INTERVAL);

//     // Stretch Reminder

//     setTimeout(() => {

//         console.log("Stretch Reminder Queued 🤸");

//         queueReminder(REMINDERS.stretch);

//         stretchInterval = setInterval(() => {

//             console.log("Stretch Reminder Queued 🤸");

//             queueReminder(REMINDERS.stretch);

//         }, STRETCH_INTERVAL);

//     }, STRETCH_INTERVAL);

//     // Encouragement Reminder
    
//     setTimeout(() => {

//         console.log("Encouragement Reminder Queued 🌸");

//         queueReminder(REMINDERS.encouragement);

//         encouragementInterval = setInterval(() => {

//             console.log("Encouragement Reminder Queued 🌸");

//             queueReminder(REMINDERS.encouragement);

//         }, ENCOURAGEMENT_INTERVAL);

//     }, ENCOURAGEMENT_INTERVAL);

//     // Sleep Reminder
    
//     scheduleSleepReminder();

// }

// // Study Mode

// function startStudyReminder() {

//     if (studyInterval) return;

//     studyInterval = setInterval(() => {

//         console.log("Study Reminder Queued 📚");

//         queueReminder(REMINDERS.study);

//     }, STUDY_INTERVAL);

// }

// function stopStudyReminder() {

//     clearInterval(studyInterval);

//     studyInterval = null;

// }

// // Coding Mode

// function startCodingReminder() {

//     if (codingInterval) return;

//     codingInterval = setInterval(() => {

//         console.log("Coding Reminder Queued 💻");

//         queueReminder(REMINDERS.coding);

//     }, CODING_INTERVAL);

// }

// function stopCodingReminder() {

//     clearInterval(codingInterval);

//     codingInterval = null;

// }

// // Sleep Scheduler

// function scheduleSleepReminder() {

//     const now = new Date();

//     const nextSleep = new Date();

//     nextSleep.setHours(0, 30, 0, 0); // 12:30 AM

//     if (nextSleep <= now) {

//         nextSleep.setDate(nextSleep.getDate() + 1);

//     }

//     const delay = nextSleep - now;

//     console.log(
//         "Next Sleep Reminder:",
//         nextSleep.toLocaleString()
//     );

//     sleepTimeout = setTimeout(() => {

//         console.log("Sleep Reminder Queued 😴");

//         queueReminder(REMINDERS.sleep);

//         sleepInterval = setInterval(() => {

//             console.log("Sleep Reminder Queued 😴");

//             queueReminder(REMINDERS.sleep);

//         }, 24 * 60 * 60 * 1000);

//     }, delay);

// }

// // Stop Scheduler

// function stopScheduler() {

//     clearInterval(waterInterval);
//     clearInterval(stretchInterval);
//     clearInterval(encouragementInterval);

//     clearInterval(studyInterval);
//     clearInterval(codingInterval);

//     clearInterval(sleepInterval);
//     clearTimeout(sleepTimeout);

// }

// // Restart Scheduler

// function restartScheduler() {

//     stopScheduler();

//     startScheduler();

// }