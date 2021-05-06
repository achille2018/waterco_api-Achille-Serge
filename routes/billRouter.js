import express from 'express'
import { addBill, viewBill } from '../controllers/billControllers.js'
import { authenticate } from '../middlewares/auth.js'

const billRouter = express.Router()

// Add a Bill - Sign Up - Authenticate.
billRouter.post('/', authenticate, addBill)

// View a bill
billRouter.get('/', authenticate, viewBill)

export default billRouter
