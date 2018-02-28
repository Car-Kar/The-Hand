import React, { Component } from 'react';
import { TouchableNativeFeedback, Image, View, Text } from 'react-native';
import Styles from '../../css'

const mouseStart = require('../../assests/mouse.png');
const mouseStop = require('../../assests/mouse-green.png');

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOn: false
        }
    };

    handlePress() {
        console.log('Move mouse')
        this.setState({
            mouseOn: !this.state.mouseOn
        });
    };

    renderIcon(){
        let imgSource = this.state.mouseOn ? mouseStop : mouseStart;
        
        return (
            <Image source = {imgSource} style = {Styles.buttonImage} />
        )
    };
    renderText() {
        let imgText = this.state.mouseOn ? 'Stop Mouse' : 'Start Mouse';
        return (
            <Text style = {Styles.titleText}>{imgText}</Text>
        )
    };

    render(){
        return (
            <View style = {Styles.button}>
                <TouchableNativeFeedback
                    onPress = {this.handlePress.bind(this)}
                    title = "mouse"
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    {this.renderIcon()}
                </TouchableNativeFeedback>
                {this.renderText()}
            </View>
        )
    };
}

export default Mouse