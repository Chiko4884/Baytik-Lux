
const express = require('express');
const request = require('request');

const app = express();
const cors = require('cors');

app.use(cors());

// Определите маршрут на вашем прокси-сервере
app.get('/nbkr', (req, res) => {
  // Выполните запрос на сервер nbkr.kg и передайте ответ обратно на клиент
  request('https://www.nbkr.kg/XML/daily.xml', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(response.statusCode).send(error);
    }
  });
});

// Слушайте на определенном порту
const port = 3002; // Можете выбрать любой другой свободный порт
app.listen(port, () => {
  console.log(`Прокси-сервер работает на порту ${port}`);
});