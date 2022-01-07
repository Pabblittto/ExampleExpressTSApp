import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  hashedPassword!: string;
}

export type UserObj = {
  id: number;
  email: string;
  hashedPassword: string;
};
