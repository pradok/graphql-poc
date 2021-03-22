import { Factory, Seeder } from "typeorm-seeding";
import {
  Option,
  Question,
  QuestionType,
  Survey,
  User,
} from "../../entity/Survey";
import { pickArrayRandom } from "../../utils";

export default class CreateQuestions implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const users = await factory(User)().createMany(3);
    const questionTypes = await factory(QuestionType)().createMany(4);
    await factory(Survey)()
      .map(async (survey: Survey) => {
        const questions = await factory(Question)()
          .map(async (question: Question) => {
            question.createdByUser = pickArrayRandom(users);
            const options = await factory(Option)().createMany(5);
            question.options = options;
            question.questionType = pickArrayRandom(questionTypes);
            return question;
          })
          .createMany(2);
        survey.squestions = questions;
        return survey;
      })
      .createMany(3);
  }
}
