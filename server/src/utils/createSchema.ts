import { buildSchema } from "type-graphql";
import { AssetCategoryResolver, AssetResolver } from "../modules/Asset";
import { QuestionResolver, SurveyResolver } from "../modules/Survey";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      SurveyResolver,
      QuestionResolver,
      AssetResolver,
      AssetCategoryResolver,
    ],
  });
