$(document).ready(function(){
	$('#game_two_btn').on('click', counterDown)

	var count_d_n = 3
	var time_playing_two_begining = 0;
	var time_playing_two_end = 0;
	
	function counterDown() {

		time_playing_two_begining = new Date();

		if (count_d_n > 0) {
			var count_d = ['<div class="count_d">' + count_d_n +'</div>']
			$('.two_ins_background').html(count_d);
			count_d_n--;
			setTimeout(counterDown, 1000);
		}else{
			clickPlay();
		}; 
	}

	function clickPlay(){
		$('.two_ins_background').css('background-color', '#000')
		
		var gamehtml = ['<div id="gameover">GAME OVER</div>',
						'<div class="lifes">',
							'<div class="life" id="1"><img src="/heart.png"></div>',
							'<div class="life" id="2"><img src="/heart.png"></div>',
							'<div class="life" id="3"><img src="/heart.png"></div>',
						'</div>',
						'<div id="hero"><img src="/macbook.png" height="40" width="69"></div>',
						'<div id="laser"></div>',
						'<div id="looselife">WOPS!</div>',
						'<div id="keeptrying">Keep trying</div>',
						'<div id="space">',
						  '<div class="stars"></div>',
						  '<div class="stars"></div>',
						  '<div class="stars"></div>',
						  '<div class="stars"></div>',
						  '<div class="stars"></div>',
						'</div>'
			    		].join('\n');

		$('.two_ins_background').html(gamehtml);
		gameLoop();
	}

	function gameLoop(){

		var window_height = $(window).height();
		var window_width = $(window).width();
		var hero_height = $('#hero').height();
		var hero_width = $('#hero').width();

		var LEFT_KEY = 37;
		var UP_KEY = 38;
		var RIGHT_KEY = 39;
		var DOWN_KEY = 40;
		var SPACE_KEY = 32;
		var HERO_MOVEMENT = 11;

		var lastLoopRun = 0;
		var iterations = 0;
		var lifes = 3;

		var controller = new Object();
		var enemies = new Array();
		var two_cero_two_array = new Array();
		var two_zero_zero_array = new Array();

		var interval_blue = 140;
		var interval_green = 150;
		var interval_enemies = 150;

		function createSprite(element, x, y, w, h) {
		  var result = new Object();
		  result.element = element;
		  result.x = x;
		  result.y = y;
		  result.w = w;
		  result.h = h;
		  return result;
		}

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
		  if (keyCode == SPACE_KEY) {
		    controller.space = isPressed;
		  }  
		}

		function intersects(a, b) {
		  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
		}

		function ensureBounds(sprite) {
		  if (sprite.x < 0) {
		    sprite.x = 0;
		  }
		  if (sprite.y < 0) {
		    sprite.y = 0;
		  }
		  if (sprite.x + sprite.w > window_width ) {
		    sprite.x = window_width - sprite.w ;
		  }
		  if (sprite.y + sprite.h > window_height) {
		    sprite.y = window_height - sprite.h;
		  }
		}

		function ensureBoundsFiles(sprite, ignoreY) {
		  if (sprite.x < 0) {
		    sprite.x = 0;
		  }
		  if (!ignoreY && sprite.y < 0) {
		    sprite.y = 0;
		  }
		  if (sprite.x + sprite.w > window_width) {
		    sprite.x = window_width - sprite.w;
		  }
		  if (!ignoreY && sprite.y + sprite.h > window_height) {
		    sprite.y = window_height - sprite.h;
		  }
		}

		function ensureBoundsFilesGreen(sprite, ignoreY, ignoreX) {
		  if (sprite.x < 0) {
		    sprite.x = 0;
		  }
		  if (!ignoreY && sprite.y < 0) {
		    sprite.y = 0;
		  }
		  if (!ignoreX && sprite.x + sprite.w > window_width) {
		    sprite.x = window_width - sprite.w;
		  }
		  if (!ignoreY && sprite.y + sprite.h > window_height) {
		    sprite.y = window_height - sprite.h;
		  }
		}

		function setPosition(sprite) {
		  var e = document.getElementById(sprite.element);
		  e.style.left = (sprite.x) + 'px';
		  e.style.top = sprite.y + 'px';
		}
		function setPositionLaser(sprite) {
		  var e = document.getElementById(sprite.element);
		  e.style.left = (sprite.x) + 'px';
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
		  if (controller.space) {
		    laser.x = hero.x + 30;
		    laser.y = hero.y - laser.h;
		  }
		  
		  ensureBounds(hero);
		}

		function checkCollisions() {
		  for (var i = 0; i < enemies.length; i++) {
		    if (intersects(laser, enemies[i])) {
		      var element = document.getElementById(enemies[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      enemies.splice(i, 1);
		      i--;
		      laser.y = -laser.h;
		    } else if (intersects(hero, enemies[i])) {
		      var element = document.getElementById(enemies[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      enemies.splice(i, 1);
		      looseLife();
		    } else if (enemies[i].y + enemies[i].h > window_height) {
		      var element = document.getElementById(enemies[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      enemies.splice(i, 1);
		      i--;
		      looseLife();
		    } 
		  }
		}

		function checkCollisionsGreen() {
		  for (var i = 0; i < two_cero_two_array.length; i++) {
		    if (intersects(laser, two_cero_two_array[i])) {
		      var element = document.getElementById(two_cero_two_array[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      two_cero_two_array.splice(i, 1);
		      i--;
		      laser.y = -laser.h;
		      looseLife();
		    } else if (two_cero_two_array[i].y + two_cero_two_array[i].h > window_height) {
		      var element= document.getElementById(two_cero_two_array[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      two_cero_two_array.splice(i, 1);
		      i--;
		    } else if (two_cero_two_array[i].x + two_cero_two_array[i].w > window_width) {
		      var element= document.getElementById(two_cero_two_array[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      two_cero_two_array.splice(i, 1);
		      i--;
		    } 
		  }
		}

		function checkCollisionsBlue() {
		  for (var i = 0; i < two_zero_zero_array.length; i++) {
		    if (intersects(laser, two_zero_zero_array[i])) {
		      var element = document.getElementById(two_zero_zero_array[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      two_zero_zero_array.splice(i, 1);
		      i--;
		      laser.y = -laser.h;
		      looseLife();
		    } else if (two_zero_zero_array[i].y + two_zero_zero_array[i].h > window_height) {
		      var element= document.getElementById(two_zero_zero_array[i].element);
		      element.style.visibility = 'hidden';
		      element.parentNode.removeChild(element);
		      two_zero_zero_array.splice(i, 1);
		      i--;
		    }
		  }
		}

		function saveGame(){

			time_playing_two_end = new Date();
			difference_in_s = (time_playing_two_end.getTime() - time_playing_two_begining.getTime() )/1000;

			seconds = (2000*difference_in_s)/350;
			console.log(difference_in_s);
			points = Math.round(seconds);
			console.log(points)
			var request = $.ajax({
							data: {points: points, game: 2},
							type: "POST",
							url: "/points_updating",
							success: console.log('Points sended'),
			});

			window.location.replace('/saving');
		}

		function gameOver() {
		  var element = document.getElementById(hero.element);
		  element.style.visibility = 'hidden';
		  element = document.getElementById(laser.element)
		  element.style.visibility = 'hidden';
		  element = document.getElementById('gameover');
		  element.style.visibility = 'visible';
		  setTimeout(saveGame, 3000)
		}

		function afterKeepTrying() {
		  var element = document.getElementById('keeptrying');
		  element.style.visibility = 'hidden';
		}

		function restartAfterMissing() {
		  element = document.getElementById('looselife');
		  element.style.visibility = 'hidden';
		  element = document.getElementById('keeptrying')
		  element.style.visibility = 'visible';
		  setTimeout(afterKeepTrying, 1200);

		}

		function looseLifeText() {
		  if (lifes < 0) {
		  	gameOver();
		  }else{
			  element = document.getElementById('looselife');
			  element.style.visibility = 'visible';
			  setTimeout(restartAfterMissing, 1300);
		  };
		}

		function showSprites() {
		  setPosition(hero);
		  setPositionLaser(laser);
		  for (var i = 0; i < enemies.length; i++) {
		    setPosition(enemies[i]);
		  }
		  for (var i = 0; i < two_cero_two_array.length; i++) {
		    setPosition(two_cero_two_array[i]);
		  }
		  for (var i = 0; i < two_zero_zero_array.length; i++) {
		    setPosition(two_zero_zero_array[i]);
		  }
		}

		function updatePositions() {
		  for (var i = 0; i < enemies.length; i++) {
		    enemies[i].y += 4;
		    enemies[i].x += getRandom(7) - 3;
		    ensureBoundsFiles(enemies[i], true)
		  }	

		  for (var i = 0; i < two_cero_two_array.length; i++) {
		    two_cero_two_array[i].y += 4;
		    two_cero_two_array[i].x += 2;
		    ensureBoundsFilesGreen(two_cero_two_array[i], true, true)
		  }

		  for (var i = 0; i < two_zero_zero_array.length; i++) {
		    two_zero_zero_array[i].y += 4;
		    ensureBoundsFiles(two_zero_zero_array[i], true)
		  }

		  laser.y -= 30;

		}

		function addEnemy() {
		 
		  if (iterations > 1650) {
		    interval_enemies = 45;
		  } else if (iterations > 1300) {
		    interval_enemies = 60;
		  } else if (iterations > 500) {
		    interval_enemies = 120;
		  }
		  
		  if (getRandom(interval_enemies) == 0) {
		    var elementName = 'enemy' + getRandom(10000000);
		    var enemy = createSprite(elementName, getRandom(window_width), -20, 76, 122);
		    
		    var element = document.createElement('div');
		    element.id = enemy.element;
		    element.className = 'enemy'; 
		    $(element).append('<img src="/404.png" widht="70px" height="112px" class="gamepics">')
		    document.children[0].appendChild(element);
		    
		    enemies[enemies.length] = enemy;
		  }
		}

		function addTwoCeroTwo() {
		  
		  if (iterations > 1500) {
		    interval_green = 43;
		  } else if (iterations > 1100) {
		    interval_green = 60;
		  } else if (iterations > 500) {
		    interval_green = 100;
		  }
		  
		  if (getRandom(interval_green) == 0) {
		    var elementName = 'two_cero_two' + getRandom(10000000);
		    var two_cero_two = createSprite(elementName, getRandom(window_width), -20, 64, 109);
		    
		    var element = document.createElement('div');
		    element.id = two_cero_two.element;
		    element.className = 'two_cero_two';
			$(element).append('<img src="/202.png" widht="60px" height="102px" class="gamepics">') 
		    document.children[0].appendChild(element);
		    
		    two_cero_two_array[two_cero_two_array.length] = two_cero_two;
		  }
		}

		function addTwoZeroZero() {
		  
		  if (iterations > 1800) {
		    interval_blue = 20;
		  } else if (iterations > 1000) {
		    interval_blue = 50;
		  } else if (iterations > 500) {
		    interval_blue = 95;
		  }
		  
		  if (getRandom(interval_blue) == 0) {
		    var elementName = 'two_zero_zero' + getRandom(10000000);
		    var two_zero_zero = createSprite(elementName, getRandom(window_width), -20, 64, 109);
		    
		    var element = document.createElement('div');
		    element.id = two_zero_zero.element;
		    element.className = 'two_zero_zero'; 
		    $(element).append('<img src="/200.png" widht="60px" height="103px" class="gamepics">') 
		    document.children[0].appendChild(element);
		    
		    two_zero_zero_array[two_zero_zero_array.length] = two_zero_zero;
		  }
		}

		function looseLife(){
			$('#'+lifes).remove();
			lifes -= 1;
			interval_green = 350;
			interval_blue = 350;
			interval_enemies = 350;
			iterations = 0;
			for (var i = 0; i < enemies.length; i++) 
			{
			   var element = document.getElementById(enemies[i].element);
			   element.style.visibility = 'hidden';
			   element.parentNode.removeChild(element);
			   enemies.splice(i, 1);
			   i--;
			};

			looseLifeText();
		}

		function getRandom(maxSize) {
		  return parseInt(Math.random() * maxSize);
		}

		function loop() {
		  if (new Date().getTime() - lastLoopRun > 40) {
		    updatePositions();
		    handleControls();
		    checkCollisions();
		    checkCollisionsGreen();
		    checkCollisionsBlue();
		    
		    addEnemy();
		    addTwoCeroTwo();
		    addTwoZeroZero();
		    
		    showSprites();

		    lastLoopRun = new Date().getTime();
		    iterations++;
		  }
		  setTimeout('loop();', 2);
		}

		document.onkeydown = function(evt) {
		  toggleKey(evt.keyCode, true);
		};

		document.onkeyup = function(evt) {
		  toggleKey(evt.keyCode, false);
		};

		var hero = createSprite('hero', window_width/2 - 40, window_height - 40, 72, 40);
		var laser = createSprite('laser', 0, 0, 2, 40);

		loop();

		window['loop'] = loop;

	}

});

