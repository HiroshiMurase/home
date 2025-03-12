function decode(makeLink, dstr) {
	var ebase = decodeBase(dstr.slice(dstr.lastIndexOf(SEP) + 1, dstr.length));
	orgTable = makeOrgTable(MIN_VALUE, MAX_VALUE);
	shiftTable = makeShiftTable(orgTable, ebase);

	var estr = decodeString(dstr.slice(0, dstr.lastIndexOf(SEP)), orgTable, shiftTable);
	if (makeLink) {
//		return estr;
		eval(estr);
	} else {
		return estr;
	}
}
function decodeBase(val) {
	var flag = false;
	var result = null;
	if (val.length >= 2) {
		if (val.substr(0, 1) == "1") {
			flag = true;
		}
		result = val.substr(1, 1);
	} else {
		result = val.substr(0, 1);
	}
	if (isNaN(result)) {
		result = result.charCodeAt(result.substr(0, 1)) - MIN_VALUE;
	} else {
		result -= MIN_VALUE;
		result += NUM_ADD_VALUE;
	}
	if (flag) {
		result += (STR_MAX_VALUE - MIN_VALUE);
	}
	return result;
}
function decodeString(s, org, shift) {
	var result = "";
	for (var i=(s.length-1) ; i>=0 ; i--) {
		shift.indexOf(s.substr(i, 1));
		result += org.substr((shift.indexOf(s.substr(i, 1))), 1);
	}
	return result;
}
