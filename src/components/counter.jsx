import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // Dessa forma, ou arrow functions
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement(){
  //   console.log('Increment Clicked', this);
  // }
  handleIncrement = () => {
    // Updating this way, React don't updates the view
    //this.state.count++; // Don't updating the view
    // The rigth way is:
    this.setState({ count:  this.state.count + 1 });
  }

  styles = {
    fontSize: 50,
    fontWeigth: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2"> */}
          {this.formatCount()}{" "}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
