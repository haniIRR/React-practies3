import "./App.css";
import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uNAme, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uNAme, age: uAge }];
    });
  };
  return (
    <div className="App">
      <AddUsers onAddUsers={addUserHandler} />
      <UserList items={usersList} />
    </div>
  );
}

export default App;
