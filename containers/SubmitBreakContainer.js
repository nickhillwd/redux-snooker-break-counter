import React from 'react';
import {connect} from 'react-redux';
import SubmitBreak from '../components/SubmitBreak';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return{
    currentBreak: state.currentBreak
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitBreak: value => {
      dispatch(actions.submitBreak(value));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitBreak);