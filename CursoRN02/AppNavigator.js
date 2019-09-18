//import { createStackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Componentes/HomeScreen';
import  DetailsScreen from './Componentes/DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  DetailsScreen: { screen:  DetailsScreen },
});

export default AppNavigator;