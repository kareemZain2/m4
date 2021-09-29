(function(window){
    var speakWord = "Hello";
    var helloSpeaker={};
    (function(window){
        helloSpeaker.speak = function(name) {
            console.log(speakWord + " " + name);
        };
        window.helloSpeaker=helloSpeaker;
    })(window);
})(window);