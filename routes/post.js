const express = require('express');

const router= express.Router();



router.get('/' , (req,res) => {
    res.send('we are in the posts ')
});

module.exports = router;