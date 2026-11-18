import { useMemo, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DeleteConfirmation from './DeleteConfirmation';
import MenuButton from './MenuButton';
import MenuItemCard from './MenuItemCard';
import MenuStatistics from './MenuStatistics';
import { MenuItem } from './MenuItem';
import { courseOptions, CourseFilter, filterMenuItems } from './menuHelpers';
import { colours, styles } from './Styles';

type MenuScreenProps = {
  menuItems: MenuItem[];
  successMessage: string;
  searchText: string;
  courseFilter: CourseFilter;
  onSearchChange: (value: string) => void;
  onCourseFilterChange: (value: CourseFilter) => void;
  onClearSearchAndFilter: () => void;
  onAdd: () => void;
  onEdit: (item: MenuItem) => void;
  onDelete: (item: MenuItem) => void;
  onHome: () => void;
};

export default function MenuScreen({
  menuItems,
  successMessage,
  searchText,
  courseFilter,
  onSearchChange,
  onCourseFilterChange,
  onClearSearchAndFilter,
  onAdd,
  onEdit,
  onDelete,
  onHome,
}: MenuScreenProps) {
  const [deleteItem, setDeleteItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(
    () => filterMenuItems(menuItems, searchText, courseFilter),
    [menuItems, searchText, courseFilter],
  );

  const filterOptions: CourseFilter[] = ['All courses', ...courseOptions];

  function confirmDelete(item: MenuItem) {
    onDelete(item);
    setDeleteItem(null);
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <Text style={styles.screenTitle} accessibilityRole="header">Menu</Text>

            <View style={styles.buttonSpace}>
              <MenuButton title="HOME" onPress={onHome} secondary />
            </View>

            <View style={styles.buttonSpace}>
              <MenuButton title="ADD MENU ITEM" onPress={onAdd} />
            </View>

            {successMessage !== '' && (
              <Text style={styles.successMessage} accessibilityLiveRegion="polite" role="status">
                {successMessage}
              </Text>
            )}

            <MenuStatistics menuItems={menuItems} />

            <Text style={styles.searchLabel}>Search by dish name</Text>
            <TextInput
              style={[styles.input, styles.searchInput]}
              value={searchText}
              onChangeText={onSearchChange}
              placeholder="e.g. Chicken"
              placeholderTextColor={colours.muted}
              autoCapitalize="none"
              returnKeyType="search"
              onSubmitEditing={() => Keyboard.dismiss()}
              onBlur={() => Keyboard.dismiss()}
              accessibilityLabel="Search menu by dish name"
            />

            <Text style={styles.filterLabel}>Filter by course</Text>
            <View style={styles.filterRow}>
              {filterOptions.map((option) => {
                const isActive = courseFilter === option;

                return (
                  <TouchableOpacity
                    key={option}
                    style={[styles.filterButton, isActive && styles.activeFilterButton]}
                    onPress={() => onCourseFilterChange(option)}
                    activeOpacity={0.75}
                    accessibilityRole="button"
                    accessibilityLabel={`Filter by ${option}`}
                    accessibilityState={{ selected: isActive }}
                  >
                    <Text
                      style={[
                        styles.filterButtonText,
                        isActive && styles.activeFilterButtonText,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.clearButtonSpace}>
              <MenuButton
                title="CLEAR SEARCH & FILTER"
                onPress={onClearSearchAndFilter}
                secondary
              />
            </View>

            {menuItems.length > 0 && (
              <Text style={styles.resultsMessage}>
                Showing {filteredItems.length} of {menuItems.length} dishes
              </Text>
            )}
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyMenu}>
            <Text style={styles.emptyTitle}>
              {menuItems.length === 0 ? 'No menu items yet.' : 'No matching dishes'}
            </Text>
            <Text style={styles.bodyText}>
              {menuItems.length === 0
                ? 'Tap Add Menu Item to begin.'
                : 'Try another search or course filter.'}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <MenuItemCard
            item={item}
            onEdit={onEdit}
            onDelete={setDeleteItem}
          />
        )}
        ListFooterComponent={
          filteredItems.length > 0 ? (
            <Text style={styles.listHint}>Scroll to view more dishes.</Text>
          ) : null
        }
      />

      <DeleteConfirmation
        item={deleteItem}
        onCancel={() => setDeleteItem(null)}
        onConfirm={confirmDelete}
      />
    </View>
  );
}
