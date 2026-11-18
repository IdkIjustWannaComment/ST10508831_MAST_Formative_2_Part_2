# Code Guide

## File responsibilities

- `App.tsx` owns the menu, the next item ID, the selected editing item, screen navigation, search/filter state and add/update/delete functions.
- `components/HomeScreen.tsx` shows the welcome message, navigation buttons and menu statistics.
- `components/MenuScreen.tsx` shows the menu controls, search, course filters, result counts and dish cards.
- `components/AddMenuItemScreen.tsx` is used for both adding and editing. It loads selected dish values and runs validation.
- `components/MenuItemCard.tsx` shows one dish and opens the edit or delete action for that dish.
- `components/MenuStatistics.tsx` shows the total, average and course counts.
- `components/DeleteConfirmation.tsx` asks for confirmation before a dish is deleted.
- `components/menuHelpers.ts` contains course options, combined filtering, statistics and rand formatting.
- `components/validation.ts` validates names, descriptions, courses and prices.
- `components/MenuItem.ts` defines the shape of a menu item.
- `components/MenuButton.tsx` provides consistent buttons.
- `components/Styles.ts` contains the shared colours and layout styles.

## Connected application flow

1. `App.tsx` starts on `HomeScreen`.
2. The chef chooses View Menu or Add Menu Item.
3. Add Menu Item opens `AddMenuItemScreen` with no selected dish.
4. The form runs `validateMenuItem()` before saving.
5. `App.tsx` creates a new dish with `nextItemId`, then returns to Menu.
6. `MenuScreen` sends each dish to `MenuItemCard`.
7. Edit sends the selected dish to `AddMenuItemScreen`, so its fields are filled before editing.
8. Save replaces that dish in `App.tsx`, keeping its existing ID.
9. Delete opens `DeleteConfirmation`; confirming removes only the selected dish from `menuItems`.
10. `MenuStatistics` reads the complete `menuItems` array, so search and filters do not change the overview.

## How the app helps the chef

- Home provides a quick overview and easy navigation.
- Menu controls make dishes easy to find.
- The form prevents incomplete or invalid dish information.
- Edit updates an existing dish without creating a duplicate.
- Delete has a confirmation because removal cannot be undone.
- Statistics show the complete menu at a glance.
