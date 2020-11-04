import { Query, Resolver } from "type-graphql";
import { Survey } from "../../entity/Survey.entity";

@Resolver()
export class SurveyResolver {
  @Query(() => [Survey])
  async surveys() {
    return Survey.find();
  }
}
