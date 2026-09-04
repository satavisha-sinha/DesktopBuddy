🧸 DesktopBuddy

«A cute, customizable desktop companion that keeps you on track with smart reminders, animations, and a little personality. ✨»

DesktopBuddy is an interactive desktop companion built with Electron, HTML, CSS, and JavaScript. It lives on your desktop and helps you remember important activities such as drinking water, studying, stretching, and getting enough sleep — while making reminders feel a little more fun. 💗

---

✨ Features

🧸 Animated Desktop Companion

- Pixel-art chibi character
- Idle and interactive animations
- Walking animations
- Reminder-specific animations
- Smooth transitions between character states
- Custom sprite sheets and animated videos

🔔 Smart Reminders

DesktopBuddy currently supports different types of reminders:

Reminder| Purpose| Default Interval
💧 Water| Reminds you to drink water| Every 20 minutes
📚 Study| Encourages study sessions| Configurable
🧘 Stretch| Reminds you to stretch/walk| Every 2 hours
😴 Sleep| Reminds you to prepare for sleep| 12:30 AM
💕 Motivation| Encouragement and compliments| Configurable

«Reminder intervals can be modified through the project configuration.»

⏰ Reminder Priority System

DesktopBuddy includes a priority-based reminder system to prevent multiple reminders from interrupting each other.

For example:

Water / Study Reminder
⬇️
Higher priority
⬇️
Other reminders wait

The system can also:

- Delay overlapping reminders
- Snooze reminders
- Cancel lower-priority reminders when necessary
- Prevent reminders from appearing all at once

😴 Sleep Mode

The sleep reminder has special priority.

When the sleep reminder is triggered:

- Other reminders are stopped or delayed
- The sleep reminder takes priority
- No regular reminders are shown after the configured sleep time

💤 Snooze

Reminders can be snoozed instead of dismissed.

Default snooze durations include:

- 💧 Water → 5 minutes
- 😴 Sleep → 10 minutes
- 🧘 Stretch → 30 minutes

---

🎨 Animations

DesktopBuddy uses a combination of sprite-sheet animations and WebM animations.

Some character animations include:

- 🚶 Walking
- 💤 Idle
- 💧 Drinking water
- 👋 Waving
- 😴 Yawning
- 💻 Holding a laptop
- ⌨️ Typing
- 🧘 Stretching
- 💕 Motivational/compliment animations

The character can transition between animations depending on the reminder or action being performed.

---

🖥️ Desktop Experience

DesktopBuddy runs as an Electron desktop application and is designed to stay out of the way while you work.

System Tray

The application can run from the system tray with options such as:

- Open Buddy
- Hide Buddy
- Exit

This allows DesktopBuddy to continue running without keeping a large application window open.

---

🛠️ Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript

Desktop Framework

- Electron

Animation

- CSS animations
- Sprite sheets
- WebM video animations

Development Tools

- Visual Studio Code
- Node.js
- npm
- Git
- GitHub

---

📁 Project Structure

~DesktopBuddy
    ~assets
        ~sprites
        ~animations
        ~videos
    ~config.js
    ~animation.js
    ~scheduler.js
    ~scheduler_test.js
    ~script.js
    ~style.css
    ~index.html
    ~main.js
    ~package.json
    ~package-lock.json
    ~.gitignore
    ~README.md

«The exact structure may change as the project develops.»

---

🚀 Getting Started

1. Clone the repository

git clone https://github.com/your-username/DesktopBuddy.git

2. Navigate to the project

cd DesktopBuddy

3. Install dependencies

npm install

4. Start DesktopBuddy

npm start

---

🧪 Testing

DesktopBuddy includes a scheduler testing setup that allows reminders to be tested using shorter intervals instead of waiting for the actual reminder times.

For example:

Water reminder      → 5 seconds
Stretch reminder    → 10 seconds
Encouragement       → 15 seconds

This makes it easier to test:

- Reminder scheduling
- Reminder priority
- Snoozing
- Overlapping reminders
- Animation transitions
- Reminder cancellation

---

⚙️ Customization

One of the main goals of DesktopBuddy is customization. 🎀

You can customize things such as:

- Character appearance
- Sprite sheets
- Animations
- Reminder intervals
- Snooze durations
- Reminder priority
- Character size
- Window size
- Positioning
- Personality/behavior

The project is designed so that new reminders and animations can be added without rebuilding the entire application from scratch.

---

🧠 How It Works

At a high level:

                 ┌─────────────────┐
                 │  DesktopBuddy   │
                 └────────┬────────┘
                          │
                 ┌────────▼────────┐
                 │    Scheduler    │
                 └────────┬────────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          Water        Study        Stretch
             │            │            │
             └────────────┼────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Priority System │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Animation System│
                 └────────┬────────┘
                          │
                          ▼
                 🧸 Desktop Buddy

The scheduler determines when a reminder should appear.

The priority system decides which reminder should be shown when multiple reminders overlap.

The animation system then displays the appropriate character animation.

---

🎯 Project Goals

DesktopBuddy isn't meant to be just another notification application.

The goal is to make reminders feel:

«Personal. Interactive. Cute. And actually enjoyable. 💗»

Future goals include:

- 🎀 Multiple character personalities
- 🎨 More customizable themes
- 🧸 More character animations
- 📊 Activity/progress tracking
- ⚙️ A complete settings panel
- 🔔 More intelligent reminder scheduling
- 🎮 More user interactions
- 🌙 Better sleep/night mode
- 💾 Persistent user preferences
- ✨ More expressive character behavior

---

🐛 Known Challenges

DesktopBuddy is an actively developing project.

Some areas being improved include:

- Smooth transitions between sprite and video animations
- Preventing visual flickering during animation changes
- Handling multiple queued reminders
- Improving reminder prioritization
- Optimizing large animation assets
- Managing application window behavior while another application is focused

---

🌱 Development Status

Status: 🚧 In Development

DesktopBuddy is continuously being improved with new animations, reminder logic, customization options, and desktop interactions.

---

💗 Why DesktopBuddy?

Most productivity applications remind you with:

«🔔 "Drink water."»

DesktopBuddy says:

«🧸 "HEY!! You haven't had water in forever! Go drink some! 💧"»

Because productivity doesn't have to be boring. ✨

---

👩‍💻 Author

Created with 💗, JavaScript, Electron, and way too much attention to tiny details.

DesktopBuddy — your tiny desktop companion for everyday life. 🧸✨

---

⭐ Support

If you like the project, consider giving it a ⭐ on GitHub!

Every star helps motivate further development. 💕
