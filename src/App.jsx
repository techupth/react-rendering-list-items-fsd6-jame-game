import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <h4 className="heading">Movie List Section</h4>
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => {
          return (
            <div className="movie-card" key={index}>
              <div className="movie-image">
                <img src={item.image} alt="moviePreview" />
              </div>
              <div className="movie-detail">
                <div>Title:{item.title}</div>
                <div>Year: {item.year}</div>
                <div>Runtime: {item.runtime}</div>
                <div className="genres">
                  <p>Genres:</p>
                  <div className="movie-genres">
                    {item.genres.map((type, index) => {
                      return (
                        <div key={index} className="movie-genres-list">
                          {type}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>IMDB Rating: {item.imdbRating}</div>
                <div>IMDB Votes: {item.imdbVotes}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
