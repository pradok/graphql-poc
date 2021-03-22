import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Survey } from "../../entity/Survey";

define(Survey, (faker: typeof Faker) => {
  const survey = new Survey();
  survey.name = `Survey ${faker.random.word()} ${faker.random.number()}`;
  return survey;
});
