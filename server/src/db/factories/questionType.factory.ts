import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { QuestionType } from "../../entity/Survey";

define(QuestionType, (faker: typeof Faker) => {
  const questionType = new QuestionType();
  questionType.name = faker.random.words(1);
  return questionType;
});
