/**
 * Zero dependency "test suite"
 */
const router = require('./index.js');

function mockRoute(string) {
  router.location = function() {
    return string;
  }
}

var failed = 0;
var tests = [];

function test(options) {
  tests.push(options);
}

function runTest(options) {
  mockRoute(options.pathname);
  let success = options.action.call(router, options.match, () => {}) === options.assertion;
  if (success) {
    console.log(`\x1b[32mSuccess: expected ${options.assertion} [${options.pathname} ${options.action.name} ${options.match}]` )
  } else {
    failed = 1;
    console.log(`\x1b[31mFail: expected ${options.assertion} [${options.pathname} ${options.action.name} ${options.match}]`);
  }
}

// includes
test({
  pathname: '/bar?baz', 
  action: router.includes,
  match: '/baz',
  assertion: false
});
test({
  pathname: '/foo/bar/bank', 
  action: router.includes,
  match: '/bar',
  assertion: true
});
test({
  pathname: '/foo/bar/bank', 
  action: router.includes,
  match: 'r/b',
  assertion: true
});
test({
  pathname: '/crash#boom', 
  action: router.includes,
  match: '#boom',
  assertion: false
})

// is
test({
  pathname: '/foo', 
  action: router.is,
  match: '/foo',
  assertion: true
});
test({
  pathname: '/foo?bar', 
  action: router.is,
  match: '/foo',
  assertion: true
});
test({
  pathname: '/bar?baz', 
  action: router.is,
  match: '/foo',
  assertion: false
});
test({
  pathname: '/bar?baz', 
  action: router.is,
  match: '/foo',
  assertion: false
});
test({
  pathname: '/bar?baz', 
  action: router.is,
  match: '/foo',
  assertion: false
});

// beginsWith
test({
  pathname: '/bar?baz', 
  action: router.beginsWith,
  match: '/foo',
  assertion: false
});
test({
  pathname: '/bar?baz', 
  action: router.beginsWith,
  match: '/?baz',
  assertion: false
});


tests.forEach(runTest)
if (failed) {
  console.log(`\n\x1b[31mA test has failed.\n`);
  process.exit(1);
}

