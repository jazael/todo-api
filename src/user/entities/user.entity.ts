import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status: boolean;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
  })
  creationdate: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
  })
  updatedate: Date;
}
