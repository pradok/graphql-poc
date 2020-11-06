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
}
