function end() {
	background(255);
	fill('Red');
	textSize(80);
  textAlign(CENTER, CENTER);
	text("GAME OVER", width/2, height/2);
	textSize(20);
	text("PRESS ESC TO RESTART", width/2, height/2 + 50);	
	
	if (keyIsDown(27)){
		seconds = 60;
		screen='menu';
	}
}
