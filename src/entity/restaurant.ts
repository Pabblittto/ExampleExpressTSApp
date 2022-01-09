import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  website!: string;
}

export type RestaurantObj = {
  id: number;
  name: string;
  website: string;
};
