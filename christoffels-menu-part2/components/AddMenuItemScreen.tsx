import { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuButton from './MenuButton';
import { colours, styles } from './Styles';
import { FormErrors, validateMenuItem } from './validation';

type AddMenuItemScreenProps = {
  onSave: (dishName: string, description: string, course: string, price: number) => void;
  onCancel: () => void;
};

export default function AddMenuItemScreen({ onSave, onCancel }: AddMenuItemScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState<FormErrors>({
    dishName: '',
    description: '',
    course: '',
    price: '',
  });
    const formScroll = useRef<ScrollView>(null);
  const descriptionRef = useRef<TextInput>(null);
  const hasErrors = errors.dishName !== '' || errors.description !== '' ||
    errors.course !== '' || errors.price !== '';

  function handleSave() {
    Keyboard.dismiss();
    const newErrors = validateMenuItem(dishName, description, course, price);
    setErrors(newErrors);

    if (newErrors.dishName || newErrors.description || newErrors.course || newErrors.price) {
      formScroll.current?.scrollTo({ y: 0, animated: true });
      return;
    }

    onSave(
      dishName.trim(),
      description.trim(),
      course,
      Number(price.trim().replace(',', '.')),
    );
  }

  function handleCancel() {
    Keyboard.dismiss();
    onCancel();
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        ref={formScroll}
        contentContainerStyle={styles.formContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.screenTitle} accessibilityRole="header">Add Menu Item</Text>
        <Text style={styles.formHint}>Complete all four fields to add a dish.</Text>

        {hasErrors && (
          <Text style={styles.errorSummary} accessibilityLiveRegion="polite" role="alert">
            Check the highlighted fields before saving.
          </Text>
        )}

        <View style={styles.field}>
          <Text style={styles.label}>Dish name</Text>
          <TextInput
            style={[styles.input, errors.dishName !== '' && styles.inputError]}
            value={dishName}
            onChangeText={(value) => {
              setDishName(value);
              setErrors((currentErrors) => ({ ...currentErrors, dishName: '' }));
            }}
            placeholder="e.g. Grilled Chicken"
            placeholderTextColor={colours.muted}
            autoCapitalize="words"
            accessibilityLabel="Dish name"
            accessibilityHint={errors.dishName || 'Required'}
          />
          {errors.dishName !== '' && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">{errors.dishName}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput, errors.description !== '' && styles.inputError]}
            value={description}
            onChangeText={(value) => {
              setDescription(value);
              setErrors((currentErrors) => ({ ...currentErrors, description: '' }));
            }}
            placeholder="e.g. Chicken with rice and vegetables."
            placeholderTextColor={colours.muted}
            multiline
            textAlignVertical="top"
            accessibilityLabel="Description"
            accessibilityHint={errors.description || 'Required. You can enter more than one line.'}
          />
          {errors.description !== '' && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">{errors.description}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Course</Text>
          <View style={[styles.pickerBorder, errors.course !== '' && styles.inputError]}>
            <Picker
              selectedValue={course}
              onValueChange={(value: string) => {
                setCourse(value);
                setErrors((currentErrors) => ({ ...currentErrors, course: '' }));
              }}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              mode="dropdown"
              dropdownIconColor={colours.green}
              accessibilityLabel="Course"
            >
              <Picker.Item label="Select a course" value="" />
              <Picker.Item label="Starter" value="Starter" />
              <Picker.Item label="Main Course" value="Main Course" />
              <Picker.Item label="Dessert" value="Dessert" />
            </Picker>
          </View>
          {errors.course !== '' && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">{errors.course}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Price (R)</Text>
          <TextInput
            style={[styles.input, errors.price !== '' && styles.inputError]}
            value={price}
            onChangeText={(value) => {
              setPrice(value);
              setErrors((currentErrors) => ({ ...currentErrors, price: '' }));
            }}
            placeholder="e.g. 140.00"
            placeholderTextColor={colours.muted}
            keyboardType="decimal-pad"
            autoCorrect={false}
            accessibilityLabel="Price in rand"
            accessibilityHint={errors.price || 'Required. Greater than zero, with up to two decimal places.'}
          />
          <Text style={styles.priceHint}>Use up to 2 decimal places, for example 55.50.</Text>
          {errors.price !== '' && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">{errors.price}</Text>
          )}
        </View>

        <View style={styles.saveButtonSpace}>
          <MenuButton title="SAVE MENU ITEM" onPress={handleSave} />
        </View>
        <View style={styles.cancelButtonSpace}>
          <MenuButton title="CANCEL" onPress={handleCancel} secondary />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
