const path = require('path');
var textract = require('textract');
const similartity = require('string-similarity');
const _ = require('underscore');
const { TextComparison } = require('../MachineLearning/preprocessing');
const fetch = require('node-fetch');

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
  const { fileName, SNO, ques } = req.body;
  const filePath = path.join(__dirname, '..', 'images', fileName);

  textract.fromFileWithPath(filePath, async function(error, text) {
    if (error) {
      return res.status(500).json({
        msg: 'Internal server problem'
      });
    }
    const result = TextComparison(text, ques.key);
    let contentEvaluation;
    if (ques.question.split('is').length > 1) {
      const data = `https://en.wikipedia.org/api/rest_v1/page/summary/${
        ques.question.split('is')[1]
      }`;
      const response = await fetchGet(data);
      contentEvaluation = similartity.compareTwoStrings(response, text);
    }
    if (ques.question.split('about').length > 1) {
      const data = `https://en.wikipedia.org/api/rest_v1/page/summary/${
        ques.question.split('about')[1]
      }`;
      const response = await fetchGet(data);
      contentEvaluation = similartity.compareTwoStrings(response, text);
    }

    const keyMarks = result.length * 0.25;
    const contentMark = contentEvaluation;
    console.log({ keyMarks, contentMark });
    return res.status(201).json({
      msg: 'success',
      totalMarks: Math.round(keyMarks + contentMark)
    });
  });
};
