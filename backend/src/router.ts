import { Router } from 'express'
import checkAuth from './controllers/checkAuth'
import login from './controllers/login'
import logout from './controllers/logout'
import signUp from './controllers/signUp'

const router = Router()

router.get('/auth', checkAuth)
router.post('/sign-up', signUp)
router.post('/login', login)
router.get('/logout', logout)

export default router
