import React, { Component } from "react";

class UserItem extends Component {
  __onClick = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    const { selectedUser, name, id } = this.props;
    return (
      <li
        className={selectedUser === id ? "selected" : ""}
        onClick={this.__onClick}
      >
        {name}
      </li>
    );
  }
}

export default UserItem;
