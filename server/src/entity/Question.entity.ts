import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Option } from "./Option.entity";
import { QuestionType } from "./QuestionType.entity";
import { User } from "./User.entity";

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
  @CreateDateColumn({ type: "timestamp" })
  createdDateTime: string;

  @Field()
  @ManyToOne(() => User, (user) => user.questions)
  @JoinColumn()
  createdBy: User;

  @Field()
  @OneToOne(() => QuestionType)
  @JoinColumn()
  questionType: QuestionType;

  @Field(() => Option)
  @ManyToMany(() => Option, (option) => option.questions)
  options: Option[];
}
