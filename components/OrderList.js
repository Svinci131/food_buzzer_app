import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj);

export default class OrderList extends Component {
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          data: dataSource.cloneWithRows(this.props.items)
        }
    }
    
  //   getTotalPerItem(data) {
		// data.forEach(i => {
		// 	let total = data[i].price * data[i].quantity;
		// 	data[i].push({'total': total});
		// });	
  //   }
  //  getTotalPerItem(props.items);
    renderRow(profile) {
        return (
		    <View style={{flex: 1, flexDirection: 'row'}}>
		      			<Text style={styles.listText}>{profile.name}</Text>
		                <Text style={styles.listText}>{profile.price} x {profile.quantity}</Text>
		    </View>
        )
    }

    render() {
        return (
            <ListView dataSource={this.state.data} renderRow={this.renderRow}/>
        );
    }
}