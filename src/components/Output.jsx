import React, { Component } from 'react'

 class Output extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p id="display">{result}</p>
            </div>
    )
        ;
    }
}
export default Output ;