var printLine = require('./print-line');

function printStaffLine(renderer, x1, x2, pitch, klass, name, dy) {
	var y = renderer.calcY(pitch);
    if (name == 'ledger' && renderer.notelabels) {
        x2 = x1 + (x2 - x1) * 1.33;
    }
	return printLine(renderer, x1, x2, y, klass, name, dy);
}

module.exports = printStaffLine;

