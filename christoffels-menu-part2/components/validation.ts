export type FormErrors = {
  dishName: string;
  description: string;
  course: string;
  price: string;
};

function containsLetter(value: string): boolean {
  return /[A-Za-z]/.test(value);
}

export function convertPriceToNumber(price: string): number {
  return Number(price.trim().replace(',', '.'));
}

export function getPriceError(price: string): string {
  const priceText = price.trim().replace(',', '.');

  if (priceText === '') {
    return 'Enter a price.';
  }

  if (priceText.startsWith('-')) {
    return 'Enter a price greater than 0.';
  }

  // only digits and a decimal point belong in a price
  for (let i = 0; i < priceText.length; i++) {
    const character = priceText[i];
    if (character !== '.' && (character < '0' || character > '9')) {
      return 'Enter a number, for example 55.50.';
    }
  }

  const parts = priceText.split('.');
  if (parts.length > 2 || parts[0] === '') {
    return 'Enter a number, for example 55.50.';
  }

  if (parts.length === 2 && (parts[1].length === 0 || parts[1].length > 2)) {
    return 'Use one or two digits after the decimal point.';
  }

  const amount = convertPriceToNumber(priceText);
  if (!Number.isFinite(amount)) {
    return 'This price is too large. Enter a smaller amount.';
  }
  if (amount <= 0) {
    return 'Enter a price greater than 0.';
  }

  const rands = Number(parts[0]);
  const cents = (parts[1] || '').padEnd(2, '0');
  const enteredPrice = rands + '.' + cents;

  if (!Number.isSafeInteger(rands) || amount.toFixed(2) !== enteredPrice) {
    return 'This price is too large. Enter a smaller amount.';
  }

  return '';
}

export function validateMenuItem(
  dishName: string,
  description: string,
  course: string,
  price: string,
): FormErrors {
  const errors: FormErrors = {
    dishName: '',
    description: '',
    course: '',
    price: '',
  };

  const trimmedName = dishName.trim();

  if (trimmedName === '') {
    errors.dishName = 'Enter a dish name.';
  } else if (trimmedName.length < 3) {
    errors.dishName = 'Dish name must be at least 3 characters.';
  } else if (trimmedName.length > 60) {
    errors.dishName = 'Dish name cannot exceed 60 characters.';
  } else if (!containsLetter(trimmedName)) {
    errors.dishName = 'Dish name must contain at least one letter.';
  }

  const trimmedDescription = description.trim();

  if (trimmedDescription === '') {
    errors.description = 'Enter a description.';
  } else if (trimmedDescription.length < 10) {
    errors.description = 'Description must be at least 10 characters.';
  } else if (trimmedDescription.length > 300) {
    errors.description = 'Description cannot exceed 300 characters.';
  } else if (!containsLetter(trimmedDescription)) {
    errors.description = 'Description must contain at least one letter.';
  }

  if (course !== 'Starter' && course !== 'Main Course' && course !== 'Dessert') {
    errors.course = 'Select a course.';
  }

  errors.price = getPriceError(price);

  return errors;
}
