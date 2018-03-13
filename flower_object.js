
var x = 0;
var spaceData;

function setup() {
	createCanvas(500, 500);
	// url, callback, (optional - to acces some places). 
	loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}

function gotData(data) {
	spaceData = data;
}
	
function draw() {
	background(0);
	if(spaceData){
		randomSeed(11);
		for(var i = 0; i < spaceData.number; i++) {
		var name = spaceData.people[i].name;
		var craft = spaceData.people[i].craft;
		var defWidth = random(width);
		var defHeigh = random(height);
		ellipse(defWidth, defHeigh, 16, 16);
		fill(color(30, 150, 0));
		text(name, defWidth + 16, defHeigh + 16, 100, 100);
		fill(color(200, 250, 0));
		text(craft, defWidth - 32, defHeigh - 32, 100, 100);
		textSize(20);
		fill(color(200, 150, 0));
		}
	}
	

	stroke(255);
	line(x, 0, x, height);
	x = x + 1;
	if(x > width) {
		x = 0;
	}

	
}