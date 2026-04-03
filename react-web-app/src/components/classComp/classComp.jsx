import React from 'react';
class Sample extends React.Component {
    constructor(props) {
        super(props)    
        this.state = {
            count: 0,
            name: 'RAj'
        }
    }   
    
    componentDidMount() { // indirectly useEffect with empty dependency array
        console.log("component mounted");
    }   
    componentDidUpdate() { // indirectly useEffect without dependency array
        console.log("component updated");
    }
    componentWillUnmount() { // indirectly useEffect with return statement
        console.log("component will unmount");
    }
    incrementCount() {
        this.setState({count: this.state.count + 1})
        this.setState({name: 'Rajesh'})
    }   
    render() {
        return (
            <div>       
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>Increment Count</button>
                
            </div>
        )
    }   
}

export default Sample