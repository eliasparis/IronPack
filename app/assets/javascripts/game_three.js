$(document).ready(function(){
	var i = 1;
	
	

	$(window).keyup(function(e) {
		if (e.keyCode === 13) {
			var value = $('#written').val();
			var line = $('#'+i).text();
			
			if (value === line ) {
				$('#'+i).html('panole')
				i++
			}else{
				console.log('nop')
			};
			
			$('#written').val('')
		}
	});

});