import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj);

export default class Total extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.headline1}>Total: $100.00</Text> 
            </View>
        )
    }
}