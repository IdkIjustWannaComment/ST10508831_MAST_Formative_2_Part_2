import { useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MenuButton from './MenuButton';
import { MenuItem } from './MenuItem';
import { styles, colours } from './Styles';
import { convertPriceToNumber, FormErrors, validateMenuItem } from './validation';

type AddMenuItemScreenProps = {
  selectedItem?: MenuItem | null;
  onSave: (dishName: string, description: string, course: string, price: number) => void;
  onCancel: () => void;
};

export default function AddMenuItemScreen({
  selectedItem = null,
  onSave,
  onCancel,
}: AddMenuItemScreenProps) {
  const [dishName, setDishName] = useState(selectedItem?.dishName || '');
  const [description, setDescription] = useState(selectedItem?.description || '');
  const [course, setCourse] = useState(selectedItem?.course || '');
  const [price, setPrice] = useState(
    selectedItem ? selectedItem.price.toFixed(2) : '',
  );
  const [errors, setErrors] = useState<FormErrors>({
    dishName: '',
    description: '',
    course: '',
    price: '',
  });
  const formScroll = useRef<ScrollView>(null);
  const descriptionRef = useRef<TextInput>(null);
  const isEditing = selectedItem !== null;

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
      convertPriceToNumber(price),
    );
  }

  function handleCancel() {
    Keyboard.dismiss();
    onCancel();
  }

  return (
    <View style={styles.formScreen}>
      <KeyboardAvoidingView
        style={styles.formKeyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          ref={formScroll}
          style={styles.formScroll}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.screenTitle} accessibilityRole="header">
            {isEditing ? 'Edit Menu Item' : 'Add Menu Item'}
          </Text>
          <Text style={styles.formHint}>
            Complete all four fields to {isEditing ? 'save the changes' : 'add a dish'}.
          </Text>

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
              returnKeyType="next"
              onSubmitEditing={() => descriptionRef.current?.focus()}
              accessibilityLabel="Dish name"
              accessibilityHint={errors.dishName || 'Required. 3 to 60 characters.'}
            />
            {errors.dishName !== '' && (
              <Text style={styles.errorText} accessibilityLiveRegion="polite">
                {errors.dishName}
              </Text>
            )}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              ref={descriptionRef}
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
              accessibilityHint={errors.description || 'Required. 10 to 300 characters.'}
            />
            {errors.description !== '' && (
              <Text style={styles.errorText} accessibilityLiveRegion="polite">
                {errors.description}
              </Text>
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
              <Text style={styles.errorText} accessibilityLiveRegion="polite">
                {errors.course}
              </Text>
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
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
              accessibilityLabel="Price in rand"
              accessibilityHint={errors.price || 'Required. Greater than zero.'}
            />
            <Text style={styles.priceHint}>Use up to 2 decimal places, for example 55.50.</Text>
            {errors.price !== '' && (
              <Text style={styles.errorText} accessibilityLiveRegion="polite">
                {errors.price}
              </Text>
            )}
          </View>
        </ScrollView>

        <View style={styles.formFooter}>
          <Pressable
            style={styles.doneTypingButton}
            onPress={() => Keyboard.dismiss()}
            accessibilityRole="button"
            accessibilityLabel="Done typing"
          >
            <Text style={styles.doneTypingText}>DONE TYPING</Text>
          </Pressable>
          <View style={styles.saveButtonSpace}>
            <MenuButton
              title={isEditing ? 'SAVE CHANGES' : 'SAVE MENU ITEM'}
              onPress={handleSave}
            />
          </View>
          <View style={styles.cancelButtonSpace}>
            <MenuButton title="CANCEL" onPress={handleCancel} secondary />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
