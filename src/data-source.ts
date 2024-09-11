import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'
import { Customer } from './entity/customer'
import { Order } from './entity/order'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'hostinger-interview',
  synchronize: false,
  logging: false,
  entities: [Customer, Order],
  migrations: ['src/migration/*.ts']
})
