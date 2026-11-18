import { useEffect } from 'react';
import { BackHandler, Modal, Text, View } from 'react-native';
import MenuButton from './MenuButton';
import { MenuItem } from './MenuItem';
import { styles } from './Styles';

type DeleteConfirmationProps = {
  item: MenuItem | null;
  onCancel: () => void;
  onConfirm: (item: MenuItem) => void;
};

export default function DeleteConfirmation({
  item,
  onCancel,
  onConfirm,
}: DeleteConfirmationProps) {
  useEffect(() => {
    if (item === null) {
      return;
    }

    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      onCancel();
      return true;
    });

    return () => subscription.remove();
  }, [item, onCancel]);

  if (item === null) {
    return null;
  }

  return (
    <Modal
      visible
      transparent
      animationType="fade"
      onRequestClose={onCancel}
      statusBarTranslucent
    >
      <View style={styles.modalOverlay}>
        <View
          style={styles.modalCard}
          accessibilityRole="alert"
          accessibilityViewIsModal
        >
          <Text style={styles.modalTitle}>Delete menu item?</Text>
          <Text style={styles.modalMessage}>
            Remove “{item.dishName}” from the menu? This cannot be undone.
          </Text>

          <View style={styles.modalActions}>
            <MenuButton
              title="CANCEL"
              onPress={onCancel}
              secondary
              accessibilityLabel="Cancel delete"
            />
            <MenuButton
              title="DELETE"
              onPress={() => onConfirm(item)}
              destructive
              accessibilityLabel={`Confirm delete ${item.dishName}`}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
