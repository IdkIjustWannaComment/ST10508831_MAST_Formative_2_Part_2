# Christoffel's Menu - Part 2

Nikhil Govender | ST10508831 | MAST5112

This is a React Native app for adding dishes to a restaurant menu and viewing them. It uses the green-and-white design from Part 1.

## Running the app




## What the app does

- Starts on the Menu screen and shows a message if no dishes have been added.
- Lets you enter a dish name, description, course and price.
- Gives you three course options: Starter, Main Course and Dessert.
- Checks the fields before saving and shows a message if something needs fixing.
- Keeps what you've typed when there's an error.
- Adds the dish to the menu and shows a message to confirm it was saved.
- Lets you cancel without saving.
- Lets you scroll through the menu as more dishes are added.

Prices need to be above zero and can have up to two decimal places. Both `55.50` and `55,50` work. Prices are shown in rand with two decimal places. Numbers that are too large to store accurately won't be accepted.

The menu is kept in memory while the app runs. Fully reloading or restarting the app clears it.

Editing, deleting, searching, filtering and statistics are left for the Final PoE.

## Main files

| File | What it does |
| --- | --- |
| `App.tsx` | Keeps the menu data and switches between the two screens. |
| `components/MenuScreen.tsx` | Shows the dishes in a FlatList. |
| `components/AddMenuItemScreen.tsx` | Contains the form and handles Save and Cancel. |
| `components/validation.ts` | Checks the information entered into the four fields. |
| `components/MenuItem.ts` | Defines what information each dish stores. |
| `components/MenuButton.tsx` | Keeps the three buttons looking consistent. |
| `components/Styles.ts` | Contains the colours, spacing and other styles. |

`CODE_GUIDE.md` explains what happens when a dish is saved. `SUBMISSION_CHECKLIST.md` covers the remaining phone checks and the video demo.

To check for TypeScript errors, run:

```bash
npm run typecheck
```

## links

- **Video:** []

## References and assistance

## References

- [Expo SDK 54 documentation](https://docs.expo.dev/versions/v54.0.0/)
- [React Native 0.81 components](https://reactnative.dev/docs/0.81/components-and-apis)
- [Expo Picker reference](https://docs.expo.dev/versions/v54.0.0/sdk/picker/)
