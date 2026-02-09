const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'fullcycle'
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const name = req.query.name || 'Full Cycle Usuario';
  
  // Insert name into database
  const query = `INSERT INTO people(name) VALUES ('${name}')`;
  
  connection.query(query, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`${name} Inserido com sucesso!`);
    }
  });
  
  // Fetch all names from database
  connection.query('SELECT name FROM people', (error, results) => {
    if (error) {
      console.log(error);
      res.send('<h1>Full Cycle !</h1><p>Erro ao buscar nomes</p>');
    } else {
      let namesList = '<h1>Full Cycle!</h1>';
      namesList += '<h2>Nomes gravados:</h2>';
      namesList += '<ul>';
      
      results.forEach(row => {
        namesList += `<li>${row.name}</li>`;
      });
      
      namesList += '</ul>';
      res.send(namesList);
    }
  });
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
