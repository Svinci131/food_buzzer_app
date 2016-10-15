import React, { Component, PropTypes } from 'react';
import {Text, StyleSheet, View } from 'react-native';
import {stylesObj} from '../styles';


const styles = StyleSheet.create(stylesObj);

export default class Success extends Component {
    render() {
        return (
            <View style={styles.success}>
                <Text>Congratulations,</Text>
                <Text>Your Order Has Been</Text>
                <Text>Successfully Submitted!</Text>
            </View>
        )
    }
}