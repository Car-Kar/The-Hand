import React, { Component } from 'react';
import { View } from 'react-native';
import Power from './buttons/power';
import Hold from './buttons/hold';
import Mouse from './buttons/mouse';

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