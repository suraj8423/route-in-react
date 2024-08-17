import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>{`Details about users ${params.userId}`}</div>;
};

export default UserDetails;
