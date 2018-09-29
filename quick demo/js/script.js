$(function(){
	$('.send-btn').click(function(){
		sendChat();
	});

	$('.chat-input').on('keyup', function(e){
		if(e.keyCode === 13) {
			sendChat();
		}
	});

	function sendChat () {
		var txt = $('.chat-input').val().trim();
		if(!txt){ return; }
		$('.chat-input').val("");
		$('.chat-input').focus();
		var userHtmlTxt = '<div class="user-chatlet chatlet">' + txt + '</div>';

		$('.chat-accumulator').append(userHtmlTxt);

		autoChat();
	}

	var autoChatPending = false;
	function autoChat () {
		if(autoChatPending) { return; }
		autoChatPending = true;
		var dummyChats = [
			"Hi",
			"Hello there",
			"What's in your mind ?",
			"I am just a random textbot",
			"How are you feeling today ?",
			"Try the chat icons",
			"Thanks for trying Baricons",
			"Welcome to Baricons Demo"
		];

		var resp = '<div class="auto-chatlet chatlet">' + dummyChats[Math.floor(Math.random() * dummyChats.length)] + '</div>';

		setTimeout(function(){
			$('.chat-accumulator').append(resp);
			autoChatPending = false;
		}, 1000);
		
	}

	$('.chat-input').focus();
	autoChat();

});