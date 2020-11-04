import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Question } from "../../entity/Question.entity";

define(Question, (faker: typeof Faker) => {
  const question = new Question();
  question.title = faker.random.words(7) + "?";
  question.subTitle = faker.random.words(4);
  return question;
});
