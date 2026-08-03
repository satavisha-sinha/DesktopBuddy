// Interval Reminders

const WATER_FIRST_DELAY = 5000;            // 5 sec
const WATER_INTERVAL = 20000;              // 20 sec

const STRETCH_FIRST_DELAY = 10000;         // 10 sec
const STRETCH_INTERVAL = 30000;            // 30 sec

const ENCOURAGEMENT_FIRST_DELAY = 15000;   // 15 sec
const ENCOURAGEMENT_INTERVAL = 45000;      // 45 sec

const WEEK_SCHEDULE = {

    // Sunday
    0: {
        study: { hour: 16, minute: 30 },
        coding: { hour: 14, minute: 0 }
    },

    // Monday
    1: {
        study: { hour: 14, minute: 0 },
        coding: { hour: 17, minute: 0 }
    },

    // Tuesday
    2: {
        study: { hour: 17, minute: 0 },
        coding: { hour: 18, minute: 15 }
    },

    // Wednesday
    3: {
        study: { hour: 17, minute: 0 },
        coding: { hour: 18, minute: 15 }
    },

    // Thursday
    4: {
        study: { hour: 18, minute: 30 },
        coding: { hour: 19, minute: 30 }
    },

    // Friday
    5: {
        study: { hour: 18, minute: 30 },
        coding: { hour: 19, minute: 30 }
    },

    // Saturday
    6: {
        study: { hour: 17, minute: 0 },
        coding: { hour: 18, minute: 15 }
    }

};

let schedulerRunning = false;

let waterInterval = null;
let stretchInterval = null;
let encouragementInterval = null;
let waterTimeout = null;
let stretchTimeout = null;
let encouragementTimeout = null;
let dailyTimers = {
    study: {},
    coding: {},
    sleep: {}
};

function scheduleDailyReminder(name, hour, minute, reminder) {

    let delay;

    if (name === "study") {
        delay = 20000; // 20 sec
    }

    if (name === "coding") {
        delay = 30000; // 30 sec
    }

    if (name === "sleep") {
        delay = 40000; // 40 sec
    }


    console.log(
        `${reminder.message} scheduled for TEST`
    );


    const timeout = setTimeout(() => {

        console.log(`${reminder.message} Queued`);

        queueReminder(reminder);


        const interval = setInterval(() => {

            console.log(`${reminder.message} Queued`);

            queueReminder(reminder);

        }, 60000); // every 1 min after first trigger


        if (dailyTimers[name]) {
            dailyTimers[name].interval = interval;
        }


    }, delay);


    dailyTimers[name].timeout = timeout;

}

function startWaterSchedule(firstDelay) {

    waterTimeout = setTimeout(() => {

        console.log("Water Reminder Queued 💧");

        queueReminder(REMINDERS.water);

        waterInterval = setInterval(() => {

            console.log("Water Reminder Queued 💧");

            queueReminder(REMINDERS.water);

        }, WATER_INTERVAL);

    }, firstDelay);

}

function startStretchSchedule(firstDelay) {

    stretchTimeout = setTimeout(() => {

        console.log("Stretch Reminder Queued 🤸");

        queueReminder(REMINDERS.stretch);

        stretchInterval = setInterval(() => {

            console.log("Stretch Reminder Queued 🤸");

            queueReminder(REMINDERS.stretch);

        }, STRETCH_INTERVAL);

    }, firstDelay);

}

function startEncouragementSchedule(firstDelay) {

    encouragementTimeout = setTimeout(() => {

        console.log("Encouragement Reminder Queued 🌸");

        queueReminder(REMINDERS.encouragement);

        encouragementInterval = setInterval(() => {

            console.log("Encouragement Reminder Queued 🌸");

            queueReminder(REMINDERS.encouragement);

        }, ENCOURAGEMENT_INTERVAL);

    }, firstDelay);

}

// Start Scheduler

function startScheduler() {

    if (schedulerRunning) return;

    schedulerRunning = true;

// Interval based reminders

    startWaterSchedule(WATER_FIRST_DELAY);

    startStretchSchedule(STRETCH_FIRST_DELAY);

    startEncouragementSchedule(ENCOURAGEMENT_FIRST_DELAY);


// Time based remiders

    const today = WEEK_SCHEDULE[new Date().getDay()];

    // Study
    scheduleDailyReminder(
        "study",
        today.study.hour,
        today.study.minute,
        REMINDERS.study
    );

    // Coding
    scheduleDailyReminder(
        "coding",
        today.coding.hour,
        today.coding.minute,
        REMINDERS.coding
    );

    // Sleep
    scheduleDailyReminder(
        "sleep",
        0,
        30,
        REMINDERS.sleep
    );
}


// Stop Scheduler

function stopScheduler() {

    clearTimeout(waterTimeout);
    clearInterval(waterInterval);

    clearTimeout(stretchTimeout);
    clearInterval(stretchInterval);

    clearTimeout(encouragementTimeout);
    clearInterval(encouragementInterval);
    

    clearTimeout(dailyTimers.study.timeout);
    clearInterval(dailyTimers.study.interval);

    clearTimeout(dailyTimers.coding.timeout);
    clearInterval(dailyTimers.coding.interval);

    clearTimeout(dailyTimers.sleep.timeout);
    clearInterval(dailyTimers.sleep.interval);

    waterInterval = null;
    stretchInterval = null;
    encouragementInterval = null;

    waterTimeout = null;
    stretchTimeout = null;
    encouragementTimeout = null;

    schedulerRunning = false;

    dailyTimers = {
        study: {},
        coding: {},
        sleep: {}
    };  

}

// Restart Scheduler

function restartScheduler() {

    stopScheduler();

    startScheduler();

}










// // Time Based Schedule
// const WEEK_SCHEDULE = {

//     0: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     1: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     2: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     3: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     4: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     5: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
//     6: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } }

// };

// let waterInterval = null;
// let stretchInterval = null;
// let encouragementInterval = null;
// let waterTimeout = null;
// let stretchTimeout = null;
// let encouragementTimeout = null;

// // ----------------------------

// function startScheduler() {

//     // Water

//     setTimeout(() => {

//         console.log("💧 Water");

//         queueReminder(REMINDERS.water);

//         waterInterval = setInterval(() => {

//             console.log("💧 Water");

//             queueReminder(REMINDERS.water);

//         }, WATER_INTERVAL);

//     }, WATER_FIRST_DELAY);

//     // Stretch

//     setTimeout(() => {

//         console.log("🤸 Stretch");

//         queueReminder(REMINDERS.stretch);

//         stretchInterval = setInterval(() => {

//             console.log("🤸 Stretch");

//             queueReminder(REMINDERS.stretch);

//         }, STRETCH_INTERVAL);

//     }, STRETCH_FIRST_DELAY);

//     // Encouragement

//     setTimeout(() => {

//         console.log("🌸 Encouragement");

//         queueReminder(REMINDERS.encouragement);

//         encouragementInterval = setInterval(() => {

//             console.log("🌸 Encouragement");

//             queueReminder(REMINDERS.encouragement);

//         }, ENCOURAGEMENT_INTERVAL);

//     }, ENCOURAGEMENT_FIRST_DELAY);

//     // Study (5 sec)

//     setTimeout(() => {

//         console.log("📚 Study");

//         queueReminder(REMINDERS.study);

//     }, 5000);

//     // Coding (10 sec)

//     setTimeout(() => {

//         console.log("💻 Coding");

//         queueReminder(REMINDERS.coding);

//     }, 10000);

//     // Sleep (15 sec)

//     setTimeout(() => {

//         console.log("😴 Sleep");

//         queueReminder(REMINDERS.sleep);

//     }, 15000);

// }

// function stopScheduler() {

//     clearInterval(waterInterval);
//     clearInterval(stretchInterval);
//     clearInterval(encouragementInterval);

// }

// function restartScheduler() {

//     stopScheduler();

//     startScheduler();

// }

// function startWaterSchedule(snoozeTime = 0) {

//     setTimeout(() => {
//         console.log("💧 Water (snooze/test)");
//         queueReminder(REMINDERS.water);
//     }, snoozeTime || WATER_FIRST_DELAY);

// }


// function startStretchSchedule(snoozeTime = 0) {

//     setTimeout(() => {
//         console.log("🤸 Stretch (snooze/test)");
//         queueReminder(REMINDERS.stretch);
//     }, snoozeTime || STRETCH_FIRST_DELAY);

// }


// function startEncouragementSchedule(snoozeTime = 0) {

//     setTimeout(() => {
//         console.log("🌸 Encouragement (snooze/test)");
//         queueReminder(REMINDERS.encouragement);
//     }, snoozeTime || ENCOURAGEMENT_FIRST_DELAY);

// }





