import { FieldResolver, Resolver, Root } from "type-graphql";
import { Question } from "../../entity";

@Resolver(() => Question)
export class QuestionResolver {
  @FieldResolver(() => String)
  createdBy(@Root() question: Question) {
    const {
      createdByUser: { firstName, lastName },
    } = question;
    return `${firstName} ${lastName}`;
  }

  @FieldResolver(() => String)
  createdDateTime(@Root() question: Question) {
    return new Date(question.createdDateTime).toUTCString();
  }
}
