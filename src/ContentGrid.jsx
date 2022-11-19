import './ContentGrid.css';
import { ContentCard } from "./ContentCard";

import movies from "./movies.json";

export const ContentGrid = () => {
  console.log(movies);
  return (
    <ul className='contentGrid'>
      {movies.map((movie) => (
        <ContentCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
