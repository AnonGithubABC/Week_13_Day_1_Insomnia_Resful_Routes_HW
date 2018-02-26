const express = require('express');
const router = express.Router();

router.use('/films', require('./films.js'));


//HOME ROUTE
router.get('/', function(req, res) {
  res.json({ data: 'FILM REVIEW SITE!'});
});


module.exports = router
