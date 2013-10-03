/*!
 * Kepler - Copyright (c) Jackson Gariety 2013
 * https://github.com/JacksonGariety/kepler
 * MIT license
 */
 
!function (name, root, factory) {
  if (typeof define === 'function' && define.amd) define(['handlebars'], factory);
  else if (typeof exports === 'object') module.exports = factory(require('handlebars'));
  else root[name] = factory(root.Handlebars)
}('Kepler', this, function (Handlebars) {
  if (typeof Handlebars === 'undefined') return false
  
  Handlebars.registerHelper('if', function () {
    var string = ""
  
    for (var i = 0, j = arguments.length - 1; i < j; i++) string += (arguments[i] + " ")
  
    return eval(string) ? arguments[arguments.length - 1].fn(this) : arguments[arguments.length - 1].inverse(this)
  })
  
  return Handlebars
})