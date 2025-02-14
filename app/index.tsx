import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';
import { Colors } from './../constants/Colors';

export default function CalculatorApp() {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h2">250</ThemeText>
        <ThemeText variant="h1">50 X 5000000000000000</ThemeText>
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
          onpress={() => {
            console.log('C');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="8"
          onpress={() => {
            console.log('+/-');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="9"
          onpress={() => {
            console.log('del');
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
            console.log('C');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="5"
          onpress={() => {
            console.log('+/-');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="6"
          onpress={() => {
            console.log('del');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="-"
          onpress={() => {
            console.log('÷');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onpress={() => {
            console.log('C');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="2"
          onpress={() => {
            console.log('+/-');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="3"
          onpress={() => {
            console.log('del');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="+"
          onpress={() => {
            console.log('÷');
          }}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          onpress={() => {
            console.log('C');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="."
          onpress={() => {
            console.log('+/-');
          }}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="="
          onpress={() => {
            console.log('del');
          }}
          color={Colors.orange}
        />
      </View>
    </View>
  );
}
