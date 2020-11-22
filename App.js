import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Button, Body, Container, Header, Text, Title, Right, Left } from 'native-base';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { GroceryListItem } from './components/grocery-list-item';
import { AddItemModal } from './components/add-item-modal';

const App = () => {

  const [fontsLoaded] = useFonts({
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  
  const [ shoppingList, setShoppingList ] = useState([]); 
  const [ modalVisible, setModalVisible ] = useState(false);

  const addItem = (name, quantity) => {
    setShoppingList([...shoppingList, { name, quantity, createdAt: Date.now() }]);
    setModalVisible(false);
  };

  const onNewShoppingTrip = () => {
    setShoppingList([]);
  }

  if (!fontsLoaded) {
    return <AppLoading />
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
        <AddItemModal addItem={addItem} modalVisible={modalVisible} onClose={() => setModalVisible(false)} />
        <FlatList
          data={shoppingList}
          renderItem={({item}) => <GroceryListItem item={item} />}
          keyExtractor={(item) => `${item.createdAt}-${item.name}`}
        />
        <Button
          block
          success
          onPress={() => setModalVisible(true)}
          accessibilityLabel="Add new item to the shopping list">
            <Text>Add a new grocery item</Text>
        </Button>
        <Button
          block
          danger
          onPress={onNewShoppingTrip}
          accessibilityLabel="Start a new shopping trip">
            <Text>Start a new shopping trip</Text>
        </Button>         
    </Container>      
  );
}

export default App;
