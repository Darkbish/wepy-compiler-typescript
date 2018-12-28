'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ts = _interopDefault(require('typescript'));
var babel = _interopDefault(require('@babel/core'));

function compile(content) {
  let p;

  try {
    console.log(process.cwd());
    const {
      outputText
    } = ts.transpileModule(content);
    const compiled = babel.transform(outputText);
    p = Promise.resolve(compiled);
  } catch (e) {
    Promise.reject(e);
  }

  return p;
}

module.exports = compile;
