const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AQnCkgQa5OI9gdWl7PWYGYsTQyOFM1XInDC1qG7IviiXdf1Be2t3pjJzgm5KcmMwNr_GfQ3eqoCMdwWv",
  client_secret: "EItEtS8e7Ol3KjRJGh_DN8zZrVkaHpIsf26tadZrhhKCpBh92EcsfgazPZHol5e6eONJRdFF8HgUkwZp",
});

module.exports = paypal;
