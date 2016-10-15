import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class TextArea extends Component {
    render() {
        return (
            <View>
                <TextInput
                multiline = {true}
                style={styles.textArea}
                placeholder="write your message here..."/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textArea: {
        height: 200,
        width:300,
        borderWidth: 0.5,
        borderColor: "#a9a9a9",
        backgroundColor: 'floralwhite',
    }
});

export default TextArea;
