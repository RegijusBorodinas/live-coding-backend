import { type Request, type Response } from 'express'
import { getSingleCustomer } from '../service/customer'
import { validationResult } from 'express-validator'

// Retrieves a customer by :id parameter
const getCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request parameters
    const validation = validationResult(req)
    if (!validation.isEmpty()) {
      res.status(400).json({
        message: 'Invalid request'
      })

      return
    }

    const customer = await getSingleCustomer(req.params.id)

    res.json(customer)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Unknown error occurred'
    })
  }
}

const createOrderForCustomer = async (_req: Request, res: Response): Promise<void> => {
  // Not implemented
  res.sendStatus(501)
}

export {
  getCustomer,
  createOrderForCustomer
}
