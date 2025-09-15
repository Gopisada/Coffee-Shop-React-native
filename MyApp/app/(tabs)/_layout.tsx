import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol, IconSymbolnew } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { Appearance } from 'react-native';


export default function TabLayout() {
   const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: true,
        headerTitleAlign:'center',
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle:"Home",
          headerStyle: {backgroundColor: theme.headerBackground},
          headerTintColor:theme.text,
          headerShadowVisible:false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          headerTitle:"Contact Us",
          headerStyle: {backgroundColor: theme.headerBackground},
          headerTintColor:theme.text,
          headerShadowVisible:false,
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{ title: "Menu" ,
          headerTitle:"Coffee Shop Menu",
          headerStyle: {backgroundColor: theme.headerBackground},
          headerTintColor:theme.text,
          headerShadowVisible:false,
           tabBarIcon: ({ color }) => <IconSymbolnew size={28} name="cafe-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
