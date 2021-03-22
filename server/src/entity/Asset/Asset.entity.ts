import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssetCategory } from "./AssetCategory.entity";

@ObjectType()
@Entity()
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

  @ManyToOne(() => AssetCategory)
  @JoinColumn()
  category: AssetCategory;
}
