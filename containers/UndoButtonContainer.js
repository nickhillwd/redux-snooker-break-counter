import React from 'react';
import {connect} from 'react-redux';
import UndoButton from '../components/UndoButton';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  console.log('inside mapStateToProps');
  return {}
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUndoClick: () => {
      console.log(dispatch);
      dispatch(actions.undoLastShot());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoButton);