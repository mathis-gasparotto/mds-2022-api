import { User } from 'src/users/entities/user.entity'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  birthday!: Date

  @OneToOne(() => User, (user) => user.data)
  user!: User
}
