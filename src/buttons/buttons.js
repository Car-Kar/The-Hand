import React, { Component } from 'react';
import { View } from 'react-native';
import Power from './power';
import Hold from './hold';
import Mouse from './mouse';

class Buttons extends Component {
    render() {
        return (
            <View>
                <Power />
                <Hold />
                <Mouse />
            </View>
        )
    };
}

export default Buttons;