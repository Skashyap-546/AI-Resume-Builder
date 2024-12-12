const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
