import "./ContentCard.css";

export const ContentCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className="contentCard">
      <img
        width={230}
        height={345}
        className="contentImage"
        src={imageURL}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  );
};
