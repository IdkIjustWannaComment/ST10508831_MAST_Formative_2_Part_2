import { Text, View } from 'react-native';
import { MenuItem } from './MenuItem';
import { calculateMenuStatistics, formatRand } from './menuHelpers';
import { styles } from './Styles';

type MenuStatisticsProps = {
  menuItems: MenuItem[];
};

export default function MenuStatistics({ menuItems }: MenuStatisticsProps) {
  const statistics = calculateMenuStatistics(menuItems);

  return (
    <View
      style={styles.statisticsCard}
      accessibilityLabel="Menu overview statistics"
    >
      <Text style={styles.statisticsTitle}>Menu Overview</Text>

      <View style={styles.statisticsGrid}>
        <View style={styles.statisticItem}>
          <Text style={styles.statisticLabel}>Total dishes</Text>
          <Text style={styles.statisticValue}>{statistics.totalItems}</Text>
        </View>

        <View style={styles.statisticItem}>
          <Text style={styles.statisticLabel}>Average price</Text>
          <Text style={styles.statisticValue}>
            {formatRand(statistics.averagePrice)}
          </Text>
        </View>

        <View style={styles.statisticItem}>
          <Text style={styles.statisticLabel}>Starters</Text>
          <Text style={styles.statisticValue}>{statistics.starterCount}</Text>
        </View>

        <View style={styles.statisticItem}>
          <Text style={styles.statisticLabel}>Main courses</Text>
          <Text style={styles.statisticValue}>{statistics.mainCourseCount}</Text>
        </View>

        <View style={styles.statisticItem}>
          <Text style={styles.statisticLabel}>Desserts</Text>
          <Text style={styles.statisticValue}>{statistics.dessertCount}</Text>
        </View>
      </View>
    </View>
  );
}
