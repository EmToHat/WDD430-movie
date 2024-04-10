// Movies Router
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

// POST a new movie
router.post('/', moviesController.createMovie);

// GET all Movies
router.get('/', moviesController.getAllMovies);

// GET a single movie by ID
router.get('/:id', moviesController.getMovieById);

// PUT update a movie
router.put('/:id', moviesController.updateMovie);

// DELETE a movie
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
