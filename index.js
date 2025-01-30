// Load environment variables
require('dotenv').config();

// Import necessary modules
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const { OpenAI } = require('openai');

// Initialize OpenAI API
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

// Create Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Define commands
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'ask',
    description: 'Ask ChatGPT a question',
    options: [
      {
        name: 'question',
        type: 3, // String
        description: 'Your question for ChatGPT',
        required: true,
      },
    ],
  },
];

// When bot is ready, register commands
client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    console.log('Started refreshing application (/) commands.');
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
});

// Event listener for handling commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (interaction.commandName === 'ask') {
    await interaction.deferReply(); // Acknowledge the command

    const question = interaction.options.getString('question');

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: question }],
      });

      const answer = response.choices[0].message.content.trim();
      await interaction.editReply(answer);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      await interaction.editReply('Oops! Something went wrong.');
    }
  }
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
