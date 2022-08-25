declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    RABBITMQ_URI: string;
  }
}