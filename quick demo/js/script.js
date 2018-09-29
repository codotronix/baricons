$(function(){
	$('.barick-chat-container').each(function(index, el){
		createIconPanel($(el).find('.baricons-container'), index);
	});

	$('.send-btn').click(function(){
		sendChat();
	});

	$('.chat-input').on('keyup', function(e){
		if(e.keyCode === 13) {
			sendChat();
		}
	});

	$('body').on('click', '.barick-chat-container .show-smiley', function () {
		$(this).closest('.barick-chat-container').find('.baricons-container').toggleClass('visible');
	});

	$('body').on('click', '.barick-chat-container .icon-span', function(){
		
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



	function createIconPanel (el, idx) {
		var w=40, h=38.12, htm = '', id;
		for(var x=0; x<10; x++) {
			for(var y=0; y<8; y++) {
				id = 'baricon-' + idx + '-' + x + '-' + y;
				htm += '<span id=' +id+ ' class="icon-span" style="background-position-x: -' + w*x + 'px; background-position-y: -' + h*y + 'px;"></span>';				
			}
		}

		el.append(htm);
	}

	$('.chat-input').focus();
	createIconPanel();
	autoChat();

});