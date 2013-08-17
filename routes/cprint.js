var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';
var doc = new pdfkit(options);
var print = module.exports = function(content){
	doc.fontSize(32);
	doc.font('Times-Roman');
	doc.image('template2.png', 10, 10,{width: 590, height: 450});
	doc.fontSize(32);
//Box A
	doc.text("00",128,85);
	doc.text("00",173,85);
	
	doc.text("00",128,130);
	doc.text("00",173,130);
	
	doc.text("00",128,175);
	doc.text("00",173,175);
	
	doc.fontSize(12);
	doc.text("000000",170,222);
//Box B
	doc.fontSize(32);
	doc.text("00",235,85);
	doc.text("00",280,85);
	doc.text("00",327,85);
	
	doc.text("00",235,130);
	doc.text("00",280,130);
	doc.text("00",327,130);
	
	doc.text("00",235,175);
	doc.text("00",280,175);
	doc.text("00",327,175);
	doc.fontSize(12);
	doc.text("000000",300,222);
//Box C
	doc.fontSize(32);
	doc.text("00",386,85);
	doc.text("00",432,85);
	doc.text("00",477,85);
	doc.text("00",524,85);

	doc.text("00",386,130);
	doc.text("00",432,130);
	doc.text("00",477,130);
	doc.text("00",524,130);
	
	doc.text("00",386,175);
	doc.text("00",432,175);
	doc.text("00",477,175);
	doc.text("00",524,175);

	doc.fontSize(12);
	doc.text("000000",470,222);
//Box D
	doc.fontSize(32);

	doc.text("00",53,280);
	doc.text("00",100,280);
	doc.text("00",145,280);
	doc.text("00",191,280);
	doc.text("00",237,280);

	doc.text("00",53,325);
	doc.text("00",100,325);
	doc.text("00",145,325);
	doc.text("00",191,325);
	doc.text("00",237,325);

	doc.text("00",53,370);
	doc.text("00",100,370);
	doc.text("00",145,370);
	doc.text("00",191,370);
	doc.text("00",237,370);

	doc.fontSize(12);
	doc.text("000000",160,417);
//Box E
	doc.fontSize(32);

	doc.text("00",293,280);
	doc.text("00",339,280);
	doc.text("00",386,280);
	doc.text("00",432,280);
	doc.text("00",478,280);
	doc.text("00",523,280);
	
	doc.text("00",293,325);
	doc.text("00",339,325);
	doc.text("00",386,325);
	doc.text("00",432,325);
	doc.text("00",478,325);
	doc.text("00",523,325);
	
	doc.text("00",293,370);
	doc.text("00",339,370);
	doc.text("00",386,370);
	doc.text("00",432,370);
	doc.text("00",478,370);
	doc.text("00",523,370);

	doc.fontSize(12);
	doc.text("000000",460,417);
//Box F
	doc.fontSize(32);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.image('template2.png', 10, 478,{width: 590, height: 450});
	
	
	//Box A
	doc.text("00",128,85+467);
	doc.text("00",173,85+467);
	
	doc.text("00",128,130+467);
	doc.text("00",173,130+467);
	
	doc.text("00",128,175+467);
	doc.text("00",173,175+467);
	
	doc.fontSize(12);
	doc.text("000000",170,222+467);
//Box B
	doc.fontSize(32);
//Box B
	doc.text("00",235,85+467);
	doc.text("00",280,85+467);
	doc.text("00",327,85+467);
	
	doc.text("00",235,130+467);
	doc.text("00",280,130+467);
	doc.text("00",327,130+467);
	
	doc.text("00",235,175+467);
	doc.text("00",280,175+467);
	doc.text("00",327,175+467);
	doc.fontSize(12);
	doc.text("000000",300,222+467);
//Box C
	doc.fontSize(32);
	doc.text("00",386,85+467);
	doc.text("00",432,85+467);
	doc.text("00",477,85+467);
	doc.text("00",524,85+467);

	doc.text("00",386,130+467);
	doc.text("00",432,130+467);
	doc.text("00",477,130+467);
	doc.text("00",524,130+467);
	
	doc.text("00",386,175+467);
	doc.text("00",432,175+467);
	doc.text("00",477,175+467);
	doc.text("00",524,175+467);

	doc.fontSize(12);
	doc.text("000000",470,222+467);
//Box D
	doc.fontSize(32);

	doc.text("00",53,280+467);
	doc.text("00",100,280+467);
	doc.text("00",145,280+467);
	doc.text("00",191,280+467);
	doc.text("00",237,280+467);

	doc.text("00",53,325+467);
	doc.text("00",100,325+467);
	doc.text("00",145,325+467);
	doc.text("00",191,325+467);
	doc.text("00",237,325+467);

	doc.text("00",53,370+467);
	doc.text("00",100,370+467);
	doc.text("00",145,370+467);
	doc.text("00",191,370+467);
	doc.text("00",237,370+467);

	doc.fontSize(12);
	doc.text("000000",160,417+467);
//Box E
	doc.fontSize(32);

	doc.text("00",293,280+467);
	doc.text("00",339,280+467);
	doc.text("00",386,280+467);
	doc.text("00",432,280+467);
	doc.text("00",478,280+467);
	doc.text("00",523,280+467);
	
	doc.text("00",293,325+467);
	doc.text("00",339,325+467);
	doc.text("00",386,325+467);
	doc.text("00",432,325+467);
	doc.text("00",478,325+467);
	doc.text("00",523,325+467);
	
	doc.text("00",293,370+467);
	doc.text("00",339,370+467);
	doc.text("00",386,370+467);
	doc.text("00",432,370+467);
	doc.text("00",478,370+467);
	doc.text("00",523,370+467);
	doc.fontSize(12);
	doc.text("000000",460,417+467);
//Box F
	doc.fontSize(32);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.fontSize(12);
	doc.rotate(90,{origin:[100,80]}).text("000000",75,80);
	doc.write("Bingo1.pdf");
};
print();