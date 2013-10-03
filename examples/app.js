// Require Kepler
var Handlebars = require('handlebars')
  , Kepler = require('..')
  , input
  , output

// Example 1
console.log("Example 1")
input = "\"My name is {{#if true '||' false}}David{{else}}Anon{{/if}}.\""
console.log("input =  " + input)
output = Kepler.compile(input)()
console.log("output = " + output)

// Example 2
console.log("\nExample 2")
input = "\"My name is {{#if true '&&' false}}David{{else}}Anon{{/if}}.\""
console.log("input = " + input)
output = Kepler.compile(input)()
console.log("output = " + output)

// Example 3
console.log("\nExample 3")
input = "\"My name is {{#if '(' a '||' b ') &&' true}}David{{else}}Anon{{/if}}.\""
console.log("input = " + input)
output = Kepler.compile(input)({ a: true, b: false })
console.log("output = " + output)