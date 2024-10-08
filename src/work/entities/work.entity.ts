import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'work', timestamps: false })
export class Work extends Model<Work> {
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
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  subtitle: string;

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
