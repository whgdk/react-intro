import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossedOut: false,
    };
  }

  toggleStatus = () => {
    const curr = this.state.crossedOut;
    this.setState({
      crossedOut: !curr,
    });
  };

  render() {
    const item = this.state.crossedOut ? (
      <p onClick={this.toggleStatus} style={{ textDecoration: "line-through" }}>
        {this.props.value}
      </p>
    ) : (
      <p onClick={this.toggleStatus}>{this.props.value}</p>
    );
    return item;
  }
}

export default class BucketList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newItem: "",
    };
  }

  inputHandler = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  submitItem = (e) => {
    const { items, newItem } = this.state;
    const newList = [...items, newItem];

    this.setState({
      items: newList,
      newItem: "",
    });
  };

  render() {
    const items = this.state.items;
    const mappedItems = items.map((item, index) => {
      return <ListItem value={item} key={index} />;
    });

    return (
      <div>
        <div>
          <input value={this.state.newItem} onChange={this.inputHandler} />
          <button onClick={this.submitItem}>add</button>
        </div>
        <div>{mappedItems}</div>
      </div>
    );
  }
}
