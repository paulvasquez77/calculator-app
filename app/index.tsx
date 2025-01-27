import { globalStyles } from '@/styles/global-styles';
import { StyleSheet, Text, View } from 'react-native';

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        50 X 5000000000000000
      </Text>
      <Text style={globalStyles.subResult}>250</Text>
    </View>
  );
}
