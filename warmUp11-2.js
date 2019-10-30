//$('button').css('color','red')
var bool;
$('#right').on('click', function() {
	
	bool = false;
	$('#creat').on('click', function() {
		if (bool === false) {
			$('#ul-right').append('<li>button Right was clicked</li>');
		}
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