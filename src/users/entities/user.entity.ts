import { Exclude } from 'class-transformer'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { Article } from './article.entity'
import { UserData } from './userData.entity'
import { Badge } from './badge.entity'

export enum UserRole {
  ADMIN = 'A',
  MEMBER = 'M',
  GUEST = 'G'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Index({ unique: true })
  @Column({ length: 191 })
  email: string

  @Exclude()
  @Column({ length: 100 })
  hash!: string

  @Column({ length: 200 })
  name: string

  @Index()
  @Column({ type: 'enum', enum: UserRole, default: UserRole.GUEST })
  role!: UserRole

  @OneToMany(() => Article, (article) => article.author)
  articles!: Article[]

  @OneToOne(() => UserData, (data) => data.user)
  @JoinColumn()
  data!: UserData

  @ManyToMany(() => Badge, (badge) => badge.users)
  @JoinTable()
  badges!: Badge[]
}
