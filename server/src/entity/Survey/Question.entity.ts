import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../User/User.entity";
import { Option } from "./Option.entity";
import { QuestionType } from "./QuestionType.entity";

@ObjectType()
@Entity()
export class Question extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  subTitle: string;

  @Field()
  @CreateDateColumn()
  createdDateTime: string;

  @ManyToOne(() => User, (user) => user.questions)
  @JoinColumn()
  createdByUser: User;

  // Todo, forgot about this, add later though has no bearing on the work done so far.
  // @Field()
  @ManyToOne(() => QuestionType)
  @JoinColumn()
  questionType: QuestionType;

  @Field(() => [Option])
  @ManyToMany(() => Option)
  @JoinTable()
  options: Option[];
}
