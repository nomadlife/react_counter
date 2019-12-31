import React, { Component } from "react";
import Counter from "./counter";

export class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    
  };

  handleDelete = counterId => {
    // console.log("Delete Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.filter(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  }

  render() {
    return (
      <div>
          <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
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
