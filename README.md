# Christoffel's Menu - Final PoE

Nikhil Govender | ST10508831 | MAST5112

This React Native Expo app helps a chef add, view, edit, delete, search and filter restaurant menu items. The app uses a green and white design and works on Android, iOS and web.

## Running the app

Requirements: Node.js and npm.

```bash
cd christoffels-menu-part2
npm install
npm run start
```

Choose a platform from the Expo terminal:

- Press `a` for Android
- Press `i` for iOS where supported
- Press `w` for web
- Scan the QR code with Expo Go on a phone

For a web browser on Windows:

```bash
cd christoffels-menu-part2
npm run web
```

Check for TypeScript errors:

```bash
cd christoffels-menu-part2
npm run typecheck
```

## Features

- Home / welcome screen with menu statistics
- Add menu items
- Edit existing menu items
- Delete items with a confirmation popup
- Search dish names without regard to capitalisation
- Filter by Starter, Main Course, Dessert or All courses
- Search and course filtering work together
- Clear search and filter settings
- Full-menu total, average price and course counts
- Filtered result count and no-results message
- Success messages after add, update and delete actions
- Cancel and Android Back support
- In-memory menu storage for the duration of the app session

## Validation

Dish names must be 3–60 characters and contain at least one letter. Descriptions must be 10–300 characters and contain at least one letter. Numbers are allowed with letters, such as “3 Cheese Pizza”.

Courses must be Starter, Main Course or Dessert. Prices must be greater than zero and may contain up to two decimal places. Both `55.50` and `55,50` are accepted.

## Part 2 to Part 3 change log

- Added a welcome screen and reusable menu overview.
- Replaced the Part 2 two-screen switch with Home, Menu and Form navigation.
- Added editing while keeping an item's existing ID.
- Added delete confirmation instead of deleting immediately.
- Added case-insensitive dish name search.
- Added course filters and combined search/filtering.
- Added a clear search and filter action.
- Added full-menu statistics that do not change because of filters.
- Added reusable menu card, statistics, confirmation and helper components.
- Strengthened dish name and description validation.
- Added fixed form controls and a Done Typing keyboard control.
- Improved spacing, accessibility labels and success/error messages.

## Main files

| File | Purpose |
| --- | --- |
| `App.tsx` | Stores menu data and controls screen navigation and menu operations. |
| `components/HomeScreen.tsx` | Displays the welcome screen and menu overview. |
| `components/MenuScreen.tsx` | Displays search, filters, statistics and menu cards. |
| `components/AddMenuItemScreen.tsx` | Handles both adding and editing dishes. |
| `components/MenuItemCard.tsx` | Displays one dish and its Edit/Delete actions. |
| `components/MenuStatistics.tsx` | Displays full-menu statistics. |
| `components/DeleteConfirmation.tsx` | Confirms before deleting a dish. |
| `components/menuHelpers.ts` | Contains filtering, statistics and rand formatting functions. |
| `components/validation.ts` | Checks form values and converts valid prices. |
| `components/MenuItem.ts` | Defines the menu item data type. |
| `components/MenuButton.tsx` | Provides reusable menu buttons. |
| `components/Styles.ts` | Provides colours and shared styles. |

## Refactoring

Repeated statistics were moved into `MenuStatistics.tsx`. Repeated dish cards were moved into `MenuItemCard.tsx`. Search, filtering, calculation and formatting were moved into `menuHelpers.ts`. The add and edit workflow shares `AddMenuItemScreen.tsx` instead of using duplicate forms.

## Submission links

- **GitHub repository:** https://github.com/IdkIjustWannaComment/ST10508831_MAST_Formative_2_Part_2
- **YouTube video:** https://www.youtube.com/watch?v=HEM_9Arh5YA

## References

- [Expo SDK 54 documentation](https://docs.expo.dev/versions/v54.0.0/)
- [React Native 0.81 components](https://reactnative.dev/docs/0.81/components-and-apis)
- [React Native Picker](https://docs.expo.dev/versions/v54.0.0/sdk/picker/)
- [React documentation](https://react.dev/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Assistance disclosure

Part 2 used ChatGPT for estimating possible marks. Available chat: https://chatgpt.com/share/6acd4bd0-6584-83ea-9185-9c9e1e816cb5

GitHub Copilot assisted with implementing, refactoring and documenting the Part 3 changes.
