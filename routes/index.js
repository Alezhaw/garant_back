const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const userRefillRouter = require('./userRefillRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const dealRouter = require('./dealRouter')
const dealMessagesRouter = require('./dealMessagesRouter')
const messageToAdminRouter = require('./messageToAdminRouter')
const chatRouter = require('./chatRouter')
const userTransferRoutes = require('./userTransferRoutes')
const userToUserrouter = require('./userToUserrouter')
const siteNameRouter = require('./siteNameRouter')
const adminChatRouter = require('./adminChatRouter')

router.use('/user', userRouter)
router.use('/refill', userRefillRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/deal', dealRouter)
router.use('/dealMessages', dealMessagesRouter)
router.use('/adminChat', adminChatRouter)
router.use('/messagesToAdmin', messageToAdminRouter)
router.use('/chat', chatRouter)
router.use('/transfer', userTransferRoutes)
router.use('/touser', userToUserrouter)
router.use('/name', siteNameRouter)


module.exports = router
