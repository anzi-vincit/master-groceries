import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import * as Haptics from 'expo-haptics';

import { StyleSheets } from '../styles';

const GroceryListItem = (props) => {

    const onSwipe = (gestureName, gestureState) => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
      if ( gestureName === SWIPE_LEFT || gestureName === SWIPE_RIGHT ) {
        props.onItemShopped(props.item.id);
      }
    }

    const getTextStyle = () => {
      return props.item.shopped ? 
        {
          color: '#808080',
          textDecorationLine: 'line-through',
        } :
        {
          color: '#000000',
          textDecorationLine: 'none',         
        };
    }

    const getContainerStyle = () => {
      return props.item.shopped ? 
      {
        backgroundColor: '#f0f0f0',
      } :
      {
        backgroundColor: '#ffffff',         
      };
    }

    const onLongPress = () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }

    return (
      <View style={[StyleSheets.listItemOutline, getContainerStyle()]}>
        <GestureRecognizer
          style={{flex: 1 }}
          onSwipe={onSwipe}
          config={{gestureIsClickThreshold: 64}} >
            <TouchableWithoutFeedback onLongPress={onLongPress} >
              <View style={StyleSheets.listItemContainer}>
                <Text style={[StyleSheets.listItemText, getTextStyle()]} >{props.item.name}</Text>
                <Text style={[StyleSheets.listItemText, getTextStyle()]} >{props.item.quantity}</Text>
              </View>
            </TouchableWithoutFeedback>
        </GestureRecognizer>
      </View>
    );    
}

export { GroceryListItem };
