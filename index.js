//$('body').css('background', 'red')

var i = 0;
$('#add-button').on('click', function() {
	i += 1;
	$('ul').append('<li class="Class'+ i +'">' + $('#value').val() + '</li>')
	
	if (i === 2) {
		i = 0; 
	}
})