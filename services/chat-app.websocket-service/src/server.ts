import "reflect-metadata"

import { createServer } from "http";
import { Server } from "socket.io";

import Environment from 'chat-app.utils/environment';
import Container from 'chat-app.infrastructure/container'
import CommandBusService from "chat-app.infrastructure/services/command-bus-service";

import CreateUserCommand from 'chat-app.infrastructure/commands/create-user-command'

Environment.configure();

const port = process.env.PORT;

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log('[ws]: new socket connection established')

  socket.on("create-user", (async message => {
    const obj = JSON.parse(message)
    const command = new CreateUserCommand()

    command.first_name = obj["first_name"]
    command.last_name = obj["last_name"]
    command.email = obj["email"]
    command.password = obj["password"]

    await Container.resolve(CommandBusService).send(command)
  }))
});

httpServer.listen(port, () => console.log(`⚡️[ws]: Websockets are running at http://localhost:${port}`));