// File for Enhancing Functional Components; Part 2, Task 1

// Import
import React, { useState } from "react";
// import { array } from 'prop-types';

// Constructing Movie List
const MoviesList = () => {
    // Initialize state with a default list of movies
    const [movies, setMovies] = useState([
        {title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont", genre: "Drama", synopsis: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion."},
        {title: "The Godfather", year: "1972", director: "Francis Ford Coppola", genre: "Drama", synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."},
        {title: "The Dark Knight", year: "2008", director: "Christopher Nolan", genre: "Action", synopsis: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."},
        {title: "The Godfather Part II", year: "1974", director: "Francis Ford Coppola", genre: "Drama", synopsis: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."},
        {title: "12 Angry Men", year: "1957", director: "Sidney Lumet", genre: "Drama", synopsis: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."},
        {title: "The Lord of the Rings: The Return of the King", year: "2003", director: "Peter Jackson", genre: "Adventure", synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."},
        {title: "Schindler's List", year: "1993", director: "Steven Spielberg", genre: "Drama", synopsis: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."},
        {title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino", genre: "Drama", synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
        {title: "The Lord of the Rings: The Fellowship of the Ring", year: "2001", director: "Peter Jackson", genre: "Adventure", synopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."},
        {title: "The Good, the Bad and the Ugly", year: "1966", director: "Sergio Leone", genre: "Spaghetti Western", synopsis: "A bounty-hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."}
    ]);

    const [showSynopsis, setShowSynopsis] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("All");
    
    // Implement required functionalities

    // Method to Show Description
    const DisplaySynopsis = (index) => {
        setShowSynopsis(showSynopsis === index ? null : index);
    };

    // Method to Remove Movie from List
    const removeMovie = (movieRemoval) => {
        const removeMovie = movies.filter(movie => movie.title !== movieRemoval);
        setMovies(removeMovie);
    };

    // Filter Movies by Genre
    const filteredMovies = selectedGenre === "All" ? movies : movies.filter(movie => movie.genre === selectedGenre);

    const genres = ["All", ...new Set(movies.map(movie => movie.genre))]

    // Return Statement for Output
    return (
        <div>
            <h2>Part 2:</h2>
            {/* Toggle view button here */}
            <div>
                <label htmlFor="genreSelect">Filter by Genre: </label>
                <select
                id="genreSelect"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                >
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
                </select>
            </div>

            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>

                        {/* Toggle button for Movie Description */}
                        <button onClick={() => DisplaySynopsis(index)}>
                            <h2>{movie.title}</h2>
                        </button>
                        {showSynopsis === index && (
                            <div>
                                <h3>Directed by {movie.director}</h3>
                                <h5>{movie.year}</h5>
                                <p>
                                    <strong>Genre:</strong> {movie.genre}
                                </p>
                                <p>
                                    <strong>Synopsis:</strong> {movie.synopsis}
                                </p>
                                
                                {/* Button for Movie Removal */}
                                <button onClick={() => removeMovie(movie.title)}>Click to Remove Movie</button>
                            </div>
                            )}
                    </li>
            ))}
            </ul>
        </div>
    );
};



// MoviesList.defaultProps = {
//     movies: 
// };

// MoviesList.propTypes = {
//     movies: array
// }

// Export 
export default MoviesList;