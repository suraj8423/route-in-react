import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <Link to="1"> User 1</Link>
      <Link to="2"> User 2</Link>
      <Link to="3"> User 3</Link>
      <Link to="admin">Admin</Link>
      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button> onClick={() => setSearchParams({})}Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <h2> Showing Active Users</h2>
      ) : (
        <h2> Showing All Users</h2>
      )}
    </div>
  );
};

export default Users;
