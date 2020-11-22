import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import { Input, Item, Button, Form, Text } from 'native-base';

import { StyleSheets } from '../styles';

const AddItemModal = (props) => {  

  const [ itemName, setItemName ] = useState('');
  const [ itemQuantity, setQuantity ] = useState('');

  const onAddItemPress = () => {
    const shownQuantity = itemQuantity ? itemQuantity : '-';
    props.addItem(itemName, shownQuantity);
    setItemName('');
    setQuantity('');
  };

  const informationValid = () => {
    return itemName.length > 0;
  }

  return (
    <Modal
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}
      visible={props.modalVisible}
      onDismiss={props.onClose}
      onRequestClose={props.onClose}
      >
        <View style={StyleSheets.modalContainer}> 
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
                onPress={onAddItemPress}
                accessibilityLabel="Confirm adding a new item to shopping list">
                  <Text>Add items</Text>
              </Button>
            </Form>

        </View>
    </Modal>    
  );
}

export { AddItemModal };
