(function(window){
    var speakWord = "Good Bye";
    var byeSpeak={};
    (function(window){
        byeSpeak.speak = function(name) {
            console.log(speakWord + " " + name);
        };
        window.byeSpeak=byeSpeak;
    })(window);
})(window);