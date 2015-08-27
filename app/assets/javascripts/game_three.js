$(document).ready(function(){
	
	var i = 1;
	var x = 1;
	var points = 0;
	var colored_text_sub = ['<span class="blue_t">var</span><span class="green_t"> Item</span><span class="red_t"> =</span> <span class="blue_t">function </span><span class="white_t">(</span><span class="orange_t">name, price</span><span class="white_t">){</span>',
							'<span class="white_t">this.name</span><span class="red_t"> =</span>  <span class="white_t">name;</span>',
							'<span class="white_t">this.price</span><span class="red_t"> =</span>  <span class="white_t">price;</span>',
							'<span class="white_t">}</span>',
							'',
							'<span class="blue_t">var </span><span class="white_t">apple </span><span class="red_t"> = new</span><span class="white_t"> Item (</span><span class="yellow_t">\'apple\'</span><span class="white_t">, </span><span class="lila_t">10</span><span class="white_t">);</span>',
							'<span class="blue_t">var </span><span class="white_t">orange </span><span class="red_t"> = new</span><span class="white_t"> Item (</span><span class="yellow_t">\'orange\'</span><span class="white_t">, </span><span class="lila_t">5</span><span class="white_t">);</span>',	
							'<span class="blue_t">var </span><span class="white_t">grapes </span><span class="red_t"> = new</span><span class="white_t"> Item (</span><span class="yellow_t">\'grapes\'</span><span class="white_t">, </span><span class="lila_t">15</span><span class="white_t">);</span>',
							'',
							'<span class="blue_t">var </span><span class="green_t">ShoppingCart </span><span class="red_t">= </span><span class="blue_t">function </span><span class="white_t">(){</span>',
							'',
							'<span class="white_t">this.list </span><span class="red_t">= </span><span class="white_t">[];</span>',
							'',
							'<span class="blue_t">this</span><span class="white_t">.</span><span class="green_t">calctotal </span><span class="red_t">= </span><span class="blue_t">function</span><span class="white_t">(){</span>',
							'',
							'<span class="blue_t">var </span><span class="white_t">total </span><span class="red_t">= </span><span class="lila_t">0</span><span class="white_t">;</span>',
							'',
							'<span class="white_t">this.list.forEach(</span><span class="blue_t">function </span><span class="white_t">(</span><span class="orange_t">item</span><span class="white_t">)</span>',
							'<span class="white_t">{</span>',
							'<span class="white_t">total </span></span><span class="red_t">+= </span><span class="white_t">item.price;</span>',
							'<span class="white_t">});</span>',
							'',
							'<span class="white_t">};</span>',
							'<span class="white_t">}</span>',
							'',
							'',
							'<span class="blue_t">var </span><span class="white_t">cart </span><span class="red_t">= new </span><span class="white_t">ShoppingCart ();</span>',
							'',
							'<span class="white_t">cart.additem(apple);</span>',
							'<span class="white_t">cart.additem(grapes);</span>',
							'<span class="white_t">cart.additem(apple);</span>',
							''
							];

	var colored_text_vim = ['<span class="turq_v">var </span><span class="blue_v">Item = </span><span class="turq_v">function </span><span class="blue_v">(name, price)</span><span class="turq_v">{</span>',
							'<span class="blue_v">this</span><span class="turq_v">.name = name;</span>',
							'<span class="blue_v">this</span><span class="turq_v">.price = price;</span>',
							'<span class="turq_v">}</span>',
							'',
							'<span class="turq_v">var </span><span class="blue_v">apple = </span><span class="brown_v">new </span><span class="blue_v">Item (</span><span></span><span class="red_v">\'apple\'</span><span class="blue_v">, 10);</span>',
							'<span class="turq_v">var </span><span class="blue_v">orange = </span><span class="brown_v">new </span><span class="blue_v">Item (</span><span></span><span class="red_v">\'orange\'</span><span class="blue_v">, 5);</span>',
							'<span class="turq_v">var </span><span class="blue_v">grapes = </span><span class="brown_v">new </span><span class="blue_v">Item (</span><span></span><span class="red_v">\'grapes\'</span><span class="blue_v">, 15);</span>',
							'',
							'<span class="turq_v">var </span><span class="blue_v">ShoppingCart = </span><span class="turq_v">function </span><span class="blue_v">()</span><span class="turq_v">{</span>',
							'',
							'<span class="turq_v">this</span><span class="blue_v">.list = </span><span class="turq_v">[]</span><span class="blue_v">;</span>',
							'',
							'<span class="turq_v">this</span><span class="blue_v">.calctotal = </span><span class="turq_v">function</span><span class="blue_v">()</span><span class="turq_v">{</span>',
							'',
							'<span class="turq_v">var </span><span class="blue_v">total = 0;</span>',
							'',
							'<span class="turq_v">this</span><span class="blue_v">.list.forEach(</span><span class="turq_v">function </span><span class="blue_v">(item)</span>',
							'<span class="turq_v">{</span>',
							'<span class="blue_v">total += item.price;</span>',
							'<span class="turq_v">}</span><span class="blue_v">);</span>',
							'',
							'<span class="turq_v">}</span><span class="blue_v">;</span>',
							'<span class="turq_v">}</span>',
							'',
							'',
							'<span class="turq_v">var </span><span class="blue_v">cart = </span><span class="brown_v">new </span><span class="blue_v">ShoppingCart ();</span>',
							'',
							'<span class="blue_v">cart.additem(apple);</span>',
							'<span class="blue_v">cart.additem(grapes);</span>',
							'<span class="blue_v">cart.additem(apple);</span>',
							''
							];

	$(window).keyup(function(e) {
		if (e.keyCode === 13) {
			var value = $('#written').val();
			var line = $('#'+i).text();
			
			if (value === line ) {
				$('#'+i).html(colored_text_sub[(i-1)])
				$('#ok_or_nop').text('Ok')
				points += 13;
				i++
				if (i === 33) {
					points += (i-x)*15;
					x = 0;
					thefWinner();
					cleanThings();
					savePoints(points);
					setTimeout(redirectPath, 3000);
				};
			}else{
				$('#ok_or_nop').text('Noup')
			};
			
			$('#written').val('')
		}
	});

	! function vim(){
		if (x < 32) {
 			$('#'+x+'_vim').html(colored_text_vim[(x-1)])
 			x++
			setTimeout(vim, getRandomInt(4600,6500));
		}else{
			scaredPinchito();
			cleanThings();
			savePoints(points);
			setTimeout(redirectPath, 3000);
		};
	}();

	var pinchitoSay = ['Ey you Cheeky Bastards','Welcome to HackerSchool','I love JavaScript','@pinchito','W T F','Halt!! HammerZeit!'];

	function getRandom(maxSize) {
		return parseInt(Math.random() * maxSize);
	};

	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	function scaredPinchito(){
		$('.three_scroller').append('<div class="scary_pinch"><div></div></div>');
	};

	function thefWinner(){
		$('.three_scroller').append('<div class="scary_pinch"><span>Great!</span></div>');
	};

	function cleanThings(){
		$('.input').html('');
	};

	function savePoints(points){
		console.log(points);
		var request = $.ajax({
						data: {points: points, game: 3},
						type: "POST",
						url: "/points_updating",
						success: console.log('Points sended'),
		});
	};

	function redirectPath(){
		window.location.replace('/saving');
	};

	function pinchitoNoTalking(){
		$('.pinch_comments').css("visibility", 'hidden');
 		
		setTimeout(pinchitoTalking, getRandomInt(2900,4000));
	};

	function pinchitoTalking(){
		var z = getRandom(6);
		$('#pinch_say').text(pinchitoSay[z]);
		$('.pinch_comments').css("visibility", 'visible');

		setTimeout(pinchitoNoTalking, getRandomInt(2000,3100));
	}

	pinchitoNoTalking();

});



