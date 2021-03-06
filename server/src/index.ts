import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { assetsCategoryLoader, createSchema, questionsLoader } from "./utils";

// @Resolver()
// class HelloResolver {
//   @Query(() => String)
//   async hello() {
//     return "Hello World";
//   }
// }

const app = async () => {
  await createConnection();
  const schema = await createSchema();
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
      questionsLoader: questionsLoader(),
      assetsCategoryLoader: assetsCategoryLoader(),
    }),
  });

  const server = Express();
  apolloServer.applyMiddleware({
    app: server,
    cors: { origin: "http://localhost:3000" },
  });
  server.listen(4004, () => {
    console.log("Server started on  localhost:4004/graphql");
  });
};

app();
