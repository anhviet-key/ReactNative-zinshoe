// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import WishlistScreen from './screens/Wishlist';
import CartScreen from './screens/Cart';
import SettingScreen from './screens/Setting';
import ChatScreen from './screens/Chat';
import MenuTabs from './components/MenuTab';
import ProductDetail from './components/ProductDetail';
import HomeDiscount from './components/HomeScreen/HomeDiscount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuTabs" component={MenuTabs} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        {/* <Stack.Screen name="HomeDiscount" component={HomeDiscount} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
