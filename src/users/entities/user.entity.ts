import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    username : string;
    @Column()
    password: string;

}
