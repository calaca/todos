const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// connect to database
connectDB();

// enable cors
app.use(cors());

// enable body parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// define routes
app.use('/api/todos', require('./routes/todos'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
