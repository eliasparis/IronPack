
$(document).ready(function(){

	$('#play_one_button').on('click', beginGameOne);

	var instructions_game_one_html = 
			['<div>ffffffffff',
			'</div>'
		    ].join('\n');

	function beginGameOne(event){
		event.preventDefault();
		console.log('aupa');
		$('.one_ins_background').text(instructions_game_one_html);
	}

})





