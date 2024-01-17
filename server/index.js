// server.js
const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connition sucessfull");
  })
  .catch((err) => {
    console.log(err);
  });
// Define the URL schema
const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
});

const Url = mongoose.model('Url', urlSchema);

// API endpoint to shorten a URL
app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  // Generate a short ID
  const shortId = shortid.generate();
  const shortenedUrl = `http://localhost:5000/${shortId}`;

  // Save the original and shortened URL to the database
  const url = new Url({ originalUrl, shortId });
  await url.save();

  res.status(200).json({shortenedUrl });
});

// Redirect shortened URL to original URL
app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });

  if (url) {
    return res.redirect(url.originalUrl);
  }

  return res.status(404).send('URL not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
