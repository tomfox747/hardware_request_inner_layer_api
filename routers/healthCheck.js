const express = require('express');
const router = express.Router();
const healthCheckService = require('../services/healthCheck');

router.get('/', (req,res) =>{
    const response = healthCheckService();
    res.send(response);
})

module.exports = router;