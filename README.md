# Mineflayer "Hello World" Bot

This is a simple Mineflayer bot that joins a Minecraft server and says "Hello world" in the chat. It can also be modified to respond to other messages in the chat.

## Installation

To install the dependencies for this project, run:

```npm install```

## Usage

To run the bot, use the following command:

```node index.js <server_address> <username> [<password>]```

- `server_address`: The address of the Minecraft server to join.
- `username`: The username to use for the Minecraft account.
- `password` (optional): The password to use for the Minecraft account, if it is a licensed account that requires authentication.

For example, to run the bot on a local Minecraft server with the username "my_bot", you would run:

```node index.js localhost my_bot```

If the Minecraft account is licensed and requires authentication, you can include the password as the 4th argument:

```node index.js localhost my_bot my_password```

Once the bot is running, it will automatically join the specified server and say "Hello world" in the chat.

## Customization

To modify the bot to respond to other messages in the chat, you can edit the `bot.on('chat', ...)` event listener in `index.js`. The event listener takes two arguments: the username of the player who sent the message, and the content of the message. You can use these values to write custom logic that responds to specific messages in the chat.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
