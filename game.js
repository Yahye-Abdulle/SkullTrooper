var circle;
var circle_sprite;
var circle_sprite_2;
var circle_test = [];
var circle_test_2 = [];
var score = 0;
var seconds = 60;
var timer = 0;
var mouseClick = 0;
var color_fill_start = 'White'
var color_fill_options = 'White'
var color_fill_leaderboard = 'White'
var screen = 'menu';
var game_mode = 60;

function preload() {
	load()
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	zombie_music.setVolume(0.2);
	zombie_music.play()
	sprites();
}

function draw() {
	// background(255);
	
	// image(background_two, 50,50);

	frameRate(120);
	
	if (screen=='menu') {
		cursor_sprite.addImage(cursor_image)
		// username.position(800,275);
		// username.style("font-size","30");
		// user_name = username.value()
		cursor_sprite.visible = true;
		menu()
	}
	if (screen=='options') {
		// username.hide();
		options()
	}
	if (screen=='game') {
		zombie_music.setVolume(0.65);
		player.addImage(player_image);
		circle_sprite.addImage(zombie);
		circle_sprite_2.addImage(zombie_2);
		player.visible = true;
		circle_sprite.visible = true;
		circle_sprite_2.visible = true;
		cursor_sprite.visible = false;
		// username.hide();
		game()
	}
	if (screen=='leaderboard') {
		// username.hide();
		leaderboard()
	}
	if (screen=='end') {
		// username.hide()
		player_sprite.visible = false;
		circle_sprite.visible = false;
		player.visible = false;
		end()
	}
	
	//fill('White');
	//textSize(150);
	//textFont(text_font);
	//text("SKULLTROOPER", width/2-275, height/2-75);
	
	
	fill('Red');
	textSize(30);
	textFont(text_font);
	text(round(frameRate()), 15, height-15);
	
	leaderboard_sprite.width = 240;
	leaderboard_sprite.height= 30;
	leaderboard_sprite.position.y = 490;
	leaderboard_sprite.position.x = 198;
	drawSprites();
}

function game() {
	// createCanvas(windowWidth, windowHeight);
	background(background_two);
	// background(255);
	noCursor();
	time();
	returnHome();
	scoreCounter();
	target();
	check();
}
