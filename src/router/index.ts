import express from 'express'

import { getCustomer, createOrderForCustomer } from '../controller/customer'
import { param } from 'express-validator'

export const router = express.Router()

// /customer
router.get('/customer/:id', param('id').isString().isLength({ min: 1, max: 5 }), getCustomer)
router.post('/customer/:id/order', param('id').isString().isLength({ min: 1, max: 5 }), createOrderForCustomer)
