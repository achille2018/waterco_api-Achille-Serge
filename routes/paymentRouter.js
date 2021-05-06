import express from 'express'
import { addPayment, viewAllPayments, viewPaymentsByPremise } from '../controllers/paymentControllers.js'
import { authenticate } from '../middlewares/auth.js'

const paymentRouter = express.Router()

// Add a payment
paymentRouter.post('/', authenticate, addPayment)

// View All payments
paymentRouter.get('/:id', authenticate, viewAllPayments)

// view Payments By Premise
paymentRouter.get('/:id', authenticate, viewPaymentsByPremise)

export default paymentRouter
