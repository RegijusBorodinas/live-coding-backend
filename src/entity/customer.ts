import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

/*
 * Customer entity
 */
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    first_name: string

  @Column()
    last_name: string

  @Column()
    age: number
}
