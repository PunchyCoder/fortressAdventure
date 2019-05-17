 

function addImage(item) {
	$('.pics').append(`<img src="https://media.giphy.com/media/11BgMeY4SMOAEg/giphy.gif" height="80" width="80">`);
} 

function useTorch() { 
	// add a picture of a torch flickering 
	// what if when a torch is in use, the background is permanently yellow(or other color)??
	$('body').css('background-color', 'yellow'); 
	// flash the background yellow
	setTimeout(()=> $('body').css('background-color', 'black'), 120) 
	addImage();
}

function resetCommand() {
	//reset input value
	$('#command-input').val(''); 
}

function enterCommand(location) {
	const input = $('#command-input').val();

	//enter torch command
	if (input == 'torch') {
		useTorch();
	}

	// enter door command
	if (input == 'door') {
		location.door(); 
	}

	resetCommand();
}

function message(textHTML) {
	$('.container').append(`<p class="message box"></p>`);
	$('.message').text(textHTML);
}

function watchForm() {
	// push and pop new locations
	const playerLocation = [];
	playerLocation.push(scene.entrance); 

	 // add location data to display
	$('#location').append(`<h2 class='box'>${playerLocation[0]['name']}</h2>`);

	// add Submit event listener
	message(scene.entrance.message[1]);
	$('form').submit(function() {
		event.preventDefault();
		enterCommand(playerLocation[0]);
	})

}

$(watchForm);