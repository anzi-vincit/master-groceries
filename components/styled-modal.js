import React from 'react';
import { View, Modal } from 'react-native';

import { StyleSheets } from '../styles';

const StyledModal = (props) => {  
  return (
    <Modal
      animationType="fade"
      presentationStyle="overFullScreen"
      transparent={true}
      visible={props.visible}
      onDismiss={props.onClose}
      onRequestClose={props.onClose}
      >
        <View style={StyleSheets.modalContainer}>
          {props.children}
        </View>
    </Modal>    
  );
}

export { StyledModal };
