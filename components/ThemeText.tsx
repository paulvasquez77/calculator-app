import { globalStyles } from '@/styles/global-styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  variant?: 'h1' | 'h2';
  alerta?: () => void
}

export default function ThemeText({
  children,
  variant = 'h1',
  alerta,
  ...rest
}: Props) {
  return (
    <Text
      style={[
        { color: 'white' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult,
      ]}
      {...rest}
      numberOfLines={1}
      adjustsFontSizeToFit
      onPress={alerta}
    >
      {children}
    </Text>
  );
}
