import { FlatList, Text, View } from 'react-native';
import { MenuItem } from './MenuItem';
import MenuButton from './MenuButton';
import { styles } from './Styles';

type MenuScreenProps = {
  menuItems: MenuItem[];
  successMessage: string;
  onAdd: () => void;
};

export default function MenuScreen({
  menuItems,
  successMessage,
  onAdd,
}: MenuScreenProps) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle} accessibilityRole="header">Menu</Text>

      <View style={styles.buttonSpace}>
        <MenuButton title="ADD MENU ITEM" onPress={onAdd} />
      </View>

      {successMessage !== '' && (
        <Text style={styles.successMessage} accessibilityLiveRegion="polite" role="status">
          {successMessage}
        </Text>
      )}

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <View style={styles.emptyMenu}>
            <Text style={styles.emptyTitle}>No menu items yet.</Text>
            <Text style={styles.bodyText}>Tap Add Menu Item to begin.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.courseAndPrice}>
              {item.course} | R{item.price.toFixed(2)}
            </Text>
          </View>
        )}
        ListFooterComponent={
          menuItems.length > 0 ? (
            <Text style={styles.listHint}>Scroll to view more dishes.</Text>
          ) : null
        }
      />
    </View>
  );
}
