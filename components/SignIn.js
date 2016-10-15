import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Button from './Button'

export default class SignIn extends Component {
    constructor(props) {
    	super(props)
    }
    render() {
        return (
            <View>
                <Button text="Sign In" press={this.signIn.bind(this, "SignIn")}></Button>
                <Button text="Sign Up" press={this.signIn.bind(this, "SignUp")}></Button>
            </View>
        )
    }

    signIn(e){
        console.log(e)
        this.props.navigator.push({
        ident: e
        })
    }
}
