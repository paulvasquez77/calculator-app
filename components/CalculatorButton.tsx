import { globalStyles } from '@/styles/global-styles';
import { Pressable, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onpress: () => void;
}

export default function CalculatorButton({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onpress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => { Haptics.selectionAsync(); onpress() }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
