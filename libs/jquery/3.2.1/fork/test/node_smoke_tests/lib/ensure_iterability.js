"use strict";

var assert = require("assert");

module.exports = function ensureIterability() {
	require("jsdom").env("", function (errors, window) {
		assert.ifError(errors);

		var i,
		ensureJQuery = require("./ensure_jquery"),
		jQuery = require("../../../dist/jquery.js")(window),
		elem = jQuery("<div></div><span></span><a></a>"),
		result = "";

		ensureJQuery(jQuery);var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

			for (var _iterator = elem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {i = _step.value;
				result += i.nodeName;
			}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

		assert.strictEqual(result, "DIVSPANA", "for-of doesn't work on jQuery objects");
	});
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc3VyZV9pdGVyYWJpbGl0eV9lczYuanMiXSwibmFtZXMiOlsiYXNzZXJ0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnN1cmVJdGVyYWJpbGl0eSIsImVudiIsImVycm9ycyIsIndpbmRvdyIsImlmRXJyb3IiLCJpIiwiZW5zdXJlSlF1ZXJ5IiwialF1ZXJ5IiwiZWxlbSIsInJlc3VsdCIsIm5vZGVOYW1lIiwic3RyaWN0RXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLFNBQVNDLFFBQVMsUUFBVCxDQUFiOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCLFNBQVNDLGlCQUFULEdBQTZCO0FBQzdDSCxTQUFTLE9BQVQsRUFBbUJJLEdBQW5CLENBQXdCLEVBQXhCLEVBQTRCLFVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTJCO0FBQ3REUCxTQUFPUSxPQUFQLENBQWdCRixNQUFoQjs7QUFFQSxNQUFJRyxDQUFKO0FBQ0NDLGlCQUFlVCxRQUFTLGlCQUFULENBRGhCO0FBRUNVLFdBQVNWLFFBQVMseUJBQVQsRUFBc0NNLE1BQXRDLENBRlY7QUFHQ0ssU0FBT0QsT0FBUSxpQ0FBUixDQUhSO0FBSUNFLFdBQVMsRUFKVjs7QUFNQUgsZUFBY0MsTUFBZCxFQVRzRDs7QUFXdEQsd0JBQVdDLElBQVgsOEhBQWtCLENBQVpILENBQVk7QUFDakJJLGNBQVVKLEVBQUVLLFFBQVo7QUFDQSxJQWJxRDs7QUFldERkLFNBQU9lLFdBQVAsQ0FBb0JGLE1BQXBCLEVBQTRCLFVBQTVCLEVBQXdDLHVDQUF4QztBQUNBLEVBaEJEO0FBaUJBLENBbEJEIiwiZmlsZSI6ImVuc3VyZV9pdGVyYWJpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuc3VyZUl0ZXJhYmlsaXR5KCkge1xuXHRyZXF1aXJlKCBcImpzZG9tXCIgKS5lbnYoIFwiXCIsIGZ1bmN0aW9uKCBlcnJvcnMsIHdpbmRvdyApIHtcblx0XHRhc3NlcnQuaWZFcnJvciggZXJyb3JzICk7XG5cblx0XHR2YXIgaSxcblx0XHRcdGVuc3VyZUpRdWVyeSA9IHJlcXVpcmUoIFwiLi9lbnN1cmVfanF1ZXJ5XCIgKSxcblx0XHRcdGpRdWVyeSA9IHJlcXVpcmUoIFwiLi4vLi4vLi4vZGlzdC9qcXVlcnkuanNcIiApKCB3aW5kb3cgKSxcblx0XHRcdGVsZW0gPSBqUXVlcnkoIFwiPGRpdj48L2Rpdj48c3Bhbj48L3NwYW4+PGE+PC9hPlwiICksXG5cdFx0XHRyZXN1bHQgPSBcIlwiO1xuXG5cdFx0ZW5zdXJlSlF1ZXJ5KCBqUXVlcnkgKTtcblxuXHRcdGZvciAoIGkgb2YgZWxlbSApIHtcblx0XHRcdHJlc3VsdCArPSBpLm5vZGVOYW1lO1xuXHRcdH1cblxuXHRcdGFzc2VydC5zdHJpY3RFcXVhbCggcmVzdWx0LCBcIkRJVlNQQU5BXCIsIFwiZm9yLW9mIGRvZXNuJ3Qgd29yayBvbiBqUXVlcnkgb2JqZWN0c1wiICk7XG5cdH0gKTtcbn07XG4iXX0=
