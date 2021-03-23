import { createConnection } from "typeorm";

export const connectionTest = (drop: boolean = false) => {
  return createConnection({
    name: "default",
    type: "sqlite",
    database: "compass-survey-test",
    synchronize: drop,
    dropSchema: drop,
    entities: ["src/entity/**/*.*"],
  });
};
