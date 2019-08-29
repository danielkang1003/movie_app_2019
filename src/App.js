import React from "react";
import axios from "axios";
import Movie from "./Movies";

class App extends React.Component {
     state = {
          isLoading: true,
          movies: []
     };

     getMovies = async () => {
          const {
               data: {
                    data: { movies }
               }
          } = await axios.get(
               "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
          );
          // console.log(movies);
          this.setState({ movies, isLoading: false });
     };

     componentDidMount() {
          // //method that called immediately after render is called
          // setTimeout(() =>{
          //   //delay function
          //   this.setState({isLoading : false});
          // }, 6000);
          // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
          this.getMovies();
     }

     render() {
          const { isLoading, movies } = this.state;
          console.log(movies);
          return (
               <section class="container">
                    {isLoading ? (
                         <div class="loader">
                              <span class="loader__text">Loading...</span>
                         </div>
                    ) : (
                         <div class="movies">
                              {movies.map(movie => (
                                   <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        summary={movie.summary}
                                        genres={movie.genres}
                                        year={movie.year}
                                        rating={movie.rating}
                                        runtime={movie.runtime}
                                        poster={movie.medium_cover_image}
                                        url={movie.torrents[0].url}
                                   />
                              ))}
                         </div>
                    )}
               </section>
          );
     }
}

export default App;
