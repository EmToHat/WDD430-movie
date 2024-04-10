const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  id: Number,
  title: { type: String, required: true },
  directors: [String],
  writers: [String],
  actors: [String],
  tags: [String],
  rating: { type: Number, min: 0, max: 5 },
  imageUrl: String,
  videoUrl: String,
  series: { type: String, required: false },
  releaseYear: { type: Number, required: false }
}, { timestamps: true }); // Timestamps for createdAt and updatedAt

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
