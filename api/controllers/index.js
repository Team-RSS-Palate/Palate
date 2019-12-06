const express = require('express');
const router = express.Router();


// Load each controller
//const authController = require('./auth.js');
const postsController = require('./posts.js');


// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
//router.use('/auth', authController);
router.use('/posts', postsController);



module.exports = router;