const test = require('ava');
const fs = require('fs');
const stylelint = require('stylelint');

const config = require('../');

const cssModule = fs.readFileSync("./test/css-module.css", "utf-8");

test('Test that for proper configuration config generates no warnings and no errors', (t) => {
  t.plan(2);

  return stylelint.lint({
    code: cssModule,
    config,
  }).then((result) => {
    t.false(result.errored);
    t.is(result.results[0].warnings.length, 0);
  });
});
