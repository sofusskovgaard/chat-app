import express, { Express, Request, Response } from 'express';

import Environment from 'chat-app.utils/environment';

Environment.configure();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});