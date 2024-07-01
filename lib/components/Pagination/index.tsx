import Pagination from '@mui/material/Pagination';
import React from 'react';

interface Props {
  items: any[]; // Array of items to be paginated
  itemsPerPage: number; // Number of items to display per page
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const PaginatedList: React.FC<Props> = ({ items, itemsPerPage, setCurrentPage, currentPage }) => {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-2">
      <Pagination count={Math.ceil(items.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} shape="rounded" color="primary" />
    </div>
  );
};

export default PaginatedList;
