import { useEffect, useState } from "react";
import List from "./List/List";

const Lists = () => {
  // name username email
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortControlle = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: abortControlle.signal,
    })
      .then((obj) => {
        return obj.json();
      })
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          abortControlle.abort();
        }
      });
  }, []);

  return (
    <div className="Lists">
      {users.map((user) => (
        <List key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Lists;
