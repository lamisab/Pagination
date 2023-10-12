import { useState } from "react";
import Table from "./components/table";
import { getUsers, getLength } from "./core/api/users";
import Pagination from "./components/pagination";

function App() {
  const [page, setPage] = useState(1);
  const limit = 5;
  let totalPage = Math.ceil(getLength() / limit);

  return (
    <>
      <Table users={getUsers(page, limit)} />
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        onPageChange={setPage}
      />
    </>
  );
}

export default App;
