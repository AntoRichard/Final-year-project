const path = require('path');
var textract = require('textract');
const _ = require('underscore');

exports.postValidate = async (req, res, next) => {
    const { fileName } = req.body;
    const filePath = path.join(__dirname, '..', 'images', fileName);
    textract.fromFileWithPath(filePath, function( error, text ) {
        if(error) {
            res.status(500).json({
                msg: 'Internal server problem'
            })
        }
        console.log(response);
        res.status(201).json({
            msg: 'success'
        })
    })
}
