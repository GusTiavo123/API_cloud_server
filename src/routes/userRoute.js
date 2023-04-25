const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/login', userController.login);

router.post('/sing-up', userController.singUp);

router.put('/:id/update-username', userController.updateUsername);

router.put('/:id/update-password', userController.updatePassword);

router.delete('/:id/delete-user',userController.deleteUser); 

module.exports = router;