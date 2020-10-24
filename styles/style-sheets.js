import { StyleSheet } from 'react-native';

const styleSheets = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 32,
  },
  listItemContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#d6d6d6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 64,
    paddingLeft: 32,
    paddingRight: 32,
  },
  listItemText: {
    fontSize: 22,
    textShadowOffset: {
      width: 3,
      height: 2,
    },
    textShadowColor: '#ededed',
    textShadowRadius: 2,
  },
  modalContainer: {
    backgroundColor: 'rgba(235, 235, 235, 0.92)',
    flex: 1,
    flexDirection: 'column',    
    justifyContent: 'center',
  },
  modalItemHolder: {
    borderRadius: 15,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    backgroundColor: '#f7f7f7',
    marginHorizontal: 0,
    paddingHorizontal: 10,
    paddingVertical: 24,
    justifyContent: 'space-between',
  },
  formElement: {
    marginBottom: 8,
    marginTop: 8,
  },
});

export default styleSheets;
