import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
