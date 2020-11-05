import { graphql, GraphQLSchema } from "graphql";
import { createSchema } from "../createSchema";
import { questionsLoader } from "../questions.loader";

interface Options {
  source: string;
}

let schema: GraphQLSchema;

export const graphQLTest = async ({ source }: Options) => {
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    contextValue: {
      questionsLoader: questionsLoader(),
    },
  });
};
