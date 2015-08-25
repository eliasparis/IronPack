$(document).ready(function(){

	$('#gift').on('click', discoverGift)

	function discoverGift(){
		$('.gift_box_each').remove();
		$('.gift_box_open').css('visibility','visible')

		var iron_pack = ['<p class="text_discover">Here you have a big bunch of cool links provided by the best mentors <br>that will keep you updated <br> about </p>'];
		$('.gift_box_open').prepend(iron_pack);
		
		var request = $.ajax({
						type: "GET",
						url: "/urls",
						dataType: "json",
		});
		
		request.done(handleUrl);


		function handleUrl(url){
			for (i = 0; i <= url.length; i++) {

				var urls = ['<a href="'+ url[i].url +'" target="_blank"class="gift_link" id="'+ i +'"><p><b>'+ url[i].name +'</b></p></a>'];

				$('.gift_box_open').append(urls);
			};

		};
	}

});