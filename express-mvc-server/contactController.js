const express = require('express');
const router = express.Router();

router.get('/kontakt', (req, res) => {
    res.send("kontakt");
});

module.exports = router;
