# Submission Checklist

## Setup and build checks

- [ ] Dependencies install successfully with `npm install`.
- [x] `npm run typecheck` completes with no errors.
- [x] The app starts on the Home / Welcome screen.
- [ ] The app works on at least one physical or virtual device.
- [ ] The latest code is pushed to GitHub.

## Home checks

- [x] “Welcome, Chef” is visible.
- [x] View Menu opens the menu screen.
- [x] Add Menu Item opens the form from Home.
- [x] Cancelling from this form returns to Home.
- [x] Home displays the total, average, and course counts.

## Add checks

- [x] A valid dish can be added.
- [x] The success message says that the dish was saved.
- [x] A blank name is rejected.
- [x] `A` is rejected as a name.
- [x] `123` is rejected as a name or description.
- [x] `3 Cheese Pizza` is accepted.
- [x] A short description is rejected.
- [x] A valid description is accepted.
- [x] Zero and negative prices are rejected.
- [x] More than two decimal places are rejected.
- [x] Entered values remain after an error.
- [x] Done Typing hides the keyboard.
- [x] Next on the name field moves to the description.
- [x] Save and Cancel remain outside the scrolling fields.

## Edit checks

- [x] Edit opens the selected dish’s details.
- [x] The heading is “Edit Menu Item”.
- [x] The save button says “Save Changes”.
- [x] Saving updates only the selected dish.
- [x] Editing keeps the same dish ID.
- [x] The total number of dishes does not increase.
- [x] The updated statistics appear immediately.
- [x] Cancel discards draft changes.

## Delete checks

- [x] Delete opens the named confirmation.
- [x] Cancel keeps the dish.
- [x] Delete removes only the selected dish.
- [ ] Android Back closes the confirmation without deleting.
- [x] The dish count, average and course counts update after deletion.

## Search and filter checks

- [x] Search finds a dish name without case sensitivity.
- [x] A Starter filter shows only starters.
- [x] A Main Course filter shows only main courses.
- [x] A Dessert filter shows only desserts.
- [x] All courses restores the complete menu.
- [x] A search and filter work together.
- [x] Clear Search & Filter resets both controls.
- [x] “No matching dishes” appears for no matches.
- [x] “No menu items yet.” appears for a genuinely empty menu.
- [x] The results message shows the filtered and total dish counts.

## Statistics checks

Example with 6 dishes:

- [ ] Total dishes equals 6.
- [ ] Average price equals the sum of all 6 prices divided by 6.
- [ ] Starter, Main Course and Dessert counts match all dishes.
- [x] Statistics do not change when a search or filter is active.
- [ ] Average and counts update immediately after add, edit or delete.

## 5–8 minute demonstration plan

1. Open Home and explain the welcome screen and overview. (30–45 seconds)
2. Add at least two dishes, including one starter and one main course. (60–90 seconds)
3. Show validation with an invalid name, description or price. (45–60 seconds)
4. Edit one dish and show that the total remains unchanged. (45–60 seconds)
5. Search by dish name and demonstrate a case difference. (30–45 seconds)
6. Apply a course filter and show combined search/filter behaviour. (60–75 seconds)
7. Clear the search and filter. (20–30 seconds)
8. Show delete confirmation, Cancel, Android Back, and successful deletion. (60–90 seconds)
9. Show the updated statistics and Home navigation. (30–45 seconds)
10. End with the GitHub and YouTube links. (20–30 seconds)

## Final submission

- [x] README contains running instructions and a final change log.
- [x] CODE_GUIDE explains the files and application flow.
- [ ] GitHub repository contains the latest code.
- [ ] YouTube video is accessible and 5–8 minutes long.
- [ ] GitHub and YouTube links are added to README.
