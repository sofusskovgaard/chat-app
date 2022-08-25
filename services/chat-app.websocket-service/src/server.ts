import { createServer } from "http";
import { Server } from "socket.io";
import amqplib from 'amqplib'

import Environment from 'chat-app.utils/environment';

Environment.configure();

const port = process.env.PORT;

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

amqplib.connect(process.env.RABBITMQ_URI).then(async amqp => {

  const channel = await amqp.createChannel()
  const exchange = await channel.checkExchange("chat-app.direct")
  const queue = await channel.checkQueue("test")

  io.on("connection", (socket) => {
    console.log('[ws]: connection established')
  
    socket.on("test", (async message => {
      console.log('lol', message)
      await channel.publish("chat-app.direct", "test", Buffer.from(message))
    }))
  });

})

httpServer.listen(port, () => console.log(`⚡️[ws]: Websockets are running at http://localhost:${port}`));