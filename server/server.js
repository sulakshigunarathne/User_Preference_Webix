const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/webix-app', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Define User Preferences Schema
const preferenceSchema = new mongoose.Schema({
  userId: String,
  settings: Map,
  lastModified: { type: Date, default: Date.now }
});
const Preference = mongoose.model('Preference', preferenceSchema);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve Webix files

// API Endpoints
app.get('/api/preferences', async (req, res) => {
  const prefs = await Preference.find();
  res.send(prefs.map(p => ({ ...p._doc, id: p._id }))); // Convert _id to id
});

app.post('/api/preferences', async (req, res) => {
  const newPref = new Preference(req.body);
  await newPref.save();
  res.status(201).send({ ...newPref._doc, id: newPref._id });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
