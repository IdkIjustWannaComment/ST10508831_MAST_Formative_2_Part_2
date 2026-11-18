import { ScrollView, Text, View } from 'react-native';
import MenuButton from './MenuButton';
import MenuStatistics from './MenuStatistics';
import { MenuItem } from './MenuItem';
import { styles } from './Styles';

type HomeScreenProps = {
  menuItems: MenuItem[];
  onViewMenu: () => void;
  onAddItem: () => void;
};

export default function HomeScreen({
  menuItems,
  onViewMenu,
  onAddItem,
}: HomeScreenProps) {
  return (
    <ScrollView
      style={styles.homeScreen}
      contentContainerStyle={styles.homeContent}
    >
      <Text style={styles.homeHeading} accessibilityRole="header">
        Welcome, Chef
      </Text>
      <Text style={styles.homeIntro}>
        Manage your restaurant menu, add new dishes and keep the menu information up to date.
      </Text>

      <View style={styles.homeButtonSpace}>
        <MenuButton
          title="VIEW MENU"
          onPress={onViewMenu}
          accessibilityLabel="View menu"
        />
      </View>

      <View style={styles.homeButtonSpace}>
        <MenuButton
          title="ADD MENU ITEM"
          onPress={onAddItem}
          accessibilityLabel="Add a menu item"
        />
      </View>

      <View style={styles.homeStatisticsSpace}>
        <MenuStatistics menuItems={menuItems} />
      </View>
    </ScrollView>
  );
}
