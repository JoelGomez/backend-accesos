const express = require('express');
const router = express.Router();

const accesosCtrl = require('../controllers/accesos.controller');

router.get('/', accesosCtrl.readAccesos);
router.get('/:id', accesosCtrl.readAcceso);
router.post('/', accesosCtrl.createAcceso);
router.put('/:id', accesosCtrl.updateAcceso);
router.delete('/:id', accesosCtrl.deleteAcceso);


module.exports = router;