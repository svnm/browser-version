var test = require('tape');
var browserVersion = require('../browser-version.js');

test('version is chrome', function (t) {
  t.equal(browserVersion(), "Chrome 39");
	t.equal(2 + 3, 5);
  t.end();
});
