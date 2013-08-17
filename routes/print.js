var pdfkit = require('pdfkit');
var options = {};
options.size = 'FOLIO';

var print = module.exports = function(content,callback){
	var doc = new pdfkit(options);
	doc.fontSize(32);
	doc.font('Helvetica-Bold');
//	doc.font('Tw-Cen-MT-Condensed');
	doc.image('./routes/Template4.PNG', 0, 0,{width: 615, height: 467});
	doc.fontSize(32);
//Box A
	doc.text(content[0].box[0],134,30,{width:35,align:'center'});
	doc.text(content[0].box[1],180,30,{width:35,align:'center'});
	
	doc.text(content[0].box[2],134,84,{width:35,align:'center'});
	doc.text(content[0].box[3],180,84,{width:35,align:'center'});
	
	doc.text(content[0].box[4],134,135,{width:35,align:'center'});
	doc.text(content[0].box[5],179,135,{width:35,align:'center'});
	
	doc.fontSize(12);
	doc.text(content[0].series,175,218);
//Box B
	doc.fontSize(32);
	doc.text(content[1].box[0],235,30,{width:35,align:'center'});
	doc.text(content[1].box[1],284,30,{width:35,align:'center'});
	doc.text(content[1].box[2],329,30,{width:35,align:'center'});
	
	doc.text(content[1].box[3],235,84,{width:35,align:'center'});
	doc.text(content[1].box[4],284,84,{width:35,align:'center'});
	doc.text(content[1].box[5],329,84,{width:35,align:'center'});
	
	doc.text(content[1].box[6],235,135,{width:35,align:'center'});
	doc.text(content[1].box[7],284,135,{width:35,align:'center'});
	doc.text(content[1].box[8],329,172,{width:35,align:'center'});
	doc.fontSize(12);
	doc.text(content[1].series,307,218);
//Box C
	doc.fontSize(32);
	doc.text(content[2].box[0],387,67,{width:35,align:'center'});
	doc.text(content[2].box[1],432,30,{width:35,align:'center'});
	doc.text(content[2].box[2],480,30,{width:35,align:'center'});
	doc.text(content[2].box[3],525,30,{width:35,align:'center'});

	doc.text(content[2].box[4],387,84,{width:35,align:'center'});
	doc.text(content[2].box[5],432,84,{width:35,align:'center'});
	doc.text(content[2].box[6],477,84,{width:35,align:'center'});
	doc.text(content[2].box[7],525,122,{width:35,align:'center'});
	
	doc.text(content[2].box[8],387,172,{width:35,align:'center'});
	doc.text(content[2].box[9],432,135,{width:35,align:'center'});
	doc.text(content[2].box[10],479,135,{width:35,align:'center'});
	doc.text(content[2].box[11],525,135,{width:35,align:'center'});

	doc.fontSize(12);
	doc.text(content[2].series,478,218);
//Box D
	doc.fontSize(32);

	doc.text(content[3].box[0],54,238,{width:35,align:'center'});
	doc.text(content[3].box[1],101,238,{width:35,align:'center'});
	doc.text(content[3].box[2],148,238,{width:35,align:'center'});
	doc.text(content[3].box[3],192,238,{width:35,align:'center'});
	doc.text(content[3].box[4],238,238,{width:35,align:'center'});

	doc.text(content[3].box[5],54,290,{width:35,align:'center'});
	doc.text(content[3].box[6],101,327,{width:35,align:'center'});
	doc.text(content[3].box[7],145,290,{width:35,align:'center'});
	doc.text(content[3].box[8],192,327,{width:35,align:'center'});
	doc.text(content[3].box[9],238,290,{width:35,align:'center'});

	doc.text(content[3].box[10],54,345,{width:35,align:'center'});
	doc.text(content[3].box[11],101,345,{width:35,align:'center'});
	doc.text(content[3].box[12],145,345,{width:35,align:'center'});
	doc.text(content[3].box[13],192,345,{width:35,align:'center'});
	doc.text(content[3].box[14],238,345,{width:35,align:'center'});

	doc.fontSize(12);
	doc.text(content[3].series,187,424);
//Box E
	doc.fontSize(32);

	doc.text(content[4].box[0],297,273,{width:35,align:'center'});
	doc.text(content[4].box[1],338,236,{width:35,align:'center'});
	doc.text(content[4].box[2],387,236,{width:35,align:'center'});
	doc.text(content[4].box[3],432,236,{width:35,align:'center'});
	doc.text(content[4].box[4],479,236,{width:35,align:'center'});
	doc.text(content[4].box[5],523,273,{width:35,align:'center'});
	
	doc.text(content[4].box[6],294,290,{width:35,align:'center'});
	doc.text(content[4].box[7],342,290,{width:35,align:'center'});
	doc.text(content[4].box[8],387,290,{width:35,align:'center'});
	doc.text(content[4].box[9],433,290,{width:35,align:'center'});
	doc.text(content[4].box[10],479,290,{width:35,align:'center'});
	doc.text(content[4].box[11],523,290,{width:35,align:'center'});
	
	doc.text(content[4].box[12],280+15,343,{width:35,align:'center'});
	doc.text(content[4].box[13],325+15,343,{width:35,align:'center'});
	doc.text(content[4].box[14],372+15,382,{width:35,align:'center'});
	doc.text(content[4].box[15],416+15,343,{width:35,align:'center'});
	doc.text(content[4].box[16],465+15,343,{width:35,align:'center'});
	doc.text(content[4].box[17],510+15,343,{width:35,align:'center'});

	doc.fontSize(12);
	doc.text(content[4].series,430,424);
//Box F
	doc.fontSize(32);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.image('./routes/Template3.PNG', 0, 468,{width: 615, height: 465});
//	doc.font('Courier-Bold');
	
	//Box A
	doc.text(content[5].box[0],128+6,30+467,{width:35,align:'center'});
	doc.text(content[5].box[1],171+8,30+467,{width:35,align:'center'});
	
	doc.text(content[5].box[2],128+6,84+467,{width:35,align:'center'});
	doc.text(content[5].box[3],173+8,84+467,{width:35,align:'center'});
	
	doc.text(content[5].box[4],128+6,137+467,{width:35,align:'center'});
	doc.text(content[5].box[5],173+8,137+467,{width:35,align:'center'});
	
	doc.fontSize(12);
	doc.text(content[5].series,148,218+467);
//Box B
	doc.fontSize(32);
//Box B
	doc.text(content[6].box[0],228+10,30+467,{width:35,align:'center'});
	doc.text(content[6].box[1],272+12,30+467,{width:35,align:'center'});
	doc.text(content[6].box[2],316+12,30+467,{width:35,align:'center'});
	
	doc.text(content[6].box[3],228+10,86+467,{width:35,align:'center'});
	doc.text(content[6].box[4],272+12,86+467,{width:35,align:'center'});
	doc.text(content[6].box[5],316+14,86+467,{width:35,align:'center'});
	
	doc.text(content[6].box[6],228+10,137+467,{width:35,align:'center'});
	doc.text(content[6].box[7],273+12,137+467,{width:35,align:'center'});
	doc.text(content[6].box[8],316+14,175+467,{width:35,align:'center'});
	
	doc.fontSize(12);
	doc.text(content[6].series,305,218+467);
//Box C
	doc.fontSize(32);
	doc.text(content[7].box[0],371+16,30+467,{width:35,align:'center'});
	doc.text(content[7].box[1],415+19,30+467,{width:35,align:'center'});
	doc.text(content[7].box[2],460+19,30+467,{width:35,align:'center'});
	doc.text(content[7].box[3],503+21,30+467,{width:35,align:'center'});

	doc.text(content[7].box[4],371+19,123+467,{width:35,align:'center'});
	doc.text(content[7].box[5],415+19,86+467,{width:35,align:'center'});
	doc.text(content[7].box[6],460+19,86+467,{width:35,align:'center'});
	doc.text(content[7].box[7],503+21,86+467,{width:35,align:'center'});
	
	doc.text(content[7].box[8],371+17,137+467,{width:35,align:'center'});
	doc.text(content[7].box[9],415+19,137+467,{width:35,align:'center'});
	doc.text(content[7].box[10],460+21,137+467,{width:35,align:'center'});
	doc.text(content[7].box[11],503+23,137+467,{width:35,align:'center'});

	doc.fontSize(12);
	doc.text(content[7].series,475,218+467);
//Box D
	doc.fontSize(32);

	doc.text(content[8].box[0],50+4,233+467,{width:35,align:'center'});
	doc.text(content[8].box[1],97+4,233+467,{width:35,align:'center'});
	doc.text(content[8].box[2],141+4,233+467,{width:35,align:'center'});
	doc.text(content[8].box[3],184+9,233+467,{width:35,align:'center'});
	doc.text(content[8].box[4],227+11,233+467,{width:35,align:'center'});

	doc.text(content[8].box[5],50+4,327+467,{width:35,align:'center'});
	doc.text(content[8].box[6],95+4,289+467,{width:35,align:'center'});
	doc.text(content[8].box[7],141+5,289+467,{width:35,align:'center'});
	doc.text(content[8].box[8],184+9,327+467,{width:35,align:'center'});
	doc.text(content[8].box[9],227+12,289+467,{width:35,align:'center'});

	doc.text(content[8].box[10],50+4,380+467,{width:35,align:'center'});
	doc.text(content[8].box[11],95+4,341+467,{width:35,align:'center'});
	doc.text(content[8].box[12],141+4,378+467,{width:35,align:'center'});
	doc.text(content[8].box[13],184+7,340+467,{width:35,align:'center'});
	doc.text(content[8].box[14],227+11,340+467,{width:35,align:'center'});

	doc.fontSize(12);
	doc.text(content[8].series,137,424+467);
//Box E
	doc.fontSize(32);

	doc.text(content[9].box[0],283+13,235+467,{width:35,align:'center'});
	doc.text(content[9].box[1],327+15,235+467,{width:35,align:'center'});
	doc.text(content[9].box[2],371+16,235+467,{width:35,align:'center'});
	doc.text(content[9].box[3],416+19,235+467,{width:35,align:'center'});
	doc.text(content[9].box[4],460+19,235+467,{width:35,align:'center'});
	doc.text(content[9].box[5],503+20,273+467,{width:35,align:'center'});
	
	doc.text(content[9].box[6],283+13,289+467,{width:35,align:'center'});
	doc.text(content[9].box[7],326+15,327+467,{width:35,align:'center'});
	doc.text(content[9].box[8],372+16,289+467,{width:35,align:'center'});
	doc.text(content[9].box[9],415+19,289+467,{width:35,align:'center'});
	doc.text(content[9].box[10],460+19,289+467,{width:35,align:'center'});
	doc.text(content[9].box[11],503+20,327+467,{width:35,align:'center'});
	
	doc.text(content[9].box[12],283+13,340+467,{width:35,align:'center'});
	doc.text(content[9].box[13],326+15,378+467,{width:35,align:'center'});
	doc.text(content[9].box[14],372+16,340+467,{width:35,align:'center'});
	doc.text(content[9].box[15],415+19,340+467,{width:35,align:'center'});
	doc.text(content[9].box[16],460+19,378+467,{width:35,align:'center'});
	doc.text(content[9].box[17],503+22,340+467,{width:35,align:'center'});
	doc.fontSize(12);
	doc.text(content[9].series,430,423+467);
//Box F
	doc.fontSize(32);
	
	doc.lineWidth(1);
	doc.lineCap('butt')
		.moveTo(607, 468)
		.lineTo(5, 468)
		.dash(5, {space: 10})
		.fillAndStroke("black");
	doc.fontSize(12);
	
	doc.rotate(270,{origin:[100,555]}).text(content[9].prodid+"                                                                                                                                    "+content[9].prodid,75,555);
	//doc.rotate(0,{origin:[100,80+567]}).text(content[9].prodid,75,80+467);
	
	doc.write("v1"+content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf",function(){
		callback(null,content[9].prodid+" "+content[0].series+"-"+content[9].series+".pdf");
	});
};