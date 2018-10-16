import React, { Component } from "react";
import { hot } from "react-hot-loader";
import uuid from "uuid/v1";
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import { users, groups } from "./_mock_data";

import "./stylesheet.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users,
      groups
    };
  }

  addUser = newUser => {
    newUser.groups = normalizeGroups(newUser.groups);
    newUser.id = uuid();

    this.setState(state => ({ users: [...state.users, newUser] }));
  };

  editUser = editedUser => {
    editedUser.groups = normalizeGroups(editedUser.groups);

    this.setState(state => {
      const updatedUsers = [...state.users];
      updatedUsers.splice(
        state.users.findIndex(({ id }) => id === editedUser.id),
        1,
        editedUser
      );
      return { users: updatedUsers };
    });
  };

  deleteUser = deletedUser => {
    this.setState(state => ({
      users: state.users.filter(({ id }) => id !== deletedUser.id)
    }));
  };

  render() {
    return (
      <main className="app">
        <h2>GC User Portal</h2>
        <article className="main-container">
          <section className="left">
            <h3>Create new user</h3>
            <UserForm
              button="Add"
              groups={this.state.groups}
              onSubmit={this.addUser}
            />
          </section>
          <section>
            <h3>Users list</h3>
            <UsersList
              users={this.state.users}
              groups={this.state.groups}
              onSubmit={this.editUser}
              onDelete={this.deleteUser}
            />
          </section>
        </article>
        <hr />
      </main>
    );
  }
}

const normalizeGroups = groups => groups.map(group => group.value || group); // Normalizing array of objects to array of values

export default hot(module)(App);
