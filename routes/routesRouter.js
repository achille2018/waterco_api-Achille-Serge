import express from 'express'
import { addRoute, viewRoutes, updateRoute, viewPremise } from '../controllers/routesControllers.js'
// import { viewPremise } from '../controllers/premiseControllers'
import { authenticate } from '../middlewares/auth.js'

const routeRouter = express.Router()

// Add a Route.
routeRouter.post('/', authenticate, addRoute)

// View  Routes
routeRouter.get('/:id', authenticate, viewRoutes)

//
routeRouter.put('/:id', authenticate, updateRoute)

//
routeRouter.get('/:id', authenticate, viewPremise)

export default routeRouter
