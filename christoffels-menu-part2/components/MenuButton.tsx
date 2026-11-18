import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

type MenuButtonProps = {
  title: string;
  onPress: () => void;
  secondary?: boolean;
  destructive?: boolean;
  accessibilityLabel?: string;
};

export default function MenuButton({
  title,
  onPress,
  secondary = false,
  destructive = false,
  accessibilityLabel,
}: MenuButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        secondary && styles.secondaryButton,
        destructive && styles.deleteButton,
      ]}
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
