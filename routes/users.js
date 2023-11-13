var express = require('express');
var db = require('../db');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.many('SELECT nombre FROM ususarios')
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('ERROR:', error)
      res.sendStatus(500);
    })
});

/* GET user. */
router.get('/:id', function (req, res, next) {
  db.many('SELECT nombre FROM ususarios WHERE id = $1', req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('ERROR:', error)
      res.sendStatus(500);
    })
});

/* POST user. */
router.post('/', function (req, res, next) {
  db.one('INSERT INTO usuarios (nombre) VALUES ($1) RETURNING *', req.body.nombre)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log('ERROR:', error)
      res.sendStatus(500);
    })
});

module.exports = router;
