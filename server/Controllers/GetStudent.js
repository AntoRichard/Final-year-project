const studentModel = require('../Models/Student');

exports.getStudent = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const student = await studentModel.findOne({id});
        res.status(202).json({
            msg: 'Success',
            student
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}