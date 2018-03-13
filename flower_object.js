
var weather;

function setup() {
	createCanvas(600, 600);
	loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=15a6280447437dc315cf5b7bb4966a79&units=metric', gotData);
}

function gotData(data) {
	weather = data;
}

function draw() {
	background(0);
	randomSeed(5);
	text('Weather in Monterrey', 10, 50);
	textSize(20);
	fill(255);
	if(weather){
		text('Temperature: ', 100, 150);
		text(weather.main.temp, 220, 150);
	}
}
