const subjectModel = require('../Models/Subject');

exports.getSubject = async (req, res, next) => {
    
    try {
        const subjects = await subjectModel.find();
        console.log('inside')
        res.status(200).json({
            msg: 'success',
            subjects
        }); 
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}

exports.getSingleSubject = async (req, res, next) => {
    console.log('in')
    const { code } = req.params;
    try {
        const subject = await subjectModel.findOne({code});
        res.status(201).json({
            msg: 'success',
            subject
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}

exports.postSubject = async (req, res, next) => {
    console.log(req.body);
    try {
        const { subject, code } =req.body; 
        const newSubject = new subjectModel({
            name: subject,
            code
        })
        await newSubject.save();
        res.status(201).json({
            msg: 'subject added'
        }); 
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
}