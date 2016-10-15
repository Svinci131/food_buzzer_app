import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import Store from '../store';
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);

const options = {
    insurance:
['AARP',
'Aetna',
'American Family Insurance',
'American National Insurance',
'Anthem Blue Cross and Blue Shield',
'Blue Cross and Blue Shield',
'Cigna',
'EmblemHealth',
'Fortis',
'Highmark',
'Humana',
'Kaiser Permanente',
'Principal Financial Group',
'UnitedHealth Group',
'WellCare Health Plans',
'WellPoint'],
    locations: ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"],
    problems: [ "accident","alzheimer","dental","cancer","diabetes","heart disease","spinal cord injury"],

}


class OptionList extends Component {
    constructor(props){
        super(props)

    }

    renderList() {
        let list = this.props.cat
        return options[list].map((item) => {
                return <Text style={styles.listText} text={item} key={item} onPress={this.select.bind(this, item)}>{item}</Text>
            })
    }

    select(name) {
        let list = this.props.cat
        Store[list] = name
        this.props.navigator.push({
        ident: "GetHelp"
    })

    }

    render() {
        return (
            <View style={styles.list}>
                {this.renderList()}
            </View>
        );
    }
}


export default OptionList;
