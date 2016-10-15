import React, { Component, PropTypes } from 'react';
import {Text, StyleSheet, View } from 'react-native';
import {stylesObj} from '../styles';


const styles = StyleSheet.create(stylesObj);

export default class Success extends Component {
    render() {
        return (
            <View style={styles.success}>
                <Text style={{color: 'white'}}>Congratulations,</Text>
                <Text style={{color: 'white'}}>Your Order Has Been</Text>
                <Text style={{color: 'white'}}>Successfully Submitted!</Text>
            </View>
        )
    }
}