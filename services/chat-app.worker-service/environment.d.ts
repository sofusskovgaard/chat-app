declare namespace NodeJS {
  export interface ProcessEnv {
    RABBITMQ_URI: string;
    MONGODB_URI: string;
  }
}