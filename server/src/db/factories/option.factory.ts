import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Option } from "../../entity/Survey";

define(Option, (faker: typeof Faker) => {
  const option = new Option();
  option.text = faker.random.words(4);
  return option;
});
