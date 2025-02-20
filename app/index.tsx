import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';
import { Colors } from './../constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

export default function CalculatorApp() {
  const { formula, buildNumber } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h2">{formula}</ThemeText>
        <ThemeText variant="h1">50 X 50000</ThemeText>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onpress={() => {
            console.log('C');
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="+/-"
          onpress={() => {
            console.log('+/-');
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="del"
          onpress={() => {
            console.log('del');
          }}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="÷"
          onpress={() => {
            console.log('÷');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onpress={() => { buildNumber('7') }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="8"
          onpress={() => {
            buildNumber('8');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="9"
          onpress={() => {
            buildNumber('9');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="x"
          onpress={() => {
            console.log('÷');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onpress={() => {
            buildNumber('4');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="5"
          onpress={() => {
            buildNumber('5');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="6"
          onpress={() => {
            buildNumber('6');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="-"
          onpress={() => {
            console.log('-');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onpress={() => {
            buildNumber('1');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="2"
          onpress={() => {
            buildNumber('2');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="3"
          onpress={() => {
            buildNumber('3');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="+"
          onpress={() => {
            console.log('+');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onpress={() => {
            buildNumber('0');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="."
          onpress={() => {
            buildNumber('.');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="="
          onpress={() => {
            console.log('=');
          }}
          color={Colors.orange}
        />
      </View>
    </View>
  );
}
