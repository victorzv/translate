const request = require('request');

function getAuthorizateKey(){

  var headersAuth = {
    'Authorization':'Basic ZmM2NWFhZDQtYTFkZi00NTI5LTk2ZjAtNjliMDE5ZjAxZjA5OmZmNWI2ZDVkODZhOTRlZTZiNGRlNGRlYWE1NmU5Njgw'
  }

  var options = {
    url: 'https://developers.lingvolive.com/api/v1.1/authenticate',
    method: 'POST',
    headers: headersAuth
  }

  return new Promise(function(resolve, error){
    request(options, function(error, response, body){
      resolve(body);
    });
  });

}

function getWordTranslate(options){
  return new Promise(function(resolve, error){
    request(options, function(error, response, body){
      // do on error
      if (!error){
        resolve(body);
      }
    });
  });
}

async function translate(word){

  let key = await getAuthorizateKey();

  let headers = {
    'Authorization':'Bearer ' + key
  }

  let options = {
    url: 'https://developers.lingvolive.com/api/v1/Minicard?text=' + word + '&srcLang=1033&dstLang=1049',
    method: 'GET',
    headers: headers
  }

  let result = await getWordTranslate(options);

  console.log(result);

}

translate('price');

/*

  return new Promise(function(resolve, reject){
    request(options2, function(error, response, body){
        if (response.statusCode == '401'){
          resolve('newKey')
        }
        else{
          resolve(body);
        }
    });
  });
}

translate('hello').then(function(result){
  if (result == 'newKey'){
    getAuthorizateKey().then(function(res){
      console.log(res);// save to file and call new translate
    });
  }
);
*/
