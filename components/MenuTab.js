import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';

import HomeScreen from '../screens/Home';
import WishlistScreen from '../screens/Wishlist';
import CartScreen from '../screens/Cart';
import SettingScreen from '../screens/Setting';
import ChatScreen from '../screens/Chat';
import { COLOURS } from './Database';

const Tab = createBottomTabNavigator();
const MenuTab = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 70,
          paddingHorizontal: 5,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: COLOURS.bacgroundGreen,
        tabBarInactiveTintColor: '#787879',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Trang Chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (focused) {
              iconName = 'home';
            } else {
              iconName = 'home-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Sản phẩm"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (focused) {
              iconName = 'apps-sharp';
            } else {
              iconName = 'apps-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (focused) {
              iconName = 'basket';
            } else {
              iconName = 'basket-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Nhắn tin"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (focused) {
              iconName = 'chatbox-ellipses';
            } else {
              iconName = 'chatbox-ellipses-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarBadge: 12,
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (focused) {
              iconName = 'settings';
            } else {
              iconName = 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuTab;

const styles = StyleSheet.create({});
