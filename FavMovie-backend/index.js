const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const { MONGODB_URI } = require('./utils/config');
const logger = require('./utils/logger')

const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);



mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  logger.info('Database connected');
})
.catch((err) => {
  logger.error('Database connection error:', err);
});

logger.info("Database connected")

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
