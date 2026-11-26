(function(){
var a=new Audio("https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Richard_Wagner_-_Ride_of_the_Valkyries.ogg/Richard_Wagner_-_Ride_of_the_Valkyries.ogg.mp3");a.loop=true;a.preload="auto";a.volume=0.8;
function done(){["touchend","click","keydown"].forEach(function(n){document.removeEventListener(n,first,true)})}
function first(){var p=a.play();if(p&&p.then)p.then(done).catch(function(){});else done()}
["touchend","click","keydown"].forEach(function(n){document.addEventListener(n,first,true)});
var p=a.play();if(p&&p.then)p.then(done).catch(function(){});
})();
