import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @Column({ length: 100 })
  title!: string

  @Column({ type: 'longtext' })
  content!: string

  @ManyToOne(() => User, (user) => user.articles)
  author!: User
}
