import { Factory, Seeder } from "typeorm-seeding";
import { Option } from "../entity/Option.entity";
import { Question } from "../entity/Question.entity";
import { Survey } from "../entity/Survey.entity";
import { User } from "../entity/User.entity";

export default class CreateQuestions implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const user = await factory(User)().create();
    await factory(Survey)()
      .map(async (survey: Survey) => {
        const questions = await factory(Question)()
          .map(async (question: Question) => {
            question.createdBy = user;
            const options = await factory(Option)().createMany(5);
            question.options = options;

            return question;
          })
          .createMany(2);
        survey.squestions = questions;
        return survey;
      })
      .createMany(3);
  }
}
