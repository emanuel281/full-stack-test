import React, { Component } from "react";
import UserItem from "./UsersListItem";
import UserForm from "./UserForm";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUser: "" };
  }

  onClick = selectedUser => {
    this.setState({ selectedUser });
  };

  render() {
    const { selectedUser } = this.state;
    const { users, groups, onSubmit, onDelete } = this.props;
    return (
      <>
        <ul>
          {users.map(({ id, name }) => (
            <UserItem
              key={id}
              id={id}
              name={name}
              selectedUser={selectedUser}
              onClick={this.onClick}
            />
          ))}
        </ul>
        <h2>Edit user</h2>
        {selectedUser ? (
          <UserForm
            withDelete
            button="Edit"
            onSubmit={onSubmit}
            onDelete={onDelete}
            key={selectedUser}
            groups={groups}
            user={users.find(({ id }) => id === selectedUser)}
          />
        ) : (
          <p>
            <i>Select a user above to enable...</i>
          </p>
        )}
      </>
    );
  }
}

export default UsersList;
