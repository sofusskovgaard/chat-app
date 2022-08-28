import "reflect-metadata"
import express from 'express';
import morgan from 'morgan'
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import Environment from 'chat-app.utils/environment';

import Schema from './schema'

Environment.configure();

async function initialize_database() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

async function main() {

  await initialize_database()

  const app = express();

  app.use(morgan(':response-time ms\t:method\t:status\t:url'))

  const schema = await Schema()

  app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
  }))

  app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
  });
}

main()
