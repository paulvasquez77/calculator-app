import { Slot } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles';

export default function RootLayout() {
  return (
    <>
      <View style={globalStyles.background}>
        <Slot />
        <StatusBar style="light" />
      </View>
    </>
  );
}
