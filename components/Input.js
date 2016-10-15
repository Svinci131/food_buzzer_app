import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Button from './Button'

export default class Input extends Component {
    constructor(props) {
    	super(props)
    	this.state = {
        	username: '',
        	password: ''
    	}
    }
    render() {
        return (
        	<View>
            <Text style={styles.text}>USERNAME</Text>
            <TextInput placeholder="username"
            placeholderTextColor="#90A4AE"
            style={styles.inputBox} onChangeText={(username) => this.setState({username})} value={this.state.username}>
            </TextInput>
            <Text style={styles.text}>PASSWORD
            </Text>
            <TextInput password={true} placeholder="password"
            placeholderTextColor="#90A4AE" style={styles.inputBox} onChangeText={(password) => this.setState({password})} value={this.state.password}>
            </TextInput>
            <Button text={this.props.btnType}></Button>
            </View>
        )
    }
}
