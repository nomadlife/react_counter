import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count : 0,
        // imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize : '20px',
        fontWeight : 'bold'
    };

    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary" 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={{fontSize:30}} className={classes}> {this.formatCount()} </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        )
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }


}

export default Counter