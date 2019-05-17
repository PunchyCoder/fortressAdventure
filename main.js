

function addImage(item) {
	$('.pics').append(`<img src="https://media.giphy.com/media/11BgMeY4SMOAEg/giphy.gif" height="80" width="80">`);
} 

function useTorch() { // should add a picture of a torch flickering 
	$('body').css('background-color', 'yellow'); // what if when a torch is in use, the background is permanently yellow(or other color)??
	setTimeout(()=> $('body').css('background-color', 'black'), 120) // flashes the background yellow
	addImage();
}

function enterCommand() {
	const input = $('#command-input').val();
	if (input == 'torch') {
		useTorch();
	};
	$('#command-input').val(''); //reset input value
}

function message(textHTML) {
	$('.container').append(`<p class="message"></p>`);
	$('.message').text(textHTML);
}

function watchForm() {
	message(scene.message);
	$('form').submit(function() {
		event.preventDefault();
		enterCommand();
	})

}

$(watchForm);