// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?minimum_rating=8&sort_by=year"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    //여기에서 data fetch를 수행한다
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className={styles.container}>
        {isLoading ? (
          <div className={styles.loader}>
            <span class="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                url={movie.url}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
