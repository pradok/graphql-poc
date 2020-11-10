import { Arg, Query, Resolver } from "type-graphql";
import { Survey } from "../../entity/Survey.entity";

@Resolver()
export class SurveyResolver {
  // TODO  Another query when loading only a specific survey then shouldn't be an array.
  @Query(() => [Survey], { nullable: true })
  async surveys(@Arg("id", { nullable: true }) id?: string) {
    if (id) {
      return (
        Survey.find({
          id: parseInt(id),
        }) ?? null
      );
    } else {
      return Survey.find() ?? null;
    }
  }

  @Query(() => Survey, { nullable: true })
  async survey(@Arg("id", { nullable: true }) id: string) {
    const survey = await Survey.findOne({
      id: parseInt(id),
    });
    return survey ?? null;
  }
}
