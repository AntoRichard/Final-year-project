const nlp = require('natural');
const _ = require('underscore');

exports.TextComparison = (text, keys) => {
  const tokenizer = new nlp.OrthographyTokenizer({ language: 'en' });

  const tokenizedText = tokenizer.tokenize(text);

  const stemedData = tokenizedText.map(word => nlp.PorterStemmer.stem(word));

  const common = _.intersection(stemedData, keys);
  console.log(text, keys);
  console.log({ common });
  return common;
};
