var MIN_VALUE = 0x0020;
var MAX_VALUE = 0x007E;
var NUM_ADD_VALUE = 0x0030;
var STR_MAX_VALUE = 0x007E - 0x0020;
var QUOTE = '"';
var ESCAPE = "\\";
var SEP = "~"
var base = null;
var orgTable = null;
var shiftTable = null;
function makeOrgTable(min, max) {
	var result = "";
	for(var i=min; i<max ; i++) {
		result += String.fromCharCode(i);
	}
	return result;
}
function makeShiftTable(s, val) {
	return s.slice(val, s.length+1) + s.slice(0, val);
}
