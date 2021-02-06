import React, { useState } from 'react';
import { Input, Item, Button, Text, Form } from 'native-base';
import { connect } from 'react-redux';

import { StyledModal } from '../components/styled-modal';
import { StyleSheets } from '../styles';
import { addGroceryItem, hideModal, MODAL_TYPES } from '../actions';
import { selectModalVisible } from '../reducers/modals';

const AddItemModal = (props) => {
  const [ itemName, setItemName ] = useState('');
  const [ itemQuantity, setQuantity ] = useState('');

  const onAddItem = () => {
    const shownQuantity = itemQuantity ? itemQuantity : '-';
    props.addGroceryItem({
      name: itemName,
      quantity: shownQuantity,
      id: Date.now()
    });
    props.hideModal();
    setItemName('');
    setQuantity('');
  };

  const informationValid = () => {
    return itemName.length > 0;
  }

  return (
    <StyledModal
      visible={props.visible}
      onClose={props.hideModal}
      >
        <Form style={StyleSheets.modalItemHolder}>
          <Item style={StyleSheets.formElement} >
              <Input onChangeText={setItemName} placeholder='Grocery item' />
          </Item>
          <Item style={StyleSheets.formElement} >
            <Input onChangeText={setQuantity} placeholder='Quantity' />
          </Item> 
          <Button
            style={StyleSheets.formElement}
            disabled={!informationValid()}
            success={informationValid()}
            block
            onPress={onAddItem}
            accessibilityLabel="Confirm adding a new item to shopping list">
              <Text>Add items</Text>
          </Button>
        </Form>
    </StyledModal>    
  );
}

const mapStateToProps = (state) => ({
  visible: selectModalVisible(state, MODAL_TYPES.ADD_NEW_ITEM),
});

export default connect(mapStateToProps, { addGroceryItem, hideModal })(AddItemModal);
