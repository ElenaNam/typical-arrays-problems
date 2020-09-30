
exports.min = function min (array) {
  if (array && array.length)  {
    return Math.min.apply( Math, array );
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length)  {
    return Math.max.apply( Math, array );
  }  
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length)  {
    return array.reduce((a, b) => (a + b)) / array.length;
    
  }  
  return 0;
}
