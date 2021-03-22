import { Factory, Seeder } from "typeorm-seeding";
import { Asset, AssetCategory } from "../../entity/Asset";
import { pickArrayRandom } from "../../utils";

export default class AssetsCreate implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const categories = await factory(AssetCategory)().createMany(4);
    await factory(Asset)()
      .map(async (asset: Asset) => {
        asset.category = pickArrayRandom(categories);
        return asset;
      })
      .createMany(10);
  }
}
