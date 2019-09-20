import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';

//https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg

function Comentario(props) {
  return (
    <View style={style.container}>
      <View style={style.viewFoto}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri:
              'https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-1200x800.jpg',
          }}
        />

        <View style={style.viewNombres}>
          <Text style={style.nombres}>{props.nombre}</Text>
          <Text style={style.fecha}>{props.fecha}</Text>
        </View>
      </View>
      <View style={style.viewTitulos}>
        <Text style={style.titulo}>{props.titulo}</Text>
        <Text style={style.descripcion}>{props.descripcion}</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    margin: 15,
  },
  viewFoto: {
    flexDirection: 'row',
  },
  viewNombres: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nombres: {
    fontSize: 19,
    fontWeight: '700',
    color: 'black',
  },
  fecha: {
    fontSize: 16,
    fontWeight: '100',
  },
  viewTitulos: {
    marginTop: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
  },
  descripcion: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export default Comentario;
