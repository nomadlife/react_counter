import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

export class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constuctor');
    // this.state = this.props.something;
  }
  
  componentDidMount() { 
    // Ajax Call
    // this.setState({ movie })
    console.log('App - Mounted');
  }

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
  };

  render () {
    console.log("App - Rendered");
    
    return(
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter( c=> c.value > 0 ).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );

  }
}

export default App;
