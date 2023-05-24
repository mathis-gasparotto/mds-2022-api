import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm'

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

  @Column({ length: 100 })
  hash!: string

  @Column({ length: 200 })
  name: string

  @Index()
  @Column({ type: 'enum', enum: UserRole, default: UserRole.GUEST })
  role!: UserRole
}
