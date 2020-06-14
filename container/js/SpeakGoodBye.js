(function (window){
	var byeGreet = {};
	var speakWord = "Good Bye";
  
    byeGreet.speak = function(name){
           console.log(speakWord + " " + name);
    };
    window.byeGreet = byeGreet;

})(window);