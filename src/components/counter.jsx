import React, { Component } from 'react'

class Counter extends Component {
    componentDidMount(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        // if(prevProps.counter.value !== this.props.counter.value) {
        //     //Ajax call and get new data from the server
        // }
        
    }

    render() {
        // console.log("props", this.props);
        console.log("counter - Rendered");
        
        return (
            <React.Fragment>
                <h4>{this.props.id}</h4>
                {this.props.children}
                <span style={{fontSize:30}} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <ul>
                    { this.props.counter.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }


}

export default Counter