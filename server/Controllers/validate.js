const path = require('path');
var textract = require('textract');
const similartity = require('string-similarity');
const _ = require('underscore');
const { TextComparison } = require('../MachineLearning/preprocessing');
const fetch = require('node-fetch');
const StudentDB = require('../Models/Student');

const fetchGet = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.extract;
  } catch (err) {
    console.log(err.message);
  }
};

exports.postValidate = async (req, res, next) => {
  try {
    const { fileName, SNO, ques, id } = req.body;
    const filePath = path.join(__dirname, '..', 'images', fileName);

    textract.fromFileWithPath(filePath, async function (error, text) {
      if (error) {
        return res.status(500).json({
          msg: 'Internal problem'
        });
      }
      const result = TextComparison(text, ques.key);
      let contentEvaluation, keyMarks, contentMark;
      if (ques.question.split('is').length > 1) {
        let removed = ques.question.split('is')[1]

        const data = `https://en.wikipedia.org/api/rest_v1/page/summary/${removed.split('?')[0]}`;
        const response = await fetchGet(data);
        contentEvaluation = similartity.compareTwoStrings(response, text);
      }
      if (ques.question.split('about').length > 1) {
        let removed = ques.question.split('is')[1]
        const data = `https://en.wikipedia.org/api/rest_v1/page/summary/${
          removed.split('?')[0]
          }`;
        const response = await fetchGet(data);
        contentEvaluation = similartity.compareTwoStrings(response, text);
      }

      if (ques.marks === 2) {
        keyMarks = result.length * 0.25;
        contentMark = contentEvaluation;
      } else if (ques.marks === 15) {
        keyMarks = result.length;
        contentMark = contentEvaluation * 8;
      }

      console.log({ keyMarks, contentMark })

      const totalMarks = Math.round(keyMarks + contentMark);
      let keyValue = ques.name;
      const existData = await StudentDB.findOne({ id });

      await StudentDB.findOneAndUpdate(
        { id },
        {
          marks: {
            ...existData.marks,
            [keyValue]: existData.marks[keyValue]
              ? existData.marks[keyValue] + totalMarks
              : totalMarks
          }
        }
      );
      console.log({ existData });
      return res.status(201).json({
        msg: 'success',
        totalMarks
      });
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};
