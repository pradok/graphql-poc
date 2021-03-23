import DataLoader from "dataloader";
import { Asset, AssetCategory } from "../entity/Asset";

const batchCategory = async (assetIds: readonly number[]) => {
  console.log({ assetIds });
  const assets = await Asset.find({
    join: {
      alias: "asset",
      leftJoinAndSelect: {
        category: "asset.category",
      },
    },
  });

  const assetIdCategories: { [assetId: number]: AssetCategory } = {};

  assets.forEach((ac) => {
    assetIdCategories[ac.id] = ac.category;
  });

  const assetWithCategories = assetIds.map(
    (assetId) => assetIdCategories[assetId]
  );

  return assetWithCategories;
};

export const assetsCategoryLoader = () => new DataLoader(batchCategory);
