//#Week 6 JQuery Code Challenge

//Objects

//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.

var Box = {
	height: 0,
	width: 0,
	volume: 0

}

function findVolume(h, w){
  return h*w;

}
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.


$('#HeightDecrease').click(function(){
	if(Box.height >= 1){
		Box.height -=1;
    //Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Height: " + Box.height);
});
$('#HeightIncrease').click(function(){
	if(Box.height >= 0){
		Box.height += 1;
    //Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Height: " + Box.height);
});


$('#WidthDecrease').click(function(){
	if(Box.width >= 1){
		Box.width -=1;
  //  Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Width: " + Box.width);
});
$('#WidthIncrease').click(function(){
	if(Box.width >= 0){
		Box.width += 1;
  //  Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Width: " + Box.width);
});

$('#VolumeDecrease').click(function(){
	if(Box.volume >= 1){
		Box.volume -=1;
  //  Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Volume: " + Box.volume);
});
$('#VolumeIncrease').click(function(){
	if(Box.volume >= 0){
		Box.volume += 1;
  //  Box.volume = findVolume(Box.height, Box.width);
	}
	console.log("Volume: " + Box.volume);
});
//Create a button that prints the object and its attributes to the page (use the span "output".
var output= "";

$('#Print').click(function(){
	$("#output").empty();
	output = "";
	for(var property in Box){

		output += property + ': ' + Box[property]+';\n ';
	}

	$("#output").text(output);

});
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume


//Box.length = Box.volume/(Box.height*Box.width)
