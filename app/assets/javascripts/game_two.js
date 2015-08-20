$(document).ready(function(){

	var LEFT_KEY = 37;
	var UP_KEY = 38;
	var RIGHT_KEY = 39;
	var DOWN_KEY = 40;
	var HERO_MOVEMENT = 7;

	var lastLoopRun = 0;

	var hero = new Object();
	hero.element = 'hero';
	var window_height = $(window).height();
	var window_width = $(window).width();
	var hero_height = $('#hero').height();
	var hero_width = $('#hero').width();
	hero.x = window_width/2;
	hero.y = window_height -75;


	var controller = new Object();

	function toggleKey(keyCode, isPressed) {
	  if (keyCode == LEFT_KEY) {
	    controller.left = isPressed;
	  }
	  if (keyCode == RIGHT_KEY) {
	    controller.right = isPressed;
	  }
	  if (keyCode == UP_KEY) {
	    controller.up = isPressed;
	  }
	  if (keyCode == DOWN_KEY) {
	    controller.down = isPressed;
	  }
	}

	function gameLimitis(sprite){
		if (hero.x < 5) {
			hero.x = 5;
		}
		if (hero.y < 5 ) {
			hero.y = 5;
		}
		if (hero.y > window_height - (hero_height + 5) ) {
			hero.y = window_height - (hero_height + 5);
		}
		if (hero.x > window_width - (hero_width + 5)) {
			hero.x = window_width - (hero_width + 5);
		}
	}

	function setPosition(sprite) {
	  var e = document.getElementById(sprite.element);
	  e.style.left = sprite.x + 'px';
	  e.style.top = sprite.y + 'px';
	}

	function handleControls() {
	  if (controller.up) {
	    hero.y -= HERO_MOVEMENT;
	  }
	  if (controller.down) {
	    hero.y += HERO_MOVEMENT;
	  }
	  if (controller.left) {
	    hero.x -= HERO_MOVEMENT;
	  }
	  if (controller.right) {
	    hero.x += HERO_MOVEMENT;
	  }

	  gameLimitis();
	}

	function showCharacters() {
	  setPosition(hero);
	}

	function loop() {
	  if (new Date().getTime() - lastLoopRun > 40) {
	    handleControls();
	    showCharacters();
	    lastLoopRun = new Date().getTime();
	  }
	  setTimeout('loop();', 2);
	}

	document.onkeydown = function(evt) {
	  toggleKey(evt.keyCode, true);
	};

	document.onkeyup = function(evt) {
	  toggleKey(evt.keyCode, false);
	};

	loop();

	window['loop'] = loop;

});

