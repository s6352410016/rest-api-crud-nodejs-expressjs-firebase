const conn = require('../config/conn');

const createStudent = async (req, res) => {
    try {
        const { stuName, stuAddress, stuTel } = req.body;
        await conn.collection('student').add({
            stuName: stuName,
            stuAddress: stuAddress,
            stuTel: stuTel,
            createdAt: new Date()
        });
        res.status(201).json({ msg: 'Student created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllStudent = async (req, res) => {
    try {
        const snapshot = await conn.collection('student').get();
        const data = snapshot.docs.map((docs) => ({ id: docs.id, ...docs.data() }));
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await conn.collection('student').doc(id).get();
        res.status(200).json(doc.data());
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { stuName, stuAddress, stuTel } = req.body;
        await conn.collection('student').doc(id).update({
            stuName: stuName,
            stuAddress: stuAddress,
            stuTel: stuTel,
            createdAt: new Date()
        });
        res.status(200).json({ msg: 'Student updated successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        await conn.collection('student').doc(id).delete();
        res.status(200).json({ msg: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createStudent,
    getAllStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById
}