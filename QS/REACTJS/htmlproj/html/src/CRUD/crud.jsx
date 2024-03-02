import React, { useState } from "react";
import "./crud.css";

const CRUD = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: "" });
  const [userData, setUserData] = useState([]);

  function addUser() {
    setUserData([...userData, user]);
    closeModel();
  }

  function handleDelete(index) {
    const updatedData = userData.filter((v, i) => i !== index);
    setUserData(updatedData);
  }

  function handleUpdate(index, newName) {
    const updatedData = [...userData];
    updatedData[index].name = newName;
    setUserData(updatedData);
  }

  function openModel() {
    setOpen(true);
  }

  function closeModel() {
    setOpen(false);
  }

  return (
    <div className="App">
      <section>
        <h1>CRUD</h1>
        <button onClick={openModel}>Add USER</button>
      </section>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 &&
            userData.map((user, index) => {
              return (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>
                     <button onClick={() => handleUpdate(index,  prompt("Enter new name:"))}>Update</button>
                    <button onClick={() => handleDelete(index)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>copyright kt nick</td>
          </tr>
        </tfoot>
      </table>
      {open && (
        <main>
          <form>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              value={user.name}
              placeholder="enter your name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <br />
            <br />
            <button onClick={addUser}>Submit</button>
          </form>
        </main>
      )}
    </div>
  );
};

export default CRUD;
