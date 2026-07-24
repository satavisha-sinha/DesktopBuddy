// Interval Reminders

const WATER_FIRST_DELAY = 5000;            // 5 sec
const WATER_INTERVAL = 20000;              // 20 sec

const STRETCH_FIRST_DELAY = 10000;         // 10 sec
const STRETCH_INTERVAL = 30000;            // 30 sec

const ENCOURAGEMENT_FIRST_DELAY = 15000;   // 15 sec
const ENCOURAGEMENT_INTERVAL = 45000;      // 45 sec

// Time Based Schedule
const WEEK_SCHEDULE = {

    0: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    1: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    2: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    3: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    4: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    5: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } },
    6: { study: { hour: 0, minute: 0 }, coding: { hour: 0, minute: 0 } }

};

let waterInterval = null;
let stretchInterval = null;
let encouragementInterval = null;
let waterTimeout = null;
let stretchTimeout = null;
let encouragementTimeout = null;

// ----------------------------

function startScheduler() {

    // Water

    setTimeout(() => {

        console.log("💧 Water");

        queueReminder(REMINDERS.water);

        waterInterval = setInterval(() => {

            console.log("💧 Water");

            queueReminder(REMINDERS.water);

        }, WATER_INTERVAL);

    }, WATER_FIRST_DELAY);

    // Stretch

    setTimeout(() => {

        console.log("🤸 Stretch");

        queueReminder(REMINDERS.stretch);

        stretchInterval = setInterval(() => {

            console.log("🤸 Stretch");

            queueReminder(REMINDERS.stretch);

        }, STRETCH_INTERVAL);

    }, STRETCH_FIRST_DELAY);

    // Encouragement

    setTimeout(() => {

        console.log("🌸 Encouragement");

        queueReminder(REMINDERS.encouragement);

        encouragementInterval = setInterval(() => {

            console.log("🌸 Encouragement");

            queueReminder(REMINDERS.encouragement);

        }, ENCOURAGEMENT_INTERVAL);

    }, ENCOURAGEMENT_FIRST_DELAY);

    // Study (5 sec)

    setTimeout(() => {

        console.log("📚 Study");

        queueReminder(REMINDERS.study);

    }, 5000);

    // Coding (10 sec)

    setTimeout(() => {

        console.log("💻 Coding");

        queueReminder(REMINDERS.coding);

    }, 10000);

    // Sleep (15 sec)

    setTimeout(() => {

        console.log("😴 Sleep");

        queueReminder(REMINDERS.sleep);

    }, 15000);

}

function stopScheduler() {

    clearInterval(waterInterval);
    clearInterval(stretchInterval);
    clearInterval(encouragementInterval);

}

function restartScheduler() {

    stopScheduler();

    startScheduler();

}





