import React from "react";

const Comment = ({ id, email, name }) => {
  return (
    <>
      <p>id : {id}</p>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </>
  );
};

export default Comment;
