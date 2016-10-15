import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
import OrderList from './OrderList';

import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj);

export default class Order extends Component {
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this);

        const fakeData = [
        	{
        		name: 'Gotham West Market', 
        		order: [{name:"Garlic Fries", price:"$10.00", quantity:"3"}, {name:"Fish Tacos", price:"$10.00", quantity:"4"}, {name:"Brownie Sundae", price:"$10.00", quantity:"3"}, {name:"Iced Tea", price:"$10.00", quantity:"4"}]
        	}
        ];

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          data: dataSource.cloneWithRows(fakeData)
        }
    }

    // getTotalForOrder(data){
    // 	let total = 0;
    // 	data.forEach(i => {
    // 		total = total + Number(data[i].total);
    // 	});
    // }

    renderRow(profile) {
        return (
            <View>
                <View style={styles.list}>
                <Text style={styles.headline3}>{profile.name}</Text>
                    <OrderList items={profile.order} />
                </View>
            </View>
        )
    }

    render() {
        return (
            <ListView dataSource={this.state.data} renderRow={this.renderRow}/>
        );
    }
}