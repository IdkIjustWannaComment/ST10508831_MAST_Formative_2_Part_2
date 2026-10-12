export type FormErrors = {
  dishName: string;
  description: string;
  course: string;
  price: string;
};

function getPriceError(price: string): string {
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

  const amount = Number(priceText);
  if (!Number.isFinite(amount)) {
    return 'This price is too large. Enter a smaller amount.';
  }
  if (amount <= 0) {
    return 'Enter a price greater than 0.';
  }

  // skip really big values if they would change the price when converted
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

  if (dishName.trim() === '') {
    errors.dishName = 'Enter a dish name.';
  }

  if (description.trim() === '') {
    errors.description = 'Enter a description.';
  }

  if (course !== 'Starter' && course !== 'Main Course' && course !== 'Dessert') {
    errors.course = 'Select a course.';
  }

  errors.price = getPriceError(price);

  return errors;
}
