(function (window){
	var names = ["Sanjana", "John", "Neha", "Shruti", "Bhavik", "Tashi", "Jatin", "Jayesh", "Mayank"];
	for (var i in names){
		var firstLetter = ((names[i]).charAt(0).toLowerCase());
		if(firstLetter == 'j')
		{
			window.byeGreet.speak(names[i]);
		}
		else
		{
			window.helloGreet.speak(names[i]);
		}
	}
})(window);


