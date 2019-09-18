import React from 'react';
import { View, Text, Button, TextInput, FlatList, Item } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from './Componentes/DetailsScreen'




class HomeScreen extends React.Component {
  state = {Llanta: ""}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput />
        <Text>Ingrese un numero</Text>
        <TextInput keyboardType={'numeric'}
          placeholder="numero de llanta"
          onChangeText={(text) => this.setState({Llanta: text})}
          value={this.state.Llanta}/>
        <Button
          title="Detalle"
          onPress={() => this.props.navigation.navigate('Details', {Llanta: this.state.Llanta, Otro: "5"})}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default createAppContainer(AppNavigator);