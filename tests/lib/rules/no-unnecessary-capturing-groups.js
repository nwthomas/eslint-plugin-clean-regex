"use strict";

const { testRule } = require("../../test-util");

const errors = [{
	message: "This capturing is inside another capturing and has no references to it. " +
		"Consider replacing it with a non-capturing group."
}];

testRule(__filename, undefined, {
	valid: [
		String(/(foo)\s*(bar)/),
		String(/(.(.).)\2./),
		String(/((\w)\2)/),
		String(/((?<foo>\w)\k<foo>)/),
		String(/(foo(?=(.*))\W)/),
	],
	invalid: [
		{ code: String(/(())/), errors },
		{ code: String(/(foo(bar))/), errors },
	]
});
