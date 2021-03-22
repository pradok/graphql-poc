import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Asset } from "../../entity/Asset";

define(Asset, (faker: typeof Faker) => {
  const asset = new Asset();
  asset.name = faker.commerce.product();
  asset.serialNumber = faker.random.number(12).toString();
  asset.className = faker.random.word();
  asset.tier6Name = faker.random.word();
  asset.hardwareId = faker.random.number(8).toString();
  asset.make = faker.random.word();
  asset.gsmActiveSim = faker.random.word();
  asset.equipmentDescription = faker.random.words(15);
  asset.model = faker.random.word();
  asset.languageCode = faker.random.word();

  return asset;
});
