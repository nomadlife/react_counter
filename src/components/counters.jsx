import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>Count #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
