import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoState: 'State',
            color: 'red'
        };
    }
    handleTitle(event) {
        console.log(event);
        this.setState({
            color: 'blue',
        })
    }
    render() {
        return <>

            <h1 style={{ color: this.state.color }} onClick={(event) => this.handleTitle(event)}>{this.props.item.title}</h1>
            <p>{this.props.item.des}</p>
            <p>{this.state.demoState}</p>
        </>
    }
}
export default Cart;