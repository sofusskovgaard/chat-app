import amqplib from 'amqplib'

import Environment from 'chat-app.utils/environment';

Environment.configure();

console.log('process.env.RABBITMQ_URI', process.env.RABBITMQ_URI)

amqplib.connect(process.env.RABBITMQ_URI).then(async conn => {

  const channel = await conn.createChannel()

  await channel.assertExchange("chat-app.direct", "direct", {
    durable: true
  });

  const testQueue = await channel.assertQueue("test", {
    durable: true
  })

  await channel.bindQueue(testQueue.queue, "chat-app.direct", testQueue.queue)

  channel.consume(testQueue.queue, (message) => {
    console.log(`[worker]: received message: ${message?.content.toString()}`)
  }, { noAck: true }).then(consumer => console.log(`[worker]: consumer ${consumer.consumerTag} listening on ${testQueue.queue}`))
});