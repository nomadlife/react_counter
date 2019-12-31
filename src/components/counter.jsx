import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count : 0,
        tags:[]
    };

    styles = {
        fontSize : '20px',
        fontWeight : 'bold'
    };

    // constructor(){
    //     super();
    //     console.log("Increment Clicked", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log('Increment Clicked!', this);
    }

    render() {
        // let classes = this.getBadgeClasses(); 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={{fontSize:30}} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }


}

export default Counter