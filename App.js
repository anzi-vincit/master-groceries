import React, { useEffect, useState } from 'react';
import { View, FlatList, Modal, Alert, TextInput } from 'react-native';

import { Colors, StyleSheets } from './styles';
import { GroceryListItem } from './components/grocery-list-item';
import { AddItemModal } from './components/add-item-modal';
import { Button, Body, Container, Content, Footer, Header, Text, Title, Right, Left, Row, Col, List } from 'native-base';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

const App = () => {

  const [ shoppingList, setShoppingList ] = useState([]); 

  const [ modalVisible, setModalVisible ] = useState(false);

  const addItem = (name, quantity) => {
    setShoppingList([...shoppingList, { name, quantity, createdAt: Date.now() }]);
    setModalVisible(false);
  };

  const [fontsLoaded] = useFonts({
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });

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
    </Container>      
  );
}

export default App;
