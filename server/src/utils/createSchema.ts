import { buildSchema } from "type-graphql";
import { QuestionResolver, SurveyResolver } from "../modules/Survey";

export const createSchema = () =>
  buildSchema({
    resolvers: [SurveyResolver, QuestionResolver],
  });
