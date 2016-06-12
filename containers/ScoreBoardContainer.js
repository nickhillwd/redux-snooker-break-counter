import React from 'react';
import {connect} from 'react-redux';
import ScoreBoard from '../components/ScoreBoard';

const mapStateToProps = (state) => {
  return {
    currentBreak: state.currentBreak
  }
};

const ScoreBoardDiv = connect(
  mapStateToProps
)(ScoreBoard);

export default ScoreBoardDiv;