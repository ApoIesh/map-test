import React, { Component } from 'react';
import Map from './map';
import Test from './component/Test'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Map />
        );
    }
}

export default App;
