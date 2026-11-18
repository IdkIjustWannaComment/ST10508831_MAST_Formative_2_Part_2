import { Platform, StyleSheet } from 'react-native';

export const colours = {
  green: '#285F53',
  paleGreen: '#EAF2EF',
  white: '#FFFFFF',
  text: '#202724',
  muted: '#5A6761',
  border: '#AABCB4',
  error: '#B42318',
  errorBackground: '#FFF7F6',
  cancel: '#52625B',
  red: '#B42318',
  redBackground: '#FFF0EE',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colours.white,
  },
  appContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
    backgroundColor: colours.white,
  },
  appHeader: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: colours.paleGreen,
    borderBottomWidth: 1,
    borderBottomColor: colours.border,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colours.green,
  },
  appSubtitle: {
    fontSize: 14,
    color: colours.muted,
    marginTop: 4,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colours.text,
    marginBottom: 16,
  },
  buttonSpace: {
    marginBottom: 18,
  },
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: colours.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: colours.cancel,
  },
  buttonText: {
    color: colours.white,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  successMessage: {
    color: colours.green,
    backgroundColor: colours.paleGreen,
    borderLeftWidth: 4,
    borderLeftColor: colours.green,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 23,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyMenu: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#F5F8F6',
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 6,
  },
  emptyTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: colours.text,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 23,
    color: colours.muted,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 6,
    marginBottom: 14,
    overflow: 'hidden',
  },
  dishName: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '700',
    color: colours.text,
    backgroundColor: '#F5F8F6',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.text,
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  courseAndPrice: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: colours.green,
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 12,
  },
  listHint: {
    fontSize: 14,
    lineHeight: 20,
    color: colours.muted,
    paddingVertical: 8,
  },
  formContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  formHint: {
    fontSize: 15,
    lineHeight: 22,
    color: colours.muted,
    marginTop: -8,
    marginBottom: 22,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colours.text,
    marginBottom: 8,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: colours.text,
    backgroundColor: colours.white,
  },
  descriptionInput: {
    minHeight: 100,
  },
  pickerBorder: {
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 5,
    backgroundColor: colours.white,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    minHeight: 50,
    height: Platform.OS === 'ios' ? 180 : 52,
    color: colours.text,
    backgroundColor: colours.white,
    fontSize: 16,
    borderWidth: 0,
  },
  pickerItem: {
    height: 180,
    fontSize: 17,
    color: colours.text,
  },
  priceHint: {
    fontSize: 13,
    lineHeight: 19,
    color: colours.muted,
    marginTop: 7,
  },
  inputError: {
    borderColor: colours.error,
    backgroundColor: colours.errorBackground,
  },
  errorText: {
    fontSize: 14,
    lineHeight: 20,
    color: colours.error,
    marginTop: 7,
  },
  errorSummary: {
    color: colours.error,
    backgroundColor: colours.errorBackground,
    borderLeftWidth: 3,
    borderLeftColor: colours.error,
    padding: 12,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  saveButtonSpace: {
    marginTop: 2,
    marginBottom: 16,
  },
  cancelButtonSpace: {
    marginBottom: 8,
  },

  homeScreen: {
    flex: 1,
  },
  homeContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  homeHeading: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    color: colours.text,
    marginBottom: 8,
  },
  homeIntro: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.muted,
    marginBottom: 22,
  },
  homeButtonSpace: {
    marginBottom: 12,
  },
  homeStatisticsSpace: {
    marginTop: 10,
  },

  statisticsCard: {
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 6,
    backgroundColor: '#F5F8F6',
    padding: 16,
    marginBottom: 16,
  },
  statisticsTitle: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '700',
    color: colours.text,
    marginBottom: 12,
  },
  statisticsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statisticItem: {
    width: '50%',
    paddingRight: 10,
    marginBottom: 12,
  },
  statisticLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: colours.muted,
  },
  statisticValue: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: colours.green,
  },

  searchLabel: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    color: colours.text,
    marginBottom: 8,
  },
  searchInput: {
    marginBottom: 14,
  },
  filterLabel: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    color: colours.text,
    marginBottom: 8,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  filterButton: {
    minHeight: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colours.green,
    borderRadius: 20,
    backgroundColor: colours.white,
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  activeFilterButton: {
    backgroundColor: colours.green,
  },
  filterButtonText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: colours.green,
  },
  activeFilterButtonText: {
    color: colours.white,
  },
  clearButtonSpace: {
    marginBottom: 16,
  },
  resultsMessage: {
    fontSize: 15,
    lineHeight: 22,
    color: colours.muted,
    marginBottom: 12,
  },

  cardActions: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  cardActionButton: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: colours.red,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(32, 39, 36, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: colours.white,
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: colours.text,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    lineHeight: 24,
    color: colours.muted,
    marginBottom: 20,
  },
  modalActions: {
    gap: 12,
  },

  formScreen: {
    flex: 1,
  },
  formKeyboardView: {
    flex: 1,
  },
  formScroll: {
    flex: 1,
  },
  formFooter: {
    backgroundColor: colours.white,
    borderTopWidth: 1,
    borderTopColor: colours.border,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  doneTypingButton: {
    alignSelf: 'flex-end',
    minHeight: 40,
    justifyContent: 'center',
    marginBottom: 8,
  },
  doneTypingText: {
    color: colours.green,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
  },
});
