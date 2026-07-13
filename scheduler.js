
// Scheduler Intervals


const WATER_FIRST_DELAY = 20 * 60 * 1000;          // 20 min
const WATER_INTERVAL = 20 * 60 * 1000;          // 20 min

const STRETCH_FIRST_DELAY = 2 * 60 * 60 * 1000;    // 2 hrs
const STRETCH_INTERVAL = 2 * 60 * 60 * 1000;       // 2 hrs

const ENCOURAGEMENT_FIRST_DELAY = 1 * 60 * 60 * 1000;     // 1 hr
const ENCOURAGEMENT_INTERVAL = 1 * 60 * 60 * 1000;        // 1 hr


const STUDY_INTERVAL = 60 * 60 * 1000;             // 1 hr
const CODING_INTERVAL = 60 * 60 * 1000;            // 1 hr

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

let waterInterval = null;
let stretchInterval = null;
let encouragementInterval = null;
let dailyTimers = {
    study: {},
    coding: {},
    sleep: {}
};


function scheduleDailyReminder(name, hour, minute, reminder) {

    const now = new Date();

    const nextReminder = new Date();

    nextReminder.setHours(hour, minute, 0, 0);

    if (nextReminder <= now) {

        nextReminder.setDate(nextReminder.getDate() + 1);

    }

    const delay = nextReminder - now;

    console.log(
        `${reminder.message} scheduled for`,
        nextReminder.toLocaleString()
    );

    const timeout = setTimeout(() => {

        console.log(`${reminder.message} Queued`);

        queueReminder(reminder);

        const interval = setInterval(() => {

            console.log(`${reminder.message} Queued`);

            queueReminder(reminder);

        }, 24 * 60 * 60 * 1000);

        dailyTimers[name].interval = interval;

    }, delay);

    dailyTimers[name].timeout = timeout;

}

// Start Scheduler

function startScheduler() {

// Interval based reminders

    // Water Reminder

    setTimeout(() => {

        console.log("Water Reminder Queued 💧");

        queueReminder(REMINDERS.water);

        waterInterval = setInterval(() => {

            console.log("Water Reminder Queued 💧");

            queueReminder(REMINDERS.water);

        }, WATER_INTERVAL);

    }, WATER_INTERVAL);

    // Stretch Reminder

    setTimeout(() => {

        console.log("Stretch Reminder Queued 🤸");

        queueReminder(REMINDERS.stretch);

        stretchInterval = setInterval(() => {

            console.log("Stretch Reminder Queued 🤸");

            queueReminder(REMINDERS.stretch);

        }, STRETCH_INTERVAL);

    }, STRETCH_INTERVAL);

    // Encouragement Reminder
    
    setTimeout(() => {

        console.log("Encouragement Reminder Queued 🌸");

        queueReminder(REMINDERS.encouragement);

        encouragementInterval = setInterval(() => {

            console.log("Encouragement Reminder Queued 🌸");

            queueReminder(REMINDERS.encouragement);

        }, ENCOURAGEMENT_INTERVAL);

    }, ENCOURAGEMENT_INTERVAL);

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

    clearInterval(waterInterval);
    clearInterval(stretchInterval);
    clearInterval(encouragementInterval);
    
    clearTimeout(dailyTimers.study.timeout);
    clearInterval(dailyTimers.study.interval);

    clearTimeout(dailyTimers.coding.timeout);
    clearInterval(dailyTimers.coding.interval);

    clearTimeout(dailyTimers.sleep.timeout);
    clearInterval(dailyTimers.sleep.interval);

}

// Restart Scheduler

function restartScheduler() {

    stopScheduler();

    startScheduler();

}