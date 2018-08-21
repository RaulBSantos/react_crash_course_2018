import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
  handleIncrement = (param) => {
    console.log(param);
    // Updating this way, React don't updates the view
    //this.state.count++; // Don't updating the view
    // The rigth way is:
    this.setState({ value: this.state.value + JSON.parse(param.step) });
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={() => this.handleIncrement({ step: 1 })} className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
