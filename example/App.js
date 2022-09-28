import React, { Component } from 'react'
import {Com} from '../dist/esm'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 666 
        }
    }   
    render() {
        return (
            <div className="App">
            this.state.data:{this.state.data}
                <Com></Com>
            </div>
        )
    }
}

export default App