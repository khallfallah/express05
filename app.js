const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour vérifier l'heure de la demande
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  // Vérifier si c'est un jour ouvrable (lundi-vendredi) entre 9h et 17h
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Passer au prochain middleware
  } else {
    res.send('L\'application web n\'est disponible que pendant les heures ouvrables (lundi-vendredi, 9h-17h).');
  }
});

// Configuration du moteur de modèle EJS
app.set('view engine', 'ejs');

// Middleware pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 3000.');
});
