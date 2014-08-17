function Board(dimension) {
	var board = {};
	
	board[Layers.Ships] = MakeArray(dimension, dimension, Lands.Sea),
	board[Layers.Weapons] = MakeArray(dimension, dimension, null),
	board[Layers.Fog] =  MakeArray(dimension, dimension, false)
	
	return board;
}

function PlaceShip(board, row, col, shape, orientation) {
	// preconditions
	condicio.checkNotNull(board);
	condicio.checkIsArray(board[Layers.Ships]);
	condicio.checkIsArray(board[Layers.Ships][0]);
	CheckIsEnum(Orientations, orientation);
	condicio.checkIsArray(shape);
	condicio.checkPositionIndex(row, board[Layers.Ships].length);
	condicio.checkPositionIndex(col, board[Layers.Ships][0].length);
	
	var validationArea = Crop(board[Layers.Ships], row, col, shape.length, shape[0].length);
	console.log(validationArea);
	
	if (CheckEachTile(validationArea, function(tile) { return tile == Lands.Sea; })) {
		// do the assignment
		if (orientation == Orientations.Horizontal) {
			for (var r = row; r < row + shape.length; r++) {
				for (var c = col; c < col + shape[0].length; c++) {
					board[Layers.Ships][r][c] = shape[r - row][c - col];
				}
			}
		} else {
			for (var c = col; c < col + shape.length; c++) {
				for (var r = row; r < row + shape[0].length; r++) {
					board[Layers.Ships][r][c] = shape[c - col][r - row];
				}
			}
		}
	}
	
	return board; // not sure if board is modified in place or not
}