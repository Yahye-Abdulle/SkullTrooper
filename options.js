function options() {
	background(255);
	returnHome()
	cursor_sprite.position.x = mouseX;
	cursor_sprite.position.y = mouseY;
	cursor_sprite.width = 1;
	cursor_sprite.height = 1;
	
	fill("Red");
	textSize(40);
	text("10 BULLETS", width/2-300, height/2)
	choose_quick.width = 430;
	choose_quick.position.x = width/2-300;
	choose_quick.position.y = height/2
	
	text("60 SECONDS", width/2, height/2);
	choose_seconds.width = 375;
	choose_seconds.position.x = width/2+150;
	choose_seconds.position.y = height/2;
	if (mouseIsPressed) {
		if (mouseButton == LEFT) {
			
			if (cursor_sprite.overlap(choose_quick)) {
				game_mode = 10;
				screen = 'game';
			}

			if (cursor_sprite.overlap(choose_quick)) {
				game_mode = 60;
				screen = 'game';
			}
			
		}
	}
}
