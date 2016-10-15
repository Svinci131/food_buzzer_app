import React, { Component } from 'react';
import { View } from 'react-native';
import TextArea from './TextArea';
import MiniProfile from './MiniProfile';
import Button from './Button';

export default class ProfileDetail extends Component {
	constructor(props) {
		super(props)
	}

	goToMessage(){
		this.props.navigator.push({
			ident: "Message"
		})
	}
	render() {
		return (
					<View>
			<MiniProfile></MiniProfile>
			<View>
				<TextArea>{this.props.story}</TextArea>
			</View>
			<Button text="Message Me" press={this.goToMessage.bind(this)}></Button>
			</View>
		)
	}
}
