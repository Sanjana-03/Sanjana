(function (window){
	var helloGreet = {};
	var speakWord = "Hello";

	helloGreet.speak = function(name){
		console.log(speakWord + " " + name);
	};

    window.helloGreet = helloGreet;

})(window);