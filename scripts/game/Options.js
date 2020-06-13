window.Options = {};

Loader.addSounds([
	{ id:"ui_button1", src:"sounds/ui/button1.mp3" },
	{ id:"ui_button2", src:"sounds/ui/button2.mp3" }
]);

const update_player_gender_menu = function() {
	const g_neutral = $("#g_neutral");
	const g_male = $("#g_male");
	const g_female = $("#g_female");
	const g_preview = $("#player_gender_preview");

	if (_.gender == 1) {
		g_neutral.checked = false;
		g_male.checked = true;
		g_female.checked = false;
		g_preview.innerHTML = "masculin";
	} else if (_.gender == 2) {
		g_neutral.checked = false;
		g_male.checked = false;
		g_female.checked = true;
		g_preview.innerHTML = "féminin";
	} else {
		g_neutral.checked = true;
		g_male.checked = false;
		g_female.checked = false;
		g_preview.innerHTML = "neutre";
	}
};

const update_host_gender_menu = function() {
	const g_neutral = $("#hg_neutral");
	const g_male = $("#hg_male");
	const g_female = $("#hg_female");
	const g_preview = $("#host_gender_preview");

	if (_.hostGender == 1) {
		g_neutral.checked = false;
		g_male.checked = true;
		g_female.checked = false;
		g_preview.innerHTML = "masculin";
	} else if (_.hostGender == 2) {
		g_neutral.checked = false;
		g_male.checked = false;
		g_female.checked = true;
		g_preview.innerHTML = "féminin";
	} else {
		g_neutral.checked = true;
		g_male.checked = false;
		g_female.checked = false;
		g_preview.innerHTML = "neutre";
	}
};

(function(){

	var optionsDOM = $("#options");
	var playerGenderOptionsDOM = $("#player_gender_options");
	var hostGenderOptionsDOM = $("#host_gender_options");
	var text_speed_slider = $("#text_speed_slider");
	var text_speed_preview = $("#text_speed_preview");
	var volume_slider = $("#volume_slider");

	text_speed_slider.oninput = function(){
		updateText();
	};

	volume_slider.oninput = function(){
		Howler.volume(parseFloat(volume_slider.value));
	};

	var text_automatic_toggle = $("#text_automatic_toggle");
	text_automatic_toggle.onclick = function(){
		if(!Game.CLICK_TO_ADVANCE){
			HOW_MANY_PROMPTS = 1;
		}
		Game.CLICK_TO_ADVANCE = !Game.CLICK_TO_ADVANCE;
		text_automatic_toggle.innerHTML = Game.CLICK_TO_ADVANCE ? "en cliquant" : "automatique";

		// Sound
		sfx( Game.CLICK_TO_ADVANCE ? "ui_button2" : "ui_button1");

	};

	// Add sounds to slider
	var addSoundsToSlider = function(slider){
		var _play1 = function(){ sfx("ui_button1"); };
		var _play2 = function(){ sfx("ui_button2"); };
		slider.addEventListener("mousedown", _play1);
		slider.addEventListener("touchstart", _play1);
		slider.addEventListener("change", _play2);
		//slider.addEventListener("touchend", _play2);
	};
	addSoundsToSlider(text_speed_slider);
	addSoundsToSlider(volume_slider);



	///////////////////////////////////
	// CLICK TO ADVANCE //
	///////////////////////////////////

	var HOW_MANY_PROMPTS = 2;

	var ctaAlpha = 1;
	var click_to_advance = $("#click_to_advance");
	var cta_text1 = $("#cta_text1");
	var cta_text2 = $("#cta_text2");
	click_to_advance.style.display = "none";
	subscribe("set_how_many_prompts", function(n){
		HOW_MANY_PROMPTS = n;
	});
	subscribe("show_click_to_advance", function(){

		cta_text1.style.display = (HOW_MANY_PROMPTS>0) ? "inline" : "none";
		cta_text2.style.display = (HOW_MANY_PROMPTS>0) ? "none" : "inline";
		HOW_MANY_PROMPTS--;

		click_to_advance.style.display = "block";
		blinkCTA();

	});
	subscribe("hide_click_to_advance", function(){

		click_to_advance.style.display = "none";

		if(currentBlinkingInterval) clearInterval(currentBlinkingInterval);
		currentBlinkingInterval = null;

	});
	subscribe("update_text_speed", function(){
		updateText();
	});
	var currentBlinkingInterval;
	window.BLACK_CTA = false;
	var blinkCTA = function(){

		$("#cta_text2 > div").setAttribute("pic", window.BLACK_CTA ? "next-black" : "next");

		currentBlinkingInterval = setInterval(function(){
			ctaAlpha = (ctaAlpha==1) ? 0 : 1;
			click_to_advance.style.opacity = ctaAlpha;
		}, 700);
	};

	///////////////////////////////////
	// For previewing the text speed //
	///////////////////////////////////

	Options.update = function(){

		// Timeout callbacks...
		for(var i=0; i<_timeoutCallbacks.length; i++){
			var tc = _timeoutCallbacks[i];
			tc.timeLeft -= 1000/60;
			if(tc.timeLeft<=0){
				tc.callback();
				_timeoutCallbacks.splice(i,1); // delete that one
				i -= 1; // set index back one
			}
		}

	};

	var _timeoutCallbacks = [];
	var _setTimeout = function(callback, interval){
		_timeoutCallbacks.push({
			callback: callback,
			timeLeft: interval
		});
	};
	var _clearAllTimeouts = function(){
		_timeoutCallbacks = [];
	};

	var updateText = function(){

		var div = text_speed_preview;

		// Calculate text speed...
		var t = parseFloat(text_speed_slider.value);
		t = (1-t); // whoops, flip around
		// Log slider, from 5 to 120, with 50 "in the middle"
		// f(0)=5, f(0.5)=50, f(1)=120
		// a*e^(0.0*b) + c = 5
		// a*e^(0.5*b) + c = 50
		// a*e^(1.0*b) + c = 120
		// constants gotten by Wolfram Alpha, thanks Wolfy.
		var speed = Math.round( 81*Math.exp(t*0.885) - 76 );
		Game.TEXT_SPEED = speed;

		// Clear previous crap
		_clearAllTimeouts();
		div.innerHTML = "";

		// What's the dialogue?
		var dialogue = Game.TEXT_SPEED<80 ? "À cette vitesse" : "Avec cette lenteur";

		// Put in the text
		var span, chr;
		for(var i=0; i<dialogue.length; i++){
			span = document.createElement("span");
			span.innerHTML = dialogue[i];
			span.style.opacity = 0;
			div.appendChild(span);
		}

		// Then REVEAL letters one-by-one
		var interval = 0;
		for(var i=0; i<dialogue.length; i++){

			var chr = dialogue[i];

			(function(index, interval){
				_setTimeout(function(){
					div.children[index].style.opacity = 1;
				}, interval);
			})(i, interval);

			// Bigger interval
			interval += Game.TEXT_SPEED;

		}

	};
	updateText();

	///////////////////////////////////
	// Showing/hiding options /////////
	///////////////////////////////////


	var ALREADY_DID_INTRO = false;
	var ALREADY_DID_HOST_INTRO = false;

	subscribe("show_options_bottom", function(){

		ALREADY_DID_INTRO = false;
		optionsDOM.setAttribute("past_intro", ALREADY_DID_INTRO ? "yes" : "no");

		optionsDOM.style.top = "447px";
		_clearAllTimeouts();
		text_speed_preview.innerHTML = "";

		sfx("ui_show_choice", {volume:0.4});

		setTimeout(function(){
			updateText();
		},400);

	});

	subscribe("show_player_gender_options_bottom", function(){
		update_player_gender_menu();
		playerGenderOptionsDOM.style.top = "370px";
		sfx("ui_show_choice", {volume:0.4});
	});

	subscribe("show_host_gender_options_bottom", function(){
		publish("hide_tabs");
		update_host_gender_menu();
		hostGenderOptionsDOM.style.top = "370px";
		hostGenderOptionsDOM.style['background-color'] = "rgba(0, 0, 0, 0.5)";
		sfx("ui_show_choice", {volume:0.4});
	});

	$("#options_ok").onclick = function(){
		if(!ALREADY_DID_INTRO){
			sfx("ui_click");
			publish("cut_options_bottom");
		}else{
			publish("hide_options");
		}

	};

	$("#show_player_gender_options").onclick = function(){
		publish("show_player_gender_options");
	};

	$("#show_host_gender_options").onclick = function(){
		publish("show_host_gender_options");
	};

	$("#player_gender_options_ok").onclick = function(){
		if(!ALREADY_DID_INTRO){
			sfx("ui_click");
			publish("cut_player_gender_options_bottom");
			ALREADY_DID_INTRO = true;
		}else{
			publish("hide_player_gender_options");
		}
	};

	$("#host_gender_options_ok").onclick = function(){
		if(!ALREADY_DID_HOST_INTRO){
			sfx("ui_click");
			publish("cut_host_gender_options_bottom");
			ALREADY_DID_HOST_INTRO = true;
		}else{
			publish("hide_host_gender_options");
		}
	};

	subscribe("cut_options_bottom", function(){
		optionsDOM.style.display = "none";
		optionsDOM.style.top = "";
		setTimeout(function(){
			optionsDOM.style.display = "block";
		},100);

		// Total hack, but whatever
		Game.goto("intro-start-gender");
	});

	subscribe("cut_player_gender_options_bottom", function(){
		playerGenderOptionsDOM.style.display = "none";
		playerGenderOptionsDOM.style.top = "";
		setTimeout(function(){
			playerGenderOptionsDOM.style.display = "block";
		},100);

		Game.goto("intro-start-2");
		publish("show_tabs");
	});

	subscribe("cut_host_gender_options_bottom", function(){
		hostGenderOptionsDOM.style.display = "none";
		hostGenderOptionsDOM.style.top = "";
		hostGenderOptionsDOM.style['background-color'] = "unset";
		setTimeout(function(){
			hostGenderOptionsDOM.style.display = "block";
		},100);

		Game.goto("act1c-host");
		publish("show_tabs");
	});

	subscribe("hide_tabs", function(){
		$("#gear").style.display = "none";
		$("#huh").style.display = "none";
	});
	subscribe("show_tabs", function(){
		$("#gear").style.display = "block";
		$("#huh").style.display = "block";
	});


	subscribe("show_options", function(){
		ALREADY_DID_INTRO = true;
		optionsDOM.setAttribute("past_intro", ALREADY_DID_INTRO ? "yes" : "no");

		$("#show_player_gender_options").style.display = "inline-block";
		$("#show_host_gender_options").style.display = "inline-block";

		optionsDOM.style.top = "200px";
		Options.showing = true;
		Game.pause();
		Howler.mute(false); // hack
	});

	subscribe("show_player_gender_options", function(){
		ALREADY_DID_INTRO = true;
		playerGenderOptionsDOM.setAttribute("past_intro", ALREADY_DID_INTRO ? "yes" : "no");

		update_player_gender_menu();

		playerGenderOptionsDOM.style.top = "200px";

		sfx("ui_click");
		optionsDOM.style.top = "";
	});

	subscribe("show_host_gender_options", function(){
		ALREADY_DID_HOST_INTRO = true;
		hostGenderOptionsDOM.setAttribute("past_intro", ALREADY_DID_HOST_INTRO ? "yes" : "no");

		update_player_gender_menu();

		hostGenderOptionsDOM.style.top = "200px";

		sfx("ui_click");
		optionsDOM.style.top = "";
	});

	subscribe("hide_options", function(){
		sfx("ui_click");
		optionsDOM.style.top = "";
		Options.showing = false;
		Game.onUnpause();
	});

	subscribe("hide_player_gender_options", function(){
		sfx("ui_click");
		playerGenderOptionsDOM.style.top = "";

		optionsDOM.style.top = "200px";
	});

	subscribe("hide_host_gender_options", function(){
		sfx("ui_click");
		hostGenderOptionsDOM.style.top = "";

		optionsDOM.style.top = "200px";
	});

})();
