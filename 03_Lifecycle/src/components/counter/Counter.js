import React from "react";
import Num from "./Num";
import './Counter.scss';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDescrease = this.handleDescrease.bind(this);
    }
    handleIncrease() {
        this.setState({ value: this.state.value + 1 })
    }
    handleDescrease() {
        this.setState({ value: this.state.value - 1 })
    }

    render() {
        const { value } = this.state;
        return (
            <div className="counter">
                <Num value={value} onIncrease={this.handleIncrease} onDescrease={this.handleDescrease} />
            </div>
        );
    }
}
export default Counter
