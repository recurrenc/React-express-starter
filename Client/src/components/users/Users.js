import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((users) => {
        console.log(users);
        setUser(users);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      {user.map((e, i) => {
        return (
          <h3 key={i}>
            Name: {e.name} || Email: {e.email}
          </h3>
        );
      })}
    </>
  );
};

export default Users;
