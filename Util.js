/// Creates a 2D array
function MakeArray(w, h, val) {
	var arr = [];
	for (i = 0; i < h; i++) {
		arr[i] = [];
		for (j = 0; j < w; j++) {
			arr[i][j] = val;
		}
	}
	return arr;
}

/// Creates an Enum in JavaScript
function Enum() {
	v = arguments;
	s = {
		all: [],
		keys: v
	};
	for (i = v.length; i--;) s[v[i]] = s.all[i] = v[i];
	return s
}

/// Returns a slice of a 2D array
function Crop(arr, y, x, w, h) {
	var crop = arr.slice(x, x+w);
	for(var i = 0; i<crop.length; i++){
	    crop[i] = crop[i].slice(y, y+h);
	}
	return crop;
}

/// Runs condicio to find out if a variable is part of an Enum
function CheckIsEnum(enumeration, val) {
	condicio.checkArgument(enumeration.all.indexOf(val) != -1);
}

/// Iterates through all the items in a 1 or 2D array, returning true if all validations pass
function CheckEachTile(arr, validation) {
	condicio.checkIsArray(arr);
	condicio.checkIsFunction(validation);
	
	for (var i = 0; i < arr.length; i++) {
		var item = arr[i];
		if (item instanceof Array) {
			isValid = CheckEachTile(item, validation);
			if (!isValid) return false;
		} else {
			if (!validation(item)) return false;
		}
	}
	
	return true;
}