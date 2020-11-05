import faker from "faker";
import { Option, Question, Survey, User } from "../../entity";

export const surveyQuestions = async () => {
  const gender = faker.random.number(1);
  const user = await User.create({
    firstName: faker.name.firstName(gender),
    lastName: faker.name.lastName(gender),
  }).save();

  const option1 = await Option.create({
    text: "Three thousand three hundred eighty-seven",
  }).save();
  const option2 = await Option.create({
    text: "Three hundred eighty-seven",
  }).save();
  const option3 = await Option.create({
    text: "eighty-seven",
  }).save();
  const question = await Question.create({
    title: "How many devs does it take to change a lightbulb?",
    subTitle: "How many devs does it take to change a lightbulb?",
    createdBy: user,
    options: [option1, option2, option3],
  }).save();

  const survey = await Survey.create({
    name: `Survey ${faker.random.word()} ${faker.random.number()}`,
    squestions: [question],
  }).save();

  return survey;
};
