
import { Stack } from 'expo-router';
import 'react-native-reanimated';

// import { Appearance } from 'react-native';
// import { Colors } from '@/constants/theme';
export const unstable_settings = {
  anchor: 'Coffee SHop Menu',
};

export default function RootLayout() {
  // const colorScheme = Appearance.getColorScheme();
  // const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
      <Stack screenOptions={{headerShown: false,}}>
       <Stack.Screen name='index' options={{headerShown:true,title:'Home'}} />
       <Stack.Screen name='menu' options={{headerShown:true, title:'Coffee Shop Menu'}} />
       <Stack.Screen name='contact' options={{headerShown:true,title:'Contact Us'}} />
      </Stack>
  );
}
