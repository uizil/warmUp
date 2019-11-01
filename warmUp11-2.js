//$('button').css('color','red')

$('#right').on('click', function() {
	

	$('#creat').on('click', function() {
		
			$('<li>button Right was clicked</li>').appendTo('#ul-right');
		
	});
});

$('#left').on('click', function() {
	
	bool = true;
	$('#creat').on('click', function() {
		if (bool) {
			$('#ul-left').append('<li>button left was clicked</li>');
		}
	});
});

/*
function clickRigt() {
	$('#creat').on('click', function() {

		$('<li>button Right was clicked</li>').appendTo('#ul-right');
});
}
*/
/*
function clickLeft() {
	$('#creat').on('click', function() {

		$('<li>button Left was clicked</li>').appendTo('#ul-left');
});
}

$('#creat').on('click', clickLeft());
//$('#creat').on('click', clickRigt());
*/