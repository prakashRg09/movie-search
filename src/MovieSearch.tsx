import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { tmdbService } from "./service/tmdb";
import "react-responsive-pagination/themes/classic.css";
import Pagination from "./components/pagination/Pagination";
import MoviesGrid from "./components/moviesGrid/MoviesGrid";

function MovieSearch() {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  const getMovieData = (currentPage: number, query: string) => {
    setLoading(true);
    tmdbService
      .getMovieList(`${currentPage}`, query)
      .then((res) => {
        setLoading(false);
        setTotalPages(res.data.total_pages);
        setMovieData(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    getMovieData(page, query);
  }, [page, query]);

  const handlePagination = (page: number) => {
    setPage(page);
  };

  const onSearch = (query: string) => {
    setQuery(query);
    setPage(1);
  };

  return (
    <section className="wrapper">
      <Header onSearch={onSearch} />
      <Pagination
        loading={loading}
        page={page}
        totalPages={totalPages}
        handlePagination={handlePagination}
      />
      <MoviesGrid loading={loading} movieData={movieData} skeletonCount={10} />
    </section>
  );
}

export default MovieSearch;
