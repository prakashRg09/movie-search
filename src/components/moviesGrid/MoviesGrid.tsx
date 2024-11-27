import { Card, Skeleton } from "../card/Card";

const MoviesGrid = ({ loading, movieData, skeletonCount }: any) => {
  if (!loading && movieData.length === 0) {
    return (
      <div
        className="flex"
        style={{
          justifyContent: "center",
          minHeight: "500px",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>No data found</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cardWrapper">
        {loading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : movieData.map((movie: any, index: number) => (
              <Card movie={movie} key={index} />
            ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
