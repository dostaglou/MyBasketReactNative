import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../MainScreen';
import Signup from './signup';
import Login from './login';
import Logout from './logout';
import CatalogueItems from './catalogueItems';
import ShoppingLists from './shoppingLists';
import ShoppingList from './shoppingList';

const Stack = createStackNavigator();

export default function ScreenCase() {
  return (
    <NavigationContainer initialRouteName="MainScreen">
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}/>
        <Stack.Screen name="Signup" component={Signup} options={{ title: '登録' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'ログイン' }} />
        <Stack.Screen name="Logout" component={Logout} options={{ title: 'ログイン' }} />
        <Stack.Screen name="CatalogueItems" component={CatalogueItems} options={{ title: 'Items' }} />
        <Stack.Screen name="ShoppingLists" component={ShoppingLists} options={{ title: 'Shopping Lists' }} />
        <Stack.Screen name="ShoppingList" component={ShoppingList} options={{ title: 'Shopping List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
