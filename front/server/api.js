const express = require('express')
const router = express.Router()
router.get('/click', (req, res, next) => {
    const clickId = 'test'
    router.push(`/lp?id=${clickId}`)
})
module.exports = router