const REMINDERS = {

    water: {
        priority:2,
        sprite: "Assets/Water reminder.png",
        message: "TIME TO DRINK WATER! 💧<br>STAY HYDRATED!",
        button1: "🥤 DRANK",
        button2: "⏰ SNOOZE",
        idleFrame: 1,
        animationFrames: [2,3,2,3,4,5,5],
        frameDuration:350,
        showButtons: true
    },

    sleep: {
        priority:1,
        sprite: "Assets/Sleep reminder.png",
        message: "IT'S GETTING LATE 🌙<br>TIME TO SLEEP!",
        button1: "😴 I'M OFF",
        button2: "⏰ SNOOZE",
        idleFrame: 1,
        animationFrames: [2,2,2,3,3],
        frameDuration:350,
        showButtons: true
    },

    study: {
        priority:5,
        sprite: "Assets/Study reminder.png",
        message: "LET'S STUDY FOR A WHILE 📚",
        button1: "📚 DOING",
        button2: "⏰ SNOOZE",
        idleFrame: 1,
        animationFrames: [2,2,3,2,3,3,4,4],
        frameDuration:350,
        showButtons: true
    },

    coding: {
        priority:4,
        sprite: "Assets/Coding reminder.png",
        message: "TIME TO BUILD SOMETHING AWESOME 💻",
        button1: "💻 CATCHING",
        button2: "⏰ SNOOZE",
        idleFrame: 1,
        animationFrames: [2,3,3,2,3,4,4],
        frameDuration:350,
        showButtons: true
    },

    stretch: {
        priority:3,
        sprite: "Assets/Stretch reminder2.png",
        message: "TIME TO RELAX! 🤸<br>STRETCH YOUR BODY!",
        button1: "😊 ALL SET",
        button2: "⏰ SNOOZE",
        idleFrame: 1,
        animationFrames: [2,3,4,3,5,6,6],
        frameDuration:350,
        showButtons: true
    },

    encouragement: {
        priority:6,
        sprite: "Assets/Compliments.png",
        message: "I'M PROUD OF YOU! 💖",
        idleFrame: 2,
        animationFrames: [1,1,2,2,3,3],
        frameDuration:350,
        displayTime: 4000,
        showButtons: false
    }

};