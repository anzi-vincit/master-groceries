import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { StyleSheets } from '../styles';

const GroceryListItem = (props) => {
    return (
      <View style={StyleSheets.listItemContainer}>
        <Text style={StyleSheets.listItemText} >{props.item.name}</Text>
        <Text style={StyleSheets.listItemText} >{props.item.quantity}</Text>
      </View>
    );    
}

export { GroceryListItem };
