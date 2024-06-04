import "./App.css";
import { movies } from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="movie-list-header">Movie List Section</h1>
        <div className="MovieSection">
          {movies.map((item, index) => {
            return (
              <div className="Movie" key={index}>
                <div>
                  <img src={item.image}></img>
                </div>
                <div className="Info">
                  <div>Title: {item.title}</div>
                  <div>Year: {item.year}</div>
                  <div>Runtime: {item.runtime}</div>
                  <div className="Type">
                    Genres:
                    {item.genres.map((genre, i) => {
                      return (
                        <div key={i} className="TypeInfo">
                          {genre}
                        </div>
                      );
                    })}
                  </div>
                  <div>IMDB Ratings: {item.imdbRating}</div>
                  <div>IMDB Votes: {item.imdbVotes}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
