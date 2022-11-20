import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../MainScreen';
import Signup from '../screens/signup';

const Stack = createStackNavigator();

export default function ScreenCase() {
  return (
    <NavigationContainer initialRouteName="MainScreen">
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="Signup" component={Signup} options={{ title: '作成' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
