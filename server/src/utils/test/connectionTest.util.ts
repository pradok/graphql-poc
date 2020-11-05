import { createConnection } from "typeorm";

export const connectionTest = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "",
    database: "compass-survey-test",
    synchronize: drop,
    dropSchema: drop,
    entities: ["src/entity/*.*"],
  });
};
