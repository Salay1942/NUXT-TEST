import { Router } from 'express'
import checkAdmin from './controllers/checkAdmin'
import checkAuth from './controllers/checkAuth'
import checkout from './controllers/checkout'
import getAllProducts from './controllers/getAllProducts'
import getProduct from './controllers/getProduct'
import login from './controllers/login'
import loginAsAdmin from './controllers/loginAsAdmin'
import logout from './controllers/logout'
import signUp from './controllers/signUp'
import upsertProducts from './controllers/upsertProducts'
import onlyAdmin from './middleware/onlyAdmin'
import onlyAuth from './middleware/onlyAuth'

const router = Router()

router.get('/auth', checkAuth)
router.post('/sign-up', signUp)
router.post('/login', login)
router.get('/logout', logout)

router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)

router.post('/checkout', onlyAuth, checkout)

router.get('/admin', checkAdmin)
router.post('/admin/login', loginAsAdmin)

router.use('/admin', onlyAdmin)
router.post('/admin/products', upsertProducts)

export default router
