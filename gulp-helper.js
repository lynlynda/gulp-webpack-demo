'use strict';
var path = require('path');

function filepath(filepath) {
  //console.log(filepath)
  let filename = path.basename(filepath);
  let dirname = path.dirname(filepath);
  let relative = path.relative('src', dirname.toString())

  let result = {
    'filename': filename,
    'relative': relative
  }

  return result;
}
exports.filepath = filepath