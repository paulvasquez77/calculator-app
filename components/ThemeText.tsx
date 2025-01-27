import { globalStyles } from '@/styles/global-styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  variant?: 'h1' | 'h2';
}

export default function ThemeText({
  children,
  variant = 'h1',
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
    >
      {children}
    </Text>
  );
}
