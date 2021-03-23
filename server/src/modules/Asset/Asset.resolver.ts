import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Asset, AssetCategory } from "../../entity/Asset";

@Resolver(() => Asset)
export class AssetResolver {
  @Query(() => [Asset], { nullable: true })
  async assets(@Arg("id", { nullable: true }) id?: string) {
    if (id) {
      return (
        Asset.find({
          id: parseInt(id),
        }) ?? null
      );
    } else {
      return Asset.find() ?? null;
    }
  }

  @Query(() => Asset, { nullable: true })
  async asset(@Arg("id", { nullable: true }) id: string) {
    const asset = await Asset.findOne({
      id: parseInt(id),
    });
    return asset ?? null;
  }

  @FieldResolver()
  async category(@Root() asset: Asset): Promise<AssetCategory> {
    return (await AssetCategory.findOne(asset.categoryId, {
      cache: 10000,
    }))!;
  }
}
