var defaultBoard = new DrawingBoard.Board('default-board');


var customBoard2 = new DrawingBoard.Board('custom-board-2', {
	controls: [
		'Color',
		{ Size: { type: 'dropdown' } },
		{ DrawingMode: { filler: false } },
		'Navigation',
		'Download'
	],
	size: 1,
	webStorage: 'session',
	enlargeYourContainer: true
});