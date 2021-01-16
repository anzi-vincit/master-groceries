import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { StyledModal } from '../components/styled-modal';
import { StyleSheets } from '../styles';
import { hideModal, MODAL_TYPES, startNewShoppingTrip } from '../actions';
import { selectModalVisible } from '../reducers/modals';

const ConfrimShoppingTripModal = (props) => {
  const onConfirm = () => {
    props.startNewShoppingTrip();
    props.hideModal();
  }

  return (
    <StyledModal
      visible={props.visible}
      onClose={props.hideModal}
      >
      <View style={StyleSheets.modalItemHolder}>
        <Text>Not all the items were checked.</Text>
        <Text>Are you sure you want to clear the list?</Text>
        <Button
          style={StyleSheets.formElement}
          success
          block
          onPress={props.hideModal}
          accessibilityLabel="Cancel starting a new shopping trip">
            <Text>No</Text>
        </Button>
        <Button
          style={StyleSheets.formElement}
          success
          block
          onPress={onConfirm}
          accessibilityLabel="Confirm starting a new shopping trip">
            <Text>Yes</Text>
        </Button>
      </View>
    </StyledModal>    
  );
}

const mapStateToProps = (state) => ({
  visible: selectModalVisible(state, MODAL_TYPES.CONFIRM_NEW_SHOPPING_TRIP),
});

export default connect(mapStateToProps, { hideModal, startNewShoppingTrip })(ConfrimShoppingTripModal);
