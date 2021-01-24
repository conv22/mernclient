import React, { useState, useEffect } from 'react';
import Loader from '../Components/General/Loader';
import SingleUser from '../Components/UserComponents/SingleUser';
import useAxios from '../hooks/axios.hook';
import Pagination from '../Components/General/Pagination';

function GlobalUserPage() {
  const { request, loading, error } = useAxios();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await request(`/main/users/?page=${currentPage}`);
      setUsers(response.data.users);
      setTotalPages(response.data.total);
    };
    loadData();
  }, [request, currentPage]);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className="row">
      <SingleUser users={users} />
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default GlobalUserPage;
