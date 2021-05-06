import { Router } from 'express'
import clientRouter from './clientRouter.js'
import usersRouter from './usersRouter.js'
import billRouter from './billRouter.js'
import premiseRouter from './premiseRouter.js'
import paymentRouter from './paymentRouter.js'
import routesRouter from './routesRouter.js'

const router = Router()

router.use('/client', clientRouter)
router.use('/users', usersRouter)
router.use('/bill', billRouter)
router.use('/premise', premiseRouter)
router.use('/payment', paymentRouter)
router.use('/routes', routesRouter)

export default router
