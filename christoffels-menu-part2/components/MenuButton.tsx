import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

type MenuButtonProps = {
  title: string;
  onPress: () => void;
  secondary?: boolean;
};

export default function MenuButton({ title, onPress, secondary = false }: MenuButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, secondary && styles.secondaryButton]}
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
