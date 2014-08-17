var Layers = Enum('Ships', 'Weapons', 'Fog');
var Lands = Enum('Sea', 'Land');
var Orientations = Enum('Horizontal', 'Vertical');

// Ships
var Ships = {
	Supercarrier: [[1,2,1],[1,2,1]],
	Carrier: [[1,2],[2,1]],
	Battleship: [[1,2,2,1]],
	Cruiser: [[1,2,1]],
	Submarine: [[1,1]],
	Frigate: [[1]],
};