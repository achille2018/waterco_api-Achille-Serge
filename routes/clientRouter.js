import express from 'express'
import { addClient, viewClient, viewAllMembers, updateMember, deleteMember } from '../controllers/clientControllers.js'
import { authenticate } from '../middlewares/auth.js'

const membersRouter = express.Router()

// Add a Member
membersRouter.post('/', authenticate, addClient)

// View a member members/:id
membersRouter.get('/:id', authenticate, viewClient)

// View all members members/
membersRouter.get('/', authenticate, viewAllMembers)

// Update member record members/
membersRouter.put('/:id', authenticate, updateMember)

// Delete a member members/:id
membersRouter.delete('/:id', authenticate, deleteMember)

export default membersRouter
