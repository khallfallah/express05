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
  