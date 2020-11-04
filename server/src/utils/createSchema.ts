import { buildSchema } from "type-graphql";
import { SurveyResolver } from "../modules/Survey/Survey.resolver";

export const createSchema = () =>
  buildSchema({
    resolvers: [SurveyResolver],
  });
