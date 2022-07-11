import React from "react";
import "./Num.scss";

class Num extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Number(this.props.start),
        };

        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.change = this.change.bind(this);
    }

    componentDidMount() {
        console.log('Component did mount');
        this.counterUp = setInterval(() => this.up(), 1000);
    }

    componentWillUnmount() {
        console.log('Component will unmount')
        clearInterval(this.counterUp)
    }

    up() {
        this.setState((state) => ({
            value: state.value + 1
        }));
    }

    down() {
        this.setState((state) => ({
            value: state.value - 1
        }));
    }

    change(k) {
        this.setState((state) => ({
            value: state.value + k
        }));
    }

    render() {
        console.log('render');
        return (
            <div style={{ fontWeight: "bold" }}>
                <span className="btn-change" onClick={() => this.change(-2)}>&lt;</span>
                <span>{this.state.value}</span>
                <span className="btn-change" onClick={this.up}>&gt;</span>
            </div>
        );
    }
}

export default Num;