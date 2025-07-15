# IS_IT_LIVE_YET

This is a simple script that checks the status of the Fantasy Premier League (FPL).  
When registration opens up, it opens EDM banger and the FPL site in your browser to get you started.

---

## BEFORE YOU READ
Download FPL Wizard from Google Play or App Store, it's the best FPL app out there. You'll thank me later!

🤖 https://play.google.com/store/apps/details?id=com.fplwizard.mobile 

🍏 https://apps.apple.com/us/app/fpl-wizard/id6472951034

## 🛠 How to Run (For people who know how node works)
Download, npm install and node start...

## 🛠 How to Run (For Total Beginners)

### 1. Install Node.js (if you don't have it)

👉 Download it from: [https://nodejs.org](https://nodejs.org)  
Choose the **LTS** version and install it like any regular app.

After installing, open your Terminal or Command Prompt and run:

```
node -v
```

You should see something like `v18.XX.X` — that means Node.js is installed.

---

### 2. Download the Project

- Click the green **"Code"** button (top-left if you're on GitHub)
- Select **Download ZIP**
- Extract it on your computer

Or if you're using Git:

```
git clone https://github.com/your-username/IS_IT_LIVE_YET.git
cd IS_IT_LIVE_YET
```

---

### 3. Install Dependencies

Inside the folder (in Terminal):

```
npm install
```

This installs the required packages (only `axios`).

---

### 4. Run the Script

```
node start.js
```

The script will now check FPL every 10 seconds. If it's not live, it'll open your browser.

---

## ❗ What You'll Need

- Internet connection
- A browser installed (Chrome, Edge, etc.)

---

## 📦 Included Files

- `start.js` – the script
- `package.json` – info about the project and its dependencies
- `.gitignore` – to exclude unnecessary files from Git
- `node_modules/` – automatically generated folder with required packages

---

## 👨‍🔧 Troubleshooting

- If you see `command not found: node` – Node.js is not installed correctly.
- If `npm install` fails – check your internet connection or permissions.

---

## 🎉 Done!

You're all set. Go play FPL — or cry about it like the rest of us.
