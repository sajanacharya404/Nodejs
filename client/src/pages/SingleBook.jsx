import React from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  return <div>SingleBook with id is {id}</div>;
};

export default SingleBook;
