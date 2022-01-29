import { Group } from "./group";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  hashedPassword!: string;

  @ManyToMany(() => Group, (group) => group.users)
  groups!: Group[];

  @ManyToMany(() => Group, (group) => group.admins)
  managedGroups!: Group[];
}

export type UserObj = {
  id: number;
  email: string;
  hashedPassword: string;
};
