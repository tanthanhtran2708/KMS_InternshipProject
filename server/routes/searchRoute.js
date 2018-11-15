const express = require('express');
const router = express.Router();

//const searchModule = require('./modules/search);

// Return current active user maybe
router.get('/',function(req,res) {
    res.send('GET /search');
})

// Take in queries and perform search here
router.post('/',function(req,res) {

    res.send('POST /search');
})

module.exports = router;