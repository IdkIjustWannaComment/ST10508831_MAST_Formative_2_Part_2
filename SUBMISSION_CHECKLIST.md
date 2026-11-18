# Submission Checklist

## Setup and build checks

- [ ] Dependencies install successfully with `npm install`.
- [ ] `npm run typecheck` completes with no errors.
- [ ] The app starts on the Home / Welcome screen.
- [ ] The app works on at least one physical or virtual device.
- [ ] The latest code is pushed to GitHub.

## Home checks

- [ ] “Welcome, Chef” is visible.
- [ ] View Menu opens the menu screen.
- [ ] Add Menu Item opens the form from Home.
- [ ] Cancelling from this form returns to Home.
- [ ] Home displays the total, average, and course counts.

## Add checks

- [ ] A valid dish can be added.
- [ ] The success message says that the dish was saved.
- [ ] A blank name is rejected.
- [ ] `A` is rejected as a name.
- [ ] `123` is rejected as a name or description.
- [ ] `3 Cheese Pizza` is accepted.
- [ ] A short description is rejected.
- [ ] A valid description is accepted.
- [ ] Zero and negative prices are rejected.
- [ ] More than two decimal places are rejected.
- [ ] Entered values remain after an error.
- [ ] Done Typing hides the keyboard.
- [ ] Next on the name field moves to the description.
- [ ] Save and Cancel remain outside the scrolling fields.

## Edit checks

- [ ] Edit opens the selected dish’s details.
- [ ] The heading is “Edit Menu Item”.
- [ ] The save button says “Save Changes”.
- [ ] Saving updates only the selected dish.
- [ ] Editing keeps the same dish ID.
- [ ] The total number of dishes does not increase.
- [ ] The updated statistics appear immediately.
- [ ] Cancel discards draft changes.

## Delete checks

- [ ] Delete opens the named confirmation.
- [ ] Cancel keeps the dish.
- [ ] Delete removes only the selected dish.
- [ ] Android Back closes the confirmation without deleting.
- [ ] The dish count, average and course counts update after deletion.

## Search and filter checks

- [ ] Search finds a dish name without case sensitivity.
- [ ] A Starter filter shows only starters.
- [ ] A Main Course filter shows only main courses.
- [ ] A Dessert filter shows only desserts.
- [ ] All courses restores the complete menu.
- [ ] A search and filter work together.
- [ ] Clear Search & Filter resets both controls.
- [ ] “No matching dishes” appears for no matches.
- [ ] “No menu items yet.” appears for a genuinely empty menu.
- [ ] The results message shows the filtered and total dish counts.

## Statistics checks

Example with 6 dishes:

- [ ] Total dishes equals 6.
- [ ] Average price equals the sum of all 6 prices divided by 6.
- [ ] Starter, Main Course and Dessert counts match all dishes.
- [ ] Statistics do not change when a search or filter is active.
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

- [ ] README contains running instructions and a final change log.
- [ ] CODE_GUIDE explains the files and application flow.
- [ ] GitHub repository contains the latest code.
- [ ] YouTube video is accessible and 5–8 minutes long.
- [ ] GitHub and YouTube links are added to README.
