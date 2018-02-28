import React, { Component } from 'react';
import { TouchableNativeFeedback, Image, View, Text, Alert } from 'react-native';
import Styles from '../../css'

const onIcon = require('../../assests/power-off.png');
const offIcon = require('../../assests/power-on.png');

class Power extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prostheticOn: false
        }
    };
    handlePress(){
        this.setState({
            prostheticOn: !this.state.prostheticOn
        });
        if (this.state.prostheticOn) {
            this.showAlert()
        };
    };
    renderIcon() {
        let imgSource = this.state.prostheticOn ? offIcon : onIcon;
        return (
            <Image style = {Styles.buttonImage} source = {imgSource} />
        )
    };
    renderText() {
        let imgText = this.state.prostheticOn ? 'Turn Off' : 'Turn On';
        return (
            <Text style = {Styles.titleText}> {imgText} </Text>
        )
    }
    showAlert() {
        Alert.alert(
            'Power',
            'Power Prosthetic Off?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    };
    render(){
        return (
            <View style = {Styles.button}>
                <TouchableNativeFeedback
                    onPress = {this.handlePress.bind(this)}
                    title = "On/Off"
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    {this.renderIcon()}
                </TouchableNativeFeedback>
                {this.renderText()}
            </View>
        )
    };

}

export default Power;

