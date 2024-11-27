import ResponsivePagination from "react-responsive-pagination";

const Pagination = ({ loading, page, totalPages, handlePagination }: any) => {
  if (totalPages <= 1 && loading) return null;

  return (
    <ResponsivePagination
      current={page}
      total={totalPages}
      maxWidth={600}
      onPageChange={handlePagination}
    />
  );
};

export default Pagination;
