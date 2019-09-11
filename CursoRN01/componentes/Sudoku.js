import React, {Component} from 'react';
import Axios from 'axios'

import Numerito  from './Numerito'
import InputNumerito  from './InputNumerito'
//import SmartField from './SmartField'

import {StyleSheet
		, Text
		, Alert
		, Button
		, TextInput
		, View} from 'react-native';



export default class Sudoku extends Component {
	state = {
		sudoku: [{x:0,y:0,value:0}
					,{x:0,y:1,value:0}
					,{x:0,y:2,value:0}
					,{x:0,y:3,value:0}

					,{x:1,y:0,value:0}
					,{x:1,y:1,value:0}
					,{x:1,y:2,value:0}
					,{x:1,y:3,value:0}

					,{x:2,y:0,value:0}
					,{x:2,y:1,value:0}
					,{x:2,y:2,value:0}
					,{x:2,y:3,value:0}

					,{x:3,y:0,value:0}
					,{x:3,y:1,value:0}
					,{x:3,y:2,value:0}
					,{x:3,y:3,value:0}

					,{x:0,y:0,value:0}
					,{x:0,y:1,value:0}
					,{x:0,y:2,value:0}
					,{x:0,y:3,value:0}]
		, fields : []
		, comp_fields : []
	}

	/*Funciones*/
	loadData(){
		Axios.get('http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=4x4&level=1')
			.then((response)=>{
				this.setState({sudoku: response.data.squares})
				this.setState({comp_fields: []})
				this.renderFields();
			}).catch((error) => {
				Alert.alert("Mr. Tusna, ocurrio un problema")
			})
	}

	renderFields(){
		var square = {}
		contador = 0;
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				var square = {}
				var exist = false;

				for(var s = 0; s < this.state.sudoku.length; s++){
					if(this.state.sudoku[s].x == i
						& this.state.sudoku[s].y == j){
						square = this.state.sudoku[s]
						exist = true;
					}
				}

				if(!exist){
					square = {x:i,y:j,value:0}
				}

				if(square.value != 0){
					this.state.comp_fields
						.push(<Numerito valor={square.value} key={contador} indice={contador} />)
				}else{
					this.state.comp_fields.push(<InputNumerito key={contador} indice={contador} />)
				}

				this.forceUpdate();
				contador++;
			}
			contador++;
		}
	}
	/*Funciones*/

	/*Ciclo de vida*/
	componentDidMount() {
		this.loadData();
	}	
	/*Ciclo de vida*/

	render() {
		return(
			<View>
				<View style={{height: 200, width: 200, backgroundColor: "#543", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
					{this.state.comp_fields}
				</View>
				<Button title="Refresh" 
					onPress={() => {
						this.loadData()
					}} />  
			</View>
		)
	}
}