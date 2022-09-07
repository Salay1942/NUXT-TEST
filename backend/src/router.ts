import { Router } from 'express'
import checkAdmin from './controllers/checkAdmin'
import checkAuth from './controllers/checkAuth'
import login from './controllers/login'
import loginAsAdmin from './controllers/loginAsAdmin'
import logout from './controllers/logout'
import signUp from './controllers/signUp'

const router = Router()

router.get('/auth', checkAuth)
router.post('/sign-up', signUp)
router.post('/login', login)
router.get('/logout', logout)

router.get('/admin', checkAdmin)
router.post('/admin/login', loginAsAdmin)

export default router
