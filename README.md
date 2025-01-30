# **Discord Bot with OpenAI Integration**

This project is a **Discord bot** that responds to `/ask` commands by using OpenAI (ChatGPT) to generate answers. The bot is built with `discord.js` and `openai` and follows best practices for environment variable management.

---

## **1. Prerequisites**

Before starting, make sure you have:

- **Node.js & npm** installed (latest LTS version recommended)
- **A Discord Developer Account**
- **An OpenAI API key**

---

## **2. Install Node.js & npm**

Ensure you have the latest **Node.js** installed:

```bash
# Install NVM (Node Version Manager)
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Reload shell to use nvm (if necessary)
source ~/.zshrc  # or `source ~/.bashrc`

# Install and use the latest LTS version of Node.js
nvm install --lts
nvm use --lts

# Verify installation
node -v   # Should output the Node.js version
npm -v    # Should output the npm version
```

---

## **3. Create the Project**

### **Step 1: Create a Project Directory**

```bash
mkdir discord_bot
cd discord_bot
```

### **Step 2: Initialize a Node.js Project**

```bash
npm init -y
```

This creates a `package.json` file.

---

## **4. Install Dependencies**

### **Step 3: Install Required Packages**

```bash
npm install discord.js dotenv openai
```

### **(Optional) Step 4: Install ESLint for Linting**

```bash
npm install --save-dev eslint @eslint/js

# Create ESLint config file
touch eslint.config.js
```

---

## **5. Set Up Environment Variables**

### **Step 5: Create a `.env` File**

```bash
touch .env
```

Add the following content, replacing placeholders with your actual API keys:

```
DISCORD_TOKEN=your-discord-bot-token
OPEN_AI_KEY=your-openai-api-key
```

Ensure this file is **ignored by Git**:

```bash
echo .env >> .gitignore
```

---

## **6. Start the Bot**

Run the bot using:

```bash
node index.js
```

You should see:

```
Started refreshing application (/) commands.
Successfully reloaded application (/) commands.
Logged in as botgpt#5318!
```

---

## **7. Test the Bot in Discord**

### **Try These Commands:**
- **Ping test:**
  ```
  /ping
  ```
  *Expected Response:* `Pong!`

- **ChatGPT Integration:**
  ```
  /ask What is the meaning of life?
  ```
  *Expected Response:* A response from ChatGPT.

---

## **8. Troubleshooting**

If you encounter issues, try:

- **Check your Node.js version:**
  ```bash
  node -v
  ```
  Ensure it's the latest LTS version.

- **Check your environment variables:**
  ```bash
  cat .env
  ```
  Ensure `DISCORD_TOKEN` and `OPEN_AI_KEY` are set correctly.

- **Check bot permissions:**
  Ensure your bot has the necessary permissions in the Discord Developer Portal.

---

## **9. Useful Links**
- [Setting Up a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Adding Your Bot to Servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)

---

## **License**

MIT License

---

Happy coding! 🚀

# botGPT
