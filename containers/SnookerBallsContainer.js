import React from 'react';
import {connect} from 'react-redux';
import SnookerBalls from '../components/SnookerBalls';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return{
    currentBreak: state.currentBreak
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBallPot: (value, ballColour) => {
      dispatch(actions.ballPot(value, ballColour));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnookerBalls);