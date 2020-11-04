import { Ctx, Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Context } from "../types/Context";
import { Question } from "./Question.entity";

@ObjectType()
@Entity()
export class Survey extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => Question)
  @JoinTable()
  squestions: Question[];

  @Field(() => [Question])
  async questions(@Ctx() { questionsLoader }: Context): Promise<Question[]> {
    return questionsLoader.load(this.id);
  }
}
