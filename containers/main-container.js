import React from 'react';
import { FlatList } from 'react-native';
import { Button, Body, Container, Header, Text, Title, Right, Left } from 'native-base';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { GroceryListItem } from '../components/grocery-list-item';
import AddItemModal from './add-item-modal';
import ConfrimShoppingTripModal from './confirm-shopping-trip-modal';
import { addGroceryItem, startNewShoppingTrip, markItemShopped, showModal, hideModal, MODAL_TYPES } from '../actions';
import { selectShoppingList, selectModals } from '../reducers'

const MainContainer = (props) => {
  const shoppingListEmpty = () => {
    return props.shoppingList.length === 0;
  }

  const onPressNewShoppingTrip = () => {
    const unshoppedItems = _.some(props.shoppingList, item => !item.shopped);

    if(unshoppedItems) {
      props.showModal(MODAL_TYPES.CONFIRM_NEW_SHOPPING_TRIP);
    } else {
      props.startNewShoppingTrip();
    }
  }

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Master Groceries</Title>
        </Body>
        <Right />
      </Header>      
      <AddItemModal />
      <ConfrimShoppingTripModal />
      <FlatList
        data={props.shoppingList}
        renderItem={({item}) => <GroceryListItem item={item} onItemShopped={props.markItemShopped} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        block
        success
        onPress={() => props.showModal(MODAL_TYPES.ADD_NEW_ITEM)}
        accessibilityLabel="Add new item to the shopping list">
          <Text>Add a new grocery item</Text>
      </Button>
      <Button
        block
        disabled={shoppingListEmpty()}
        danger={!shoppingListEmpty()}
        onPress={onPressNewShoppingTrip}
        accessibilityLabel="Start a new shopping trip">
          <Text>Start a new shopping trip</Text>
      </Button>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  shoppingList: selectShoppingList(state),
});

export default connect(mapStateToProps, { addGroceryItem, startNewShoppingTrip, markItemShopped, showModal, hideModal })(MainContainer);
