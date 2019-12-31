import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value : this.props.value,
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

    handleIncrement = (product) => {

        console.log(product);
        // console.log('Increment Clicked!', this);
        // this.state.count++;
        this.setState({ value: this.state.value + 1 })
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1});
    // }

    render() {
        console.log("props", this.props);
        
        // let classes = this.getBadgeClasses(); 
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""></img> */}
                <span style={{fontSize:30}} className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }


}

export default Counter