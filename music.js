(function(){
var a=new Audio("/invitation/1-audio-91bdca36.mp3");a.loop=true;a.preload="auto";a.volume=0.8;
function done(){["touchend","click","keydown"].forEach(function(n){document.removeEventListener(n,first,true)})}
function first(){var p=a.play();if(p&&p.then)p.then(done).catch(function(){});else done()}
["touchend","click","keydown"].forEach(function(n){document.addEventListener(n,first,true)});
var p=a.play();if(p&&p.then)p.then(done).catch(function(){});
})();
