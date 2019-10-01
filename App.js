
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from "./src/screen/MemoListScreen"
import MemoDetailScreen from "./src/screen/MemoDetailScreen"
import MemoEditScreen from "./src/screen/MemoEditScreen"
import LoginScreen from "./src/screen/LoginScreen"
import SignupScreen from "./src/screen/SignupScreen"

const App = createStackNavigator(
  {
  MemoDetail: { screen: MemoDetailScreen },
  Home:       { screen:  MemoListScreen},
  MemoEdit:   { screen: MemoEditScreen },
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
 },
{
 initialRouteName: 'Home',
 defaultNavigationOptions: {
  headerTitle: 'Memotto',
  headerTintColor: '#fff',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#265366',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  },
},
);

export default createAppContainer(App);


