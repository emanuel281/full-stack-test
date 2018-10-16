import React, { Component } from "react";
import Select from "react-select";
import uuid from "uuid/v1";

const toValuesArray = (values, groups) => {
  return values.reduce((arr, v) => {
    const value = groups.find(o => o.value === v);
    if (value) return [...arr, value];
    return arr;
  }, []);
};

class UserForm extends Component {
  constructor(props) {
    super(props);
    if (props.user) {
      this.state = {
        inputName: props.user.name,
        selectedGroups: toValuesArray(props.user.groups, this.props.groups)
      };
    } else {
      this.state = {
        inputName: "",
        selectedGroups: []
      };
    }
  }

  changeName = e => {
    this.setState({ inputName: e.target.value });
  };

  changeGroup = selectedGroups => {
    this.setState({ selectedGroups });
  };

  _onSubmit = e => {
    e.preventDefault();

    const { user } = this.props;
    const { inputName, selectedGroups } = this.state;

    this.props.onSubmit({
      id: user ? user.id : uuid(),
      name: inputName,
      groups: selectedGroups
    });
  };

  _onDelete = e => {
    e.preventDefault();

    this.props.onDelete(this.props.user);
  };

  createValuesArray = (values, groups) => {
    const vArray = values.reduce((arr, v) => {
      const value = groups.find(o => o.value === v);
      if (value) return [...arr, value];
      return arr;
    }, []);
    return vArray;
  };

  render() {
    const { onDelete } = this.props;
    const { inputName, selectedGroups } = this.state;
    return (
      <form className="create-new-user">
        <div className="name-input">
          <label>Name: </label>
          <input
            name="name"
            value={inputName}
            type="text"
            onChange={this.changeName}
          />
        </div>
        <div className="group-selector">
          <label>Group: </label>
          <Select
            isMulti
            placeholder="None"
            name="group"
            value={selectedGroups}
            onChange={e => this.changeGroup(e)}
            options={this.props.groups}
          />
        </div>
        <div>
          <button type="button" onClick={this._onSubmit}>
            {this.props.button}
          </button>
          {onDelete && (
            <button
              className="delete-button"
              type="button"
              onClick={this._onDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default UserForm;
