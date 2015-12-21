
var d3 = require('d3');

var concordance = {};

concordance.create = function(el, props, state) {
  var heightAbs = props.height.replace("px", "");
  var widthAbs = props.width.replace("px", "");

  var svg = d3.select(el).append('svg')
      .attr('class', 'concordance')
      .attr('width', widthAbs)
      .attr('height', heightAbs);

  var g = svg.append('g')
    .attr('class', 'concordance-lines');

  g.append('rect')
    .attr('class', 'concordance-background')
    .attr('width', widthAbs)
    .attr('height', heightAbs);

  // svg.append('g')
  //     .attr("transform", "translate(0," + (heightAbs - 20) + ")")
  //     .attr('class', 'concordance-axis');

  this.update(el, state);
};

concordance.update = function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.data);
  // var axis = this._axis(el, scales);
  // this._drawAxis(el, axis);
  this._draw(el, scales, state.data, state.search);
};

concordance._scales = function(el, data) {
  if (!data) {
    return null;
  }
  // var margin = 10;
  var width = el.children[0].offsetWidth;
  // var height = el.children[0].offsetHeight;


  var x = d3.scale.linear().domain([0, data.length])
    .range([0, width]);

  return {x: x};
};

// concordance._axis = function(el, scales) {
//   var axis = d3.svg.axis().orient("bottom")
//     .outerTickSize(0);
//
//   axis.scale(scales.x);
//   return {x: axis};
// };

concordance.destroy = function() {
  // Any clean-up would go here
  // in this example there is nothing to do
};

// concordance._drawAxis = function(el, axis) {
//   d3.select(el).selectAll('.concordance-axis')
//     .call(axis.x);
// };

concordance._draw = function(el, scales,  data, searchTerm) {
  var g = d3.select(el).selectAll('.concordance-lines');

  var selectedWords = data.map(function(w,i) { return {w:w,i:i}; }).filter(function(d) { return d.w === searchTerm; });

  // var width = el.offsetWidth;
  var height = el.offsetHeight;

  var word = g.selectAll('.concordance-line')
    .data(selectedWords, function(w) { return w.i; });

  // ENTER
  word.enter().append('line')
      .attr('class', 'concordance-line');

  // ENTER & UPDATE
  word.attr("x1", function(d) { return scales.x(d.i); })
      .attr("x2", function(d) { return scales.x(d.i); })
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke-width", 1);

  // EXIT
  word.exit()
      .remove();
};

module.exports = concordance;
