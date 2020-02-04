import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Test User",
      image: "https://avatars1.githubusercontent.com/u/42982560?s=460&v=4",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
