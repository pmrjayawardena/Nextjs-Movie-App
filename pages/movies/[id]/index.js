import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";
import Link from "next/link";
const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });

    //handle then later
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <p className="lead">
          <button className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </button>
          <button
            onClick={() => handleDeleteMovie(id)}
            className="btn btn-danger btn-lg ml-2"
            href="#"
            role="button"
          >
            Delete
          </button>
          <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
            <button className="btn btn-warning btn-lg ml-2" role="button">
              Edit
            </button>
          </Link>
        </p>
      </div>
      <p className="desc-text">{movie.longDes}</p>

      <style jsx>
        {`
          .desc-text {
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
};

//call getMoviebyId("2")

Movie.getInitialProps = async (context) => {
  const id = context.query.id;
  const movie = await getMovieById(id);

  return { movie: movie };
};

export default Movie;
