import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";
import { AssetCategory } from "./AssetCategory.entity";
@Entity()
@ObjectType()
export class Asset extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  serialNumber: string;

  @Field()
  @Column()
  className: string;

  @Field()
  @Column()
  tier6Name: string;

  @Field()
  @Column()
  hardwareId: string;

  @Field()
  @Column()
  make: string;

  @Field()
  @Column()
  gsmActiveSim: string;

  @Field()
  @Column()
  equipmentDescription: string;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  languageCode: string;

  @Field(() => AssetCategory)
  @ManyToOne(() => AssetCategory, (assetCategory) => assetCategory.assets)
  category: AssetCategory;
  @RelationId((asset: Asset) => asset.category)
  categoryId: number;

  // @Field(() => AssetCategory)
  // async cat(@Ctx() { assetsCategoryLoader }: Context): Promise<AssetCategory> {
  //   return assetsCategoryLoader.load(this.id);
  // }
}
