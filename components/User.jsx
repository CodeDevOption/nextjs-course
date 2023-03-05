import React from "react";

const User = ({ ...user }) => {
  return (
    <>
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
    </>
  );
};

export default User;
