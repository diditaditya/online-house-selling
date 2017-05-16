const express = require('express');
const router = express.Router();
const House = require('../controllers/house');

router.get('/', (req, res) => {
  res.send('Up and Running');
});

router.get('/houses', House.findAll);
router.get('/house/:id', House.findById);
router.post('/houses', House.add);
router.put('/house/:id', House.update);
router.delete('/house/:id', House.delete);

module.exports = router;
