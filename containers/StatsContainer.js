import React from 'react';
import {connect} from 'react-redux';
import Stats from '../components/Stats';

const mapStateToProps = (state) => {
  return {
    lastBreak: state.lastBreak
  }
};

const StatsContainer = connect(
  mapStateToProps
)(Stats);

export default StatsContainer;