const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = 3032;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
