import React, { Component } from 'react';
import { View, Image, Text, TouchableNativeFeedback} from 'react-native';
import Styles from '../../../css'

const holdStart = require('../../../assests/hold.png');
const holdStop = require('../../../assests/hold-green.png');

class Hold extends Component{
    constructor(props) {
        super(props);
        this.state = {
            holdOn: false
        }
    };

    renderIcon(){
        let imgSource = this.state.holdOn ? holdStop : holdStart;
        return (
            <Image source = {imgSource} style = {Styles.buttonImage} />
        )
    };

    renderText() {
        let imgText = this.state.holdOn ? 'Stop holding?' : 'Start holding?';
        return (
            <Text style = {Styles.titleText}>{imgText}</Text>
        )
    };

    handlePress() {
        this.setState({
            holdOn: !this.state.holdOn
        });
    };
    render() {
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

export default Hold;