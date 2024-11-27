import ResponsivePagination from "react-responsive-pagination";

const Pagination = ({ page, totalPages, handlePagination }: any) => {
  if (totalPages <= 1) return null;

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
