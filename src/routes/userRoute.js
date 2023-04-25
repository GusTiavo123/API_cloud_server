const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/login', userController.login);

router.post('/sing-up', userController.singUp);

router.put('/:id/updateUsername', userController.updateUsername);

router.put('/:id/updatePassword', userController.updatePassword);

router.delete('/:id/deleteUser',userController.deleteUser); 

module.exports = router;