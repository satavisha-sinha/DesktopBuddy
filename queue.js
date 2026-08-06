const QUEUE_COOLDOWN = 60 * 1000; // 1 minute
// const QUEUE_COOLDOWN = 5000; // 5 seconds

let reminderQueue = [];

let buddyBusy = false;

function queueReminder(reminder){

    if (reminderQueue.includes(reminder)) {
        console.log(`${reminder.message} is already in the queue.`);
        return;
    }

    reminderQueue.push(reminder);

    reminderQueue.sort((a, b) => a.priority - b.priority);

    processQueue();

}

function getNextReminder(){

    return reminderQueue.shift();

}

function isBuddyBusy(){

    return buddyBusy;

}

function setBuddyBusy(state){

    buddyBusy = state;

}

async function processQueue(){

    if(isBuddyBusy()) return;

    if(reminderQueue.length === 0) return;

    
    setBuddyBusy(true);

    const reminder = getNextReminder();

    await playReminder(reminder);

}