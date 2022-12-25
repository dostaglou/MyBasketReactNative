import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../MainScreen';
import Signup from '../screens/signup';
import Login from '../screens/login'

const Stack = createStackNavigator();

export default function ScreenCase() {
  return (
    <NavigationContainer initialRouteName="MainScreen">
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="Signup" component={Signup} options={{ title: '登録' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'ログイン' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
