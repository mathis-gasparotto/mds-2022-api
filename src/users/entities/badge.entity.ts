import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Badge {
  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @Column({ length: 100 })
  title!: string

  @ManyToMany(() => User, (user) => user.badges)
  users!: User[]
}
