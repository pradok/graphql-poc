import faker from "faker";
import { Asset, AssetCategory } from "../../entity/Asset";

export const assetsMock = async () => {
  const assetCategory = await AssetCategory.create({
    name: faker.random.word(),
  }).save();
  const asset = await Asset.create({
    name: faker.random.word(),
    serialNumber: faker.random.word(),
    className: faker.random.word(),
    tier6Name: faker.random.word(),
    hardwareId: faker.random.word(),
    make: faker.random.word(),
    gsmActiveSim: faker.random.word(),
    equipmentDescription: faker.random.word(),
    model: faker.random.word(),
    languageCode: faker.random.word(),
    category: assetCategory,
  }).save();

  return asset;
};
