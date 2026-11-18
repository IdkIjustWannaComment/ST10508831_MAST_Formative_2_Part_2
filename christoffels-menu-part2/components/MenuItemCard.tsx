import { Text, View } from 'react-native';
import MenuButton from './MenuButton';
import { MenuItem } from './MenuItem';
import { formatRand } from './menuHelpers';
import { styles } from './Styles';

type MenuItemCardProps = {
  item: MenuItem;
  onEdit: (item: MenuItem) => void;
  onDelete: (item: MenuItem) => void;
};

export default function MenuItemCard({
  item,
  onEdit,
  onDelete,
}: MenuItemCardProps) {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.courseAndPrice}>
        {item.course} | {formatRand(item.price)}
      </Text>

      <View style={styles.cardActions}>
        <View style={styles.cardActionButton}>
          <MenuButton
            title="EDIT"
            onPress={() => onEdit(item)}
            accessibilityLabel={`Edit ${item.dishName}`}
          />
        </View>

        <View style={styles.cardActionButton}>
          <MenuButton
            title="DELETE"
            onPress={() => onDelete(item)}
            destructive
            accessibilityLabel={`Delete ${item.dishName}`}
          />
        </View>
      </View>
    </View>
  );
}
