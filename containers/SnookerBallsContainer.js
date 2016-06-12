import React from 'react';
import {connect} from 'react-redux';
import SnookerBalls from '../components/SnookerBalls';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return{

  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    onBallPot: value => {
      dispatch(actions.ballPot(value));
    }
  }
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(SnookerBalls);