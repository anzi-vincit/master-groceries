import { StyleSheet } from 'react-native';

const styleSheets = StyleSheet.create({
  listItemOutline: {  
    borderBottomWidth: 2,
    borderBottomColor: '#d6d6d6',
    flex: 1,
    height: 64,
  },
  listItemContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
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
