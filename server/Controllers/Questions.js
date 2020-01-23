const questionModel = require('../Models/Questions');

exports.postQuestions = (req, res, next) =>  {
    console.log(req.body);

    try {   
        const {sub, two, fifteen} = req.body;
        let nos = 1;
    
        two.forEach(async que => {
            const newQuestion = new questionModel({
                name: sub.split('-')[1], 
                queno: nos,
                question: que.que,
                key: que.keys,
                marks: 2
            });
            await newQuestion.save();
            nos+=1;
        })
    
        fifteen.forEach(async que => {
            const newQuestion = new questionModel({
                name: sub.split('-')[1], 
                queno: nos,
                question: que.que,
                key: que.keys,
                marks: 15
            });
            await newQuestion.save();
            nos+=1;
        })
        
        res.status(200).json({
            msg: 'success'
        })
        
    } catch (err) {
        res.status(500).json({
            msg: 'Internal server problem'
        })
    }
    
}