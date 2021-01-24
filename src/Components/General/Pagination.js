import React from 'react';
import uuid from 'react-uuid';

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const pages = new Array(totalPages).fill(null);
  return (
    <ul className="pagination center-align">
      {pages.map((page, i) => (
        <li className="waves-effect" key={uuid()}>
          <button
            type="button"
            onClick={() => setCurrentPage(i)}
            className={currentPage === i ? 'active' : null}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
