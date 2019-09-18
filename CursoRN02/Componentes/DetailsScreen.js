
import React from 'react';
import Axios from 'axios'
import { Button, View, Text, FlatList, Item } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DetailsScreen extends React.Component {

  state = {
    Llantas: []
  }

  obtenerDatos(){
    Axios.get('https://desaapiapuntefabrica.aunion.com.gt/api/operacion/terminadas/'+this.props.navigation.getParam('Llanta',''))
      .then((resp) => {
        console.warn(resp.data[0].Nombre)
        this.setState({Llantas: resp.data})
      }).catch((error) => {
          if(error.response){
            //los 300
            if(error.response.status == 300)
            {
              console.warn("por codigo de estatus no errores");
            }else{
              console.warn("por codigo de estado");
            }
          }else if (error.request) {
            //los 400
            console.warn(error.request )
            console.warn(error.request.toString())
            //console.warn(error.request.toString())
          } else {
            // los 500
            console.warn("Error no controlado");
          }
      });
  }

  componentDidMount() {
    this.obtenerDatos();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detalle</Text>
        <Text>{ this.props.navigation.getParam('Llanta','') }</Text>
        <Text>{ this.props.navigation.getParam('Otro','') }</Text>
      </View>
    );
  }
}
