// const nlp = require('natural');
// const _ = require('underscore');

// export const TextComparison = (text, keys) => {
//   const tokenizer = new nlp.OrthographyTokenizer({ language: 'en' });

//   const tokenizedText = tokenizer.tokenize(text);

//   const stemedData = tokenizedText.map(word => nlp.PorterStemmer.stem(word));

//   const common = _.intersection(stemedData, keys);
//   console.log(common);
//   return common;
// };

// const text = `Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web-based internet applications (web apps), electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, "web development" usually refers to the main non-design aspects of building websites: writing markup and coding.[2] Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills. For larger organizations and businesses, web development teams can consist of hundreds of people (web developers) and follow standard methods like Agile methodologies while developing websites. Smaller organizations may only require a single permanent or contracting developer, or secondary assignment to related job positions such as a graphic designer or information systems technician. Web development may be a collaborative effort between departments rather than the domain of a designated department. There are three kinds of web developer specialization: front-end developer, back-end developer, and full-stack developer. Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers.`;
// const keys = ['refer', 'develop', 'web'];

// TextComparison(text, keys);

fetchGet(data);
