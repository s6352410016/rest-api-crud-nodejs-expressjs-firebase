const router = require('express').Router();
const studentController = require('../controllers/studentController');

router.post('/api/createStudent' , studentController.createStudent);
router.get('/api/getAllStudent' , studentController.getAllStudent);
router.get('/api/getStudentById/:id' , studentController.getStudentById);
router.put('/api/updateStudentById/:id' , studentController.updateStudentById);
router.delete('/api/deleteStudentById/:id' , studentController.deleteStudentById);

module.exports = router;