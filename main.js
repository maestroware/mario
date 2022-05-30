function preload() {
	world_start = loadSound("world_start.wav");
	ded = loadSound("mariodie.wav");
	boink = loadSound("kick.wav");
	bunch = loadSound("jump.wav");
	clink = loadSound("coin.wav")
	sed = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.position(120)
	instializeInSetup(mario);
	canvas.parent('canvas')
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent('console')
	posenet = ml5.poseNet(video, ml)
	posenet.on('pose', gp)
}

function gp(results){
	if (results.length>0){
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	  }
}

function ml(){
	console.log("Model Loaded")
}

function draw() {
	game()
}