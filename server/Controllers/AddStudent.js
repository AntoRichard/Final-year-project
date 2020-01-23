const userModel = require('../Models/Student');

exports.getAddStudent = async (req, res, next) => {
    try {
        const students = await userModel.find();
        res.status(200).json({
            msg: 'success',
            students
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Internal Server problem'
        })
    }
}

exports.postAddStudent = async (req, res, next) => {
    console.log(req.body);

    try {
        const newStudent = new userModel(req.body);
        await newStudent.save();
        res.status(201).json({
            msg: 'Student added to database'
        });
        
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}