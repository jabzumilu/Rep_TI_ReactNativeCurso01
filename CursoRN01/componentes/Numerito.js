
import React, {Component} from 'react';

import {StyleSheet
		, Text
		, View} from 'react-native';


export default class Numerito extends Component {
	state: { }

	render(){
		return(
			<View style={{display: "flex", width: 50, height: 50, justifyContent:"center", alignItems:"center", backgroundColor: (this.props.indice % 2) == 0? "#fff": "#e3e3e3"}}>
				<Text style={{textAlign:"center"}}>{this.props.valor}</Text>
			</View>
			)
	}
}