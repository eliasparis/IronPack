$(document).ready(function(){

	$('#play_one_button').on('click', beginGameOne);

	var time_playing_one_begining = 0;
	var time_playing_one_end = 0;

	var instructions_game_one_html = 
			['<div class="rainbow_sq">',
			'</div>'
		    ].join('\n');

	function beginGameOne(){
		$('.one_ins_background').html(instructions_game_one_html);
		rainbow_sq_clicks = 1;
		w = 90;
		h = 80;
		time_playing_one_begining = new Date()
	}

	var rainbow_sq_clicks = 1;
	var w = 90;
	var h = 80;

	var save = "<span>SAVE GAME <br> AND PLAY NEXT</span>"

	var cool = ['<div class="cool">Cool!',
				'</div>',
				'<div class="save">'+ save +'</div>'
			    ].join('\n');

	var nop = ['<div class="cool">NOP',
			'</div>'
		    ].join('\n');

	$('.one_ins_background').on('click', function(e) { 
   		if( e.target != this ) {
   		}else{
   			rainbowRepeat(event);
   		};
       	return;
	});

	$(document).on('click','.rainbow_sq', rainbowPlaying);

	function rainbowRepeat (event){
		event.preventDefault();
			$('.one_ins_background').html(nop);
			setTimeout(beginGameOne, 1000);
	}

	function rainbowPlaying (event){
		event.preventDefault();

		if (rainbow_sq_clicks < 4) {
			w -= 16;
			h -= 11;
		}else if (rainbow_sq_clicks < 7){
			w -= 9;
			h -= 6;
		}else if (rainbow_sq_clicks > 13){
			$('.one_ins_background').html(cool);
			time_playing_one_end = new Date();
		}else{
			w -=2;
			h -=1;
		};

		rainbow_sq_clicks += 1;

		var left = Math.floor(Math.random() * (90 - 5 + 1)) + 5; 
		var top = Math.floor(Math.random() * (90 - 5 + 1)) + 5;
		var deg = Math.floor(Math.random() * (360 - 10 + 1)) + 10;

		$('.rainbow_sq').css('width', w+'%');
		$('.rainbow_sq').css('height', h+'%');
		$('.rainbow_sq').css('left', left+'%');
		$('.rainbow_sq').css('top', top+'%');
		$('.rainbow_sq').css('transform','rotate('+ top +'deg)' );
		$('.rainbow_sq').css('-webkit-transform','rotate('+ top +'deg)' );
		$('.rainbow_sq').css('-ms-transform','rotate('+ top +'deg)' );
	}

	$(document).on('click','.save',saveGame);

	function saveGame(){

		number = time_playing_one_begining - time_playing_one_end;
		points = Math.round(number/100);
		console.log(points);
		var request = $.ajax({
						data: {points: points, game: 1},
						type: "POST",
						url: "/points_updating",
						success: console.log('Points sended'),
		});
		window.location.replace('/saving');
	}

})





