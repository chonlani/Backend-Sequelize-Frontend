const db = require("../models");

const getAllStudents = async(req, res) => {
    const student = await db.Student.findAll();

    res.send(student);
};

const getStudentById = async(req, res) => {
    const studentId = Number(req.param.id);
    const targetStudent = await db.Student.findOne({ where: { id: studentId } });

    res.send(targetStudent);
};

const createNewStudent = async(req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const numberPhone = req.body.number;
    
    const newStudent = await db.Student.create({
        name: name,
        age: age,
        number_phone: numberPhone,
    })

    res.status(201).send(newStudent)
};

const editStudentById = async (req, res) => {
    const studentId = req.param.id;
    const name = req.body.name;
    const age = req.body.age;
    const numberPhone = req.body.number

    await db.Student.update(
        {
            name: name,
            age: age,
            number_phone: numberPhone,  
        },
        {
            where: { id: studentId}
        }
    );

    res
    .status(200)
    .send({ message: `student id: ${student} has been updated` });
};

const deleteStudentById = async(req, res) => {
    const studentId = req.param.id;

    await db.student.destroy({ where: { id: studentId } });
    
    res.status(204).send();
};

module.exports = {
    getAllStudents,
    getStudentById,
    createNewStudent,
    editStudentById,
    deleteStudentById
}