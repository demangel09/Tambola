var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';
var doc = new pdfkit(options);
var print = module.exports = function(){
	doc.lineWidth(20);
	doc.lineCap('butt')
		.moveTo(607, 15)
		.lineTo(5, 15)
		.fillAndStroke("blue","#005295");
	doc.lineCap('butt')
		.moveTo(607, 450)
		.lineTo(5, 450)
		.fillAndStroke("blue","#005295");
	doc.lineCap('butt')
		.moveTo(15, 5)
		.lineTo(15, 460)
		.fillAndStroke("blue","#005295");
	doc.lineCap('butt')
		.moveTo(597, 5)
		.lineTo(597, 460)
		.fillAndStroke("blue","#005295");
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.text("BINGO",30,10);
	doc.text("BINGO",290,10);
	doc.text("BINGO",540,10);
	doc.text("BINGO",30,446);
	doc.text("BINGO",290,446);
	doc.text("BINGO",540,446);
	doc.rotate(270,{origin: [592, 250]})
		.text("BINGO",600,250);
	doc.rotate(90);
	doc.rotate(270)
		.text("BINGO",600,-332);
	doc.image('logo60.png', 600, -312,{width: 200, height: 40});
	doc.write("Bingo.pdf");
};
print();