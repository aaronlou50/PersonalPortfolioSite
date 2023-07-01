const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routes');

// Set the view engine to use EJS
app.set('view engine', 'ejs');
// parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Use the defined routes
app.use('/', indexRouter);

// app.get('/', (req, res) => {
//   const currentYear = new Date().getFullYear();
//   res.render('index', { currentYear });
// });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
