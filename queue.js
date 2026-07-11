let reminderQueue = [];

let buddyBusy = false;

function queueReminder(reminder){

    reminderQueue.push(reminder);

    // Sort by priority
    reminderQueue.sort((a,b)=>a.priority-b.priority);

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

    // VERY IMPORTANT
    setBuddyBusy(true);

    const reminder = getNextReminder();

    await playReminder(reminder);

}