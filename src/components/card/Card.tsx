import { useState } from "react";
import "./Card.css";

export const Skeleton = () => {
  return (
    <div className="card">
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <h2 className="card-title skeleton"></h2>
        <p className="card-intro skeleton"></p>
      </div>
    </div>
  );
};

export const Card = ({ movie }: any) => {
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  );
  const descriptionLimit = 90;
  const dummyImage = "https://via.placeholder.com/500x750?text=No+Image";

  const handleImageError = () => {
    setImageSrc(dummyImage);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={imageSrc}
          alt={movie.title || "Movie Poster"}
          onError={handleImageError} // Fallback logic
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-intro">
          {isExpanded
            ? movie.overview
            : truncateText(movie.overview, descriptionLimit)}
          {movie.overview.length > descriptionLimit && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ cursor: "pointer", color: "blue" }}
            >
              {isExpanded ? " Show Less" : " Show More"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
