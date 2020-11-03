import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../entity/User.entity";

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);

  const user = new User();
  user.firstName = faker.name.firstName(gender);
  user.lastName = faker.name.lastName(gender);
  return user;
});
