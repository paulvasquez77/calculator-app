import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { StyleSheet, Text, View } from 'react-native';

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 X 5000000000000000</ThemeText>
      <ThemeText variant="h2">250</ThemeText>
    </View>
  );
}
