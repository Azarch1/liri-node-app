require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var userInput = process.argv[2] 

if (process.argv[2]==="spotify-this-song" || "concert-this" || "movie-this" || "do-what-it-says") {

} else {
    process.argv[2]===undefined
}