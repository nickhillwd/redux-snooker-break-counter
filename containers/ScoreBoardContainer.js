import React from 'react';
import {connect} from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';

const mapStateToProps = (state) => {
  return {
    currentBreak: state.currentBreak
  }
};

const ScoreBoardContainer = connect(
  mapStateToProps
)(ScoreBoard);

export default ScoreBoardContainer;