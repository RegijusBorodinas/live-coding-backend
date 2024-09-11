import sinon from 'sinon'

import * as customerController from '../customer'
import * as customerService from '../../service/customer'

describe('Customer Controller', () => {
  describe('getCustomer', () => {
    it('should return a customer', async () => {
      const customer = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
      }

      const req = {
        params: {
          id: 1
        }
      }

      sinon.stub(customerService, 'getSingleCustomer').returns(customer)

      const res = {
        json: sinon.spy()
      }

      await customerController.getCustomer(req, res)

      sinon.assert.calledOnceWithExactly(res.json, customer)
    })
  })
})
