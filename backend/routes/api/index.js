// backend/routes/api/index.js
const router = require('express').Router();
const { User } = require("../../db/models");
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const commentsRouter = require ('./comments.js')
const registryRouter = require ("./registry.js")
const photoRouter = require('./photo.js')
const songrequestRouter = require('./songrequest.js')
const likesRouter = require("./likes.js")


// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/comments', commentsRouter)
router.use('/registries', registryRouter)
router.use('/photos',photoRouter)
router.use('/songRequests',songrequestRouter)
router.use('/likes',likesRouter)


router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});



module.exports = router;
