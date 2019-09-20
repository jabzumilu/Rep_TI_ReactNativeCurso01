/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import Comentario from '../components/Comentario';
import {
  Button,
  Text,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Item,
  Input,
} from 'native-base';

//    https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg

class ComentariosContainer extends Component {
  state = {
    comentarios: [],
    estaCargando: true,
    usuario: '',
    contrasenia: '',
  };

  componentDidMount() {
    //una llamada a un API que traiga los comentarios...
    setTimeout(() => {
      this.setState({
        comentarios: [
          {
            nombre: 'José',
            fecha: '10 de Septiembre de 2019',
            titulo: 'Hola que hace',
            descripcion: 'Recibiendo curso o que hace',
          },
          {
            nombre: 'Melvin',
            fecha: '11 de Septiembre de 2019',
            titulo: 'Muy buen día',
            descripcion: 'En estos momentos recibo curso',
          },
          {
            nombre: 'Jorge',
            fecha: '12 de Septiembre de 2019',
            titulo: 'Que pasa chavales',
            descripcion: 'Recibiendo curso',
          },
        ],
        estaCargando: false,
      });
    }, 4000);
  }

  onPressIniciarSesion = () => {
    const {usuario, contrasenia} = this.state;

    alert('El usuario es: ' + usuario + ' y su contraseña: ' + contrasenia);
  };

  render() {
    const {comentarios, estaCargando} = this.state;
    //ES6..
    return (
      <SafeAreaView style={styles.container}>
        {estaCargando ? (
          <ActivityIndicator style={{width: 300}} />
        ) : (
          comentarios.map((comentario, i) => (
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>{comentario.nombre}</Text>
                <Text note numberOfLines={1}>
                  {comentario.titulo}
                </Text>
                <Text note numberOfLines={2} style={{color: 'red'}}>
                  {comentario.descripcion}
                </Text>
              </Body>
            </ListItem>
          ))
        )}
        <Item rounded>
          <Input
            placeholder="Usuario"
            onChangeText={texto => this.setState({usuario: texto})}
          />
        </Item>
        <Item rounded>
          <Input
            placeholder="Contraseña"
            onChangeText={texto => this.setState({contrasenia: texto})}
          />
        </Item>
        <Button rounded success onPress={() => this.onPressIniciarSesion()}>
          <Text>Success</Text>
        </Button>

        <List></List>
      </SafeAreaView>
    );
  }
}

//#3498db #2980b9 #9b59b6

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewArriba: {
    flex: 1,
    backgroundColor: '#3498db',
    fontSize: 30,
    //alignItems: 'center',
    alignItems: 'flex-end', //alignItems es para alinear los componenes en su horizontal.
    justifyContent: 'flex-start', //justifyContent es para alinear los componenes en su vertical.
  },
  viewCentro: {
    flex: 1,
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewAbajo: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  textArriba: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default ComentariosContainer;
