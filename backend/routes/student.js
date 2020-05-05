const express = require("express");
const router = express.Router();
const studentContoller = require('../contoller/student')
const passport = require("passport")

router.get('/', studentContoller.getAllStudents);
router.get('/:id', studentContoller.getStudentById);
router.post('/', studentContoller.createNewStudent);
router.put('/:id', studentContoller.editStudentById);
router.delete('/:id', auth, studentContoller.deleteStudentById);

module.exports = router;
