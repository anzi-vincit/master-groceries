import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { StyledModal } from '../components/styled-modal';
import { StyleSheets } from '../styles';
import { hideModal, MODAL_TYPES, startNewShoppingTrip } from '../actions';
import { selectGroceryItemAtSpot, selectModalVisible } from '../reducers/modals';
import { selectGroceryItem } from '../reducers/shopping-list';

const TakeActionModal = (props) => {
  return (
    <StyledModal
      visible={props.visible}
      onClose={props.hideModal}
      >
      <View style={StyleSheets.modalItemHolder}>
        { props.item && props.item.shopped ?
          <Button
            style={StyleSheets.formElement}
            success
            block
            onPress={props.hideModal}
            accessibilityLabel="Cancel starting a new shopping trip">
              <Text>Mark unshopped</Text>
            </Button>
        :
          <Button
            style={StyleSheets.formElement}
            success
            block
            onPress={props.hideModal}
            accessibilityLabel="Cancel starting a new shopping trip">
              <Text>Edit item</Text>
          </Button>
        }
        <Button
          style={StyleSheets.formElement}
          success
          block
          onPress={props.hideModal}
          accessibilityLabel="Confirm starting a new shopping trip">
            <Text>Remove item</Text>
        </Button>
        <Button
          style={StyleSheets.formElement}
          success
          block
          onPress={props.hideModal}
          accessibilityLabel="Confirm starting a new shopping trip">
            <Text>Close</Text>
        </Button>
      </View>
    </StyledModal>    
  );
}

const mapStateToProps = (state) => ({
  visible: selectModalVisible(state, MODAL_TYPES.ACTION_PER_ITEM),
  item: selectGroceryItem(state, selectGroceryItemAtSpot(state)),
});

export default connect(mapStateToProps, { hideModal, startNewShoppingTrip })(TakeActionModal);
