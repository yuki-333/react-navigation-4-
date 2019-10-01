
import { StackNavigator } from "react-navigation"

import MemoListScreen from "./src/screen/MemoListScreen"
import MemoDetailScreen from "./src/screen/MemoDetailScreen"
import MemoEditScreen from "./src/screen/MemoEditScreen"
import LoginScreen from "./src/screen/LoginScreen"
import SignupScreen from "./src/screen/SignupScreen"

const App = StackNavigator({
  Home:       { screen:  MemoListScreen},
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
}, {
  navigationOptions: {
    headerTitle: 'Memotto',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  }
});


export default App;
