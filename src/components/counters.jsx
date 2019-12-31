import React, { Component } from 'react';
import Counter from "./counter";

export class Counters extends Component {
    state = {
        counters : [
            { id:1, value: 4},
            { id:2, value: 1},
            { id:3, value: 2},
            { id:4, value: 3}
        ]
        
    };
    render() {
        
        return (
            <div>
                { this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected id={counter.id}>
                    <h4>Count #{counter.id}</h4>
                </Counter> )}
            </div>
        )
    }
}

export default Counters

