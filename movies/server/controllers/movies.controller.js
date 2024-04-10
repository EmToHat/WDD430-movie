// Movies Controller
const Movie = require('../models/movies-model');

// GET all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
        return;
    }
};

// GET a single movie by ID
const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findOne({ id: req.params.id });
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
        return;
    }
};

// POST a new movie
const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie); // Response is sent here
    } catch (error) {
        // If an error occurs, a response is sent here instead
        res.status(400).send(error);
        return; // Ensure no further execution after response
    }
};


const updateMovie = async (req, res) => {
    const updateData = req.body; // The update data from the request body
    const customId = req.params.id; // Extract the custom ID from the request parameters

    try {
        // Attempt to find the document by the custom ID and update it with the new data
        const movie = await Movie.findOneAndUpdate({ id: customId }, updateData, { new: true, runValidators: true });
        
        // If no document was found with the given custom ID, return a 404 response
        if (!movie) {
            return res.status(404).send({ message: "Movie not found with given ID." });
        }
        
        // If the document was found and updated, send back the updated document
        res.send(movie);
    } catch (error) {
        // If an error occurs, send back a 400 response with the error
        res.status(400).send(error);
    }
};

// DELETE a movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
        return;
    }
};

// Export the controller functions
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};