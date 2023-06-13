import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { User } from '../users/users.model'

interface JobCreationAttrs {
  title: string
  description: string
  salary: number
  userId: number
}

@Table({ tableName: 'jobs' })
export class Job extends Model<Job, JobCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING(5000), unique: true, allowNull: false })
  title: string

  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @Column({ type: DataType.INTEGER })
  salary: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number

  @BelongsTo(() => User)
  author: User
}
