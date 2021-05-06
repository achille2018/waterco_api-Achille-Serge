import express from 'express'
import { addPremise, viewAllPremises, viewMemberPremises, updatePremise, viewPremise } from '../controllers/premiseControllers.js'
// import { viewPremise } from '../controllers/premiseControllers'
import { authenticate } from '../middlewares/auth.js'

const premiseRouter = express.Router()

// Add a User - Sign Up - Authenticate.
premiseRouter.post('/', authenticate, addPremise)

// View all premises
premiseRouter.get('/', viewAllPremises)

// View a member premise
premiseRouter.get('/:id', authenticate, viewMemberPremises)

// Update Premise
premiseRouter.put('/:id', authenticate, updatePremise)

// View Premise
premiseRouter.get('/', authenticate, viewPremise)

export default premiseRouter
