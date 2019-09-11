import React, {Component} from 'react';
import {StyleSheet
		, TextInput
		, View} from 'react-native';


export default class InputNumerito extends Component {
	state: { }

	render(){
		return(
			<View style={{display: "flex", width: 50, height: 50, justifyContent:"center", backgroundColor: (this.props.indice % 2) == 0? "#fff": "#e3e3e3"}}>
				<TextInput keyboardType={'numeric'} />
			</View>
			)
	}
}