const http = require('http');

var options = {
  hostname: 'api.openweathermap.org/',
  port: 80,
  path: '/',
  method: 'GET'
};

//console.log("req start:");
var req = http.get(options, (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
    req.end();
  });
});
req.end();

req.on('error', (e) => {
  console.error(e);
});
