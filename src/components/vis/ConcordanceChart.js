
import React from 'react';
var concordance = require('./concordance');

import '../../../scss/components/concordance.scss';

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    search: React.PropTypes.string
  },

  componentDidMount: function() {
    var el = this.refs.chart;
    concordance.create(el, {
      width: '400px',
      height: '80px'
    }, this.getChartState());
  },

  // shouldComponentUpdate: function() {
  //   return false;
  // },

  componentDidUpdate: function() {
    var el = this.refs.chart;
    concordance.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.props.data,
      search: this.props.search
    };
  },

  componentWillUnmount: function() {
    var el = this.refs.chart;
    concordance.destroy(el);
  },

  render: function() {
    return (
      <div ref='chart' className="Chart"></div>
    );
  }
});


export default Chart;
