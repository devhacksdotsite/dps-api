const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// set up middleware

// set up routes
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});