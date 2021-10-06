const router = require("express").Router();
const beatsRouter = require('./beats.routes')
const adminRouter = require('./admin.routes')
const musicRouter = require('./music.routes')
const authRouter = require('./auth.routes')
const uploadRouter = require('./uploads.routes')
const purchaseRouter = require('./purchase.routes')
const { checkId, isLoggedIn, checkRoles } = require("../middleware/middleware")



router.use("/admin", adminRouter );
router.use("/beats", beatsRouter);
router.use("/music", musicRouter);
router.use('/auth', authRouter)
router.use('/uploads', uploadRouter)
router.use("/purchase", purchaseRouter);
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;