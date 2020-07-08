import React, { Component, Fragment } from "react";
import Link from "next/link";
class MovieList extends Component {
  render() {
    const shorten = (text, maxLength) => {
      if (text && text.length > maxLength) {
        return text.substr(0, maxLength) + "...";
      }
      return text;
    };
    const { movies } = this.props;
    return (
      <Fragment>
        {movies.map((movie) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
              <div className="card h-100">
                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                  <a>
                    <img
                      className="card-img-top"
                      src={movie.image}
                      alt={movie.name}
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                      <a>{movie.name}</a>
                    </Link>
                  </h4>
                  <div className="movie-genre">{movie.genre}</div>
                  <p className="card-text">{shorten(movie.description, 100)}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{movie.rating}</small>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default MovieList;
