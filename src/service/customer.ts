import { Customer } from '../entity/customer'
import { AppDataSource } from '../data-source'

const getSingleCustomer = async (customerId: string): Promise<Customer> => {
  const customerRepository = AppDataSource.getRepository(Customer)

  const customer = await customerRepository.findOne({
    where: {
      id: customerId
    }
  })

  if (!customer) {
    throw new Error('Customer not found')
  }

  return customer
}

export { getSingleCustomer }
