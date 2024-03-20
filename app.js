const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.end('This is the task manager');
});
app.use('/api/v1/tasks', tasks);

const port = 5000;
app.listen(port, console.log(`App is listening on the port ${port}...`));
