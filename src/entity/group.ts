import { User } from "./user";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from "typeorm";

@Entity()
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  codeCreationTime!: number;

  @Column({ nullable: true })
  accessCode!: string;

  @ManyToMany(() => User, (user) => user.groups)
  @JoinTable()
  users!: User[];

  @ManyToMany(() => User, (user) => user.managedGroups)
  @JoinTable()
  admins!: User[];
}
