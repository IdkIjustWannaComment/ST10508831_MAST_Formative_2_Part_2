import { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuScreen from './components/MenuScreen';
import AddMenuItemScreen from './components/AddMenuItemScreen';
import { MenuItem } from './components/MenuItem';
import { styles } from './components/Styles';

export default function App() {
  // keep the menu here so it sticks around when the screen changes
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Android back takes you back to the menu while the form is open
  useEffect(() => {
    if (!showAddForm) {
      return;
    }

    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      setShowAddForm(false);
      return true;
    });

    return () => subscription.remove();
  }, [showAddForm]);

  function openAddForm() {
    setSuccessMessage('');
    setShowAddForm(true);
  }

  function saveMenuItem(
    dishName: string,
    description: string,
    course: string,
    price: number,
  ) {
    //; part 2 only adds items, so length + 1 is enough for the id
    setMenuItems((currentItems) => [
      ...currentItems,
      { id: currentItems.length + 1, dishName, description, course, price },
    ]);
    setSuccessMessage('Menu item saved.');
    setShowAddForm(false);
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

          {showAddForm ? (
            <AddMenuItemScreen
              onSave={saveMenuItem}
              onCancel={() => setShowAddForm(false)}
            />
          ) : (
            <MenuScreen
              menuItems={menuItems}
              successMessage={successMessage}
              onAdd={openAddForm}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
