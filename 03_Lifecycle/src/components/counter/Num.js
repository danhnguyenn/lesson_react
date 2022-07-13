import React from "react";

class Num extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onIncrease, onDescrease } = this.props;
        return <>
            <h3 style={{ fontWeight: 'bold' }}>Value: {this.props.value}</h3>
            <button class="btn btn-primary" onClick={onIncrease}>Increase</button>
            <button class="btn btn-secondary" onClick={onDescrease}>Decrease</button>
        </>
    }
}
export default Num