const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const connection = require('../database');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM employes', (err, results) => {
    if (err) {
      res.status(500).send({
        message: 'Error en la petición'
      });
    } else {
      res.status(200).send(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM employes WHERE id = ?', [id], (err, rows, fields) => {
    if (err) {
      res.status(500).send({
        message: 'Error en la petición'
      });
      console.log(err);
    } else {
      res.status(200).json(rows);
    }
  }
  );
});

module.exports = router;