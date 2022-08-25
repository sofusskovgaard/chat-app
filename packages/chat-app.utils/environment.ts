import dotenv from 'dotenv';
import path from 'path';

function configure() {
  dotenv.config({ path: path.join(process.cwd(), process.env.NODE_ENV === "production" ? '.env' : '.env.local') });
}

export default {
  configure
}