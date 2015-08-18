function clickImage(event) {
    $("#main-container img").attr("src", $(event.target).attr("src"));
}

$("#images-container img").click(clickImage);


///////////////// Variant 1


// function showYosemite() {
// 	$("#main-container img").attr("src", "images/yosemite.jpg");
// }


// function showSahara() {
// 	$("#main-container img").attr("src", "images/sahara.jpg");
// }


// function clickImage(event) {
// 	var imageLocation = $(event.target).attr("src");
// 	$("#main-container img").attr("src", imageLocation);
// 	//var imageLocation = $(event.target).attr("id");
// 	console.log(imageLocation)
// }


// $("#yosemite-btn").click(showYosemite);

// $("#everest-btn").click(clickImage);

// $("#sahara-btn").click(showSahara);


///////////////// Variant 2

// function showYosemite() {
// 	$("#main-img").attr("src", "images/yosemite.jpg");
// }

// function showEverest() {
// 	$("#main-img").attr("src", "images/everest.jpg");
// }

// function showSahara() {
// 	$("#main-img").attr("src", "images/sahara.jpg");
// }



///////////////// Variant 3

// $("#everest").hide();
// $("#sahara").hide();
// $("#yosemite").show();

// function showYosemite() {
// 	$("#everest").hide();
// 	$("#sahara").hide();
//   	$("#yosemite").show();
//   	//changeActiveLink(event);
// }

// function showEverest(event) {
// 	$("#yosemite").hide();
// 	$("#sahara").hide();
//   	$("#everest").show();
//   	changeActiveLink(event);
// }

// function showSahara(event) {
// 	$("#everest").hide();
// 	$("#yosemite").hide();
//   	$("#sahara").show();
//   	changeActiveLink(event);
// }


// $("#yosemite-btn").click(showYosemite);

// $("#everest-btn").click(showEverest);

// $("#sahara-btn").click(showSahara);