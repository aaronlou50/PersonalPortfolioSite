const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects page route
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Services page route
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Contact page POST route
router.post('/contact', (req, res) => {
  const { firstName, lastName, contactNumber, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'aaronlou50@gmail.com', 
      pass: 'password' // using a placeholder password
    }
  });

  const mailOptions = {
    from: email, // sender address
    to: 'aaronlou50@gmail.com', // list of receivers
    subject: 'New Contact Form Submission', // Subject line
    text: `Name: ${firstName} ${lastName}\nPhone: ${contactNumber}\nEmail: ${email}\nMessage: ${message}` // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      console.log(err);
      res.redirect('/contact?failure'); // Redirect to contact page on failure
    } else {
      console.log(info);
      res.redirect('/contact?success'); // Redirect to contact page on success
    }
  });
});

module.exports = router;


