import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { AssetCategory } from "../../entity/Asset";

define(AssetCategory, (faker: typeof Faker) => {
  const category = new AssetCategory();
  category.name = faker.random.word();
  return category;
});
