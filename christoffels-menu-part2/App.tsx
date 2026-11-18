import { useEffect, useRef, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddMenuItemScreen from './components/AddMenuItemScreen';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import { MenuItem } from './components/MenuItem';
import { CourseFilter } from './components/menuHelpers';
import { styles } from './components/Styles';

type Screen = 'home' | 'menu' | 'form';
type FormReturnScreen = 'home' | 'menu';

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [formReturnScreen, setFormReturnScreen] =
    useState<FormReturnScreen>('menu');
  const [successMessage, setSuccessMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [courseFilter, setCourseFilter] =
    useState<CourseFilter>('All courses');
  const nextItemId = useRef(1);

  useEffect(() => {
    if (currentScreen !== 'form') {
      return;
    }

    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      setSelectedItem(null);
      setCurrentScreen(formReturnScreen);
      return true;
    });

    return () => subscription.remove();
  }, [currentScreen, formReturnScreen]);

  function openHome() {
    setSuccessMessage('');
    setSelectedItem(null);
    setCurrentScreen('home');
  }

  function openMenu() {
    setCurrentScreen('menu');
  }

  function openAddForm(returnScreen: FormReturnScreen) {
    setSuccessMessage('');
    setSelectedItem(null);
    setFormReturnScreen(returnScreen);
    setCurrentScreen('form');
  }

  function openEditForm(item: MenuItem) {
    setSuccessMessage('');
    setSelectedItem(item);
    setFormReturnScreen('menu');
    setCurrentScreen('form');
  }

  function cancelForm() {
    setSelectedItem(null);
    setCurrentScreen(formReturnScreen);
  }

  function saveMenuItem(
    dishName: string,
    description: string,
    course: string,
    price: number,
  ) {
    if (selectedItem !== null) {
      setMenuItems((currentItems) =>
        currentItems.map((item) =>
          item.id === selectedItem.id
            ? { ...item, dishName, description, course, price }
            : item,
        ),
      );
      setSuccessMessage('Menu item updated.');
    } else {
      const newItem: MenuItem = {
        id: nextItemId.current,
        dishName,
        description,
        course,
        price,
      };
      nextItemId.current += 1;
      setMenuItems((currentItems) => [...currentItems, newItem]);
      setSuccessMessage('Menu item saved.');
    }

    setSelectedItem(null);
    setCurrentScreen('menu');
  }

  function deleteMenuItem(item: MenuItem) {
    setMenuItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== item.id),
    );
    setSuccessMessage(`“${item.dishName}” deleted.`);
  }

  function clearSearchAndFilter() {
    setSearchText('');
    setCourseFilter('All courses');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.appContainer}>
          <View style={styles.appHeader}>
            <Text style={styles.appTitle} accessibilityRole="header">
              Christoffel's Menu
            </Text>
            <Text style={styles.appSubtitle}>Chef's Menu Manager</Text>
          </View>

          {currentScreen === 'home' && (
            <HomeScreen
              menuItems={menuItems}
              onViewMenu={openMenu}
              onAddItem={() => openAddForm('home')}
            />
          )}

          {currentScreen === 'menu' && (
            <MenuScreen
              menuItems={menuItems}
              successMessage={successMessage}
              searchText={searchText}
              courseFilter={courseFilter}
              onSearchChange={setSearchText}
              onCourseFilterChange={setCourseFilter}
              onClearSearchAndFilter={clearSearchAndFilter}
              onAdd={() => openAddForm('menu')}
              onEdit={openEditForm}
              onDelete={deleteMenuItem}
              onHome={openHome}
            />
          )}

          {currentScreen === 'form' && (
            <AddMenuItemScreen
              selectedItem={selectedItem}
              onSave={saveMenuItem}
              onCancel={cancelForm}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
