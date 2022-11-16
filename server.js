const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    console.log(result)
    response.send(result);
  });
});


app.use(express.static(path.resolve(__dirname, './build')));


app.listen(port, () => console.log(`Listening on port ${port}`));