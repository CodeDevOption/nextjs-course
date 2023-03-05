import User from "@/components/User";
import React from "react";

const Users = ({ data }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {data.map((user, index) => (
        <div key={index}>
          <User {...user} />
        </div>
      ))}
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
