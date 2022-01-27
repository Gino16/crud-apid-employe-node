const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(express.json());
// Routes
app.use(require('./routes/employes'));

app.listen(app.get('port'), () => {
  console.log(`Server is running on port 3000`);
});