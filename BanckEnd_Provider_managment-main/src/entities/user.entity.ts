import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserModel } from "../models";
import { SignupDto } from "../dtos";

@Entity({name: 'user'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: false })
  isSuperAdmin: boolean;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

static fromModel(model: SignupDto): UserEntity{
    const entity = new UserEntity();
    entity.firstName = model.firstName
    entity.lastName = model.lastName
    entity.email = model.email;
    entity.password = model.password;
    return entity;
  }

  toModel(): UserModel {
    return new UserModel({
      id: this.id,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      isSuperAdmin: this.isSuperAdmin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    })
  }
}