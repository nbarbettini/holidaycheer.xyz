function isHolidaySeason() {
  let now = new Date();

  let dayOfThanksgiving = 22 + (11 - new Date(now.getFullYear(), 10, 1).getDay()) % 7;

  let isAfterThanksgiving = now.getMonth() > 10 ||
      (now.getMonth() === 10 && now.getDay() > dayOfThanksgiving);
  
  return isAfterThanksgiving;
}

const phrases = [
  'Happy holidays',
  'Merry Christmas',
  'Ho ho ho',
  'Feliz Navidad',
  'Happy Hanukkah'
];

function createCheerfulResponse(name) {
  let response = {
      holidaySeason: isHolidaySeason()
  };
  
  if (!response.holidaySeason) {
      return response;
  }
  
  let randomPick = Math.floor(Math.random() * phrases.length);
  let phrase = phrases[randomPick];
  
  if (name) {
      phrase += ', ' + name;
  }
  
  phrase += '!';
  
  response.greeting = phrase;
  return response;
}

exports.handler = (event, context, callback) => {
  let name = '';
  
  if (event.httpMethod === 'POST') {
      try {
          let body = JSON.parse(event.body);
          name = body.name || '';
      }
      catch (err) {
          // Leave name blank
      }
  }
  
  let responseBody = createCheerfulResponse(name);
  
  let response = {
      statusCode: 200,
      body: JSON.stringify(responseBody)
  };
  
  callback(null, response);
};
