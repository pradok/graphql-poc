import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Query, Resolver } from "type-graphql";
import { createConnection } from "typeorm";

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return "Hello World";
  }
}

const app = async () => {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });
  const apolloServer = new ApolloServer({ schema });

  const server = Express();

  apolloServer.applyMiddleware({ app: server });
  server.listen(4004, () => {
    console.log("Server started on  localhost:4004/graphql");
  });
};

app();
