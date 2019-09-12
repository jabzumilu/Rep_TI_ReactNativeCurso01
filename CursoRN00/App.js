/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';
import Comentario from './Comentario.js';

//https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg

class FlexPractica extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewArriba}>
          <Text style={styles.textArriba}>Arriba</Text>
          <Text style={styles.textArriba}>------</Text>
        </View>
        <View style={styles.viewCentro}>
          <Text style={styles.textArriba}>Centro</Text>

          <View>
            <Text style={styles.textArriba}>------</Text>
            <Text>hola</Text>
          </View>
        </View>
        <View style={styles.viewAbajo}>
          <Text style={styles.textArriba}>Abajo</Text>
          <Text style={styles.textArriba}>------</Text>
        </View>
      </SafeAreaView>
    );
  }
}

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Comentario />
        <Comentario />
        <Comentario />
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

export default App;
