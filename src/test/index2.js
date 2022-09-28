import React, { Component } from 'react'


class Com2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 666
        }
    }

    render() {
        return (
            <div >
                {this.state.data}
            </div>
        )
    }
}
export default Com2