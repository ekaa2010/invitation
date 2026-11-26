(function(){
var a=new Audio("https://upload.wikimedia.org/wikipedia/commons/transcoded/b/be/Clair_de_lune_%28Claude_Debussy%29_Suite_bergamasque.ogg/Clair_de_lune_%28Claude_Debussy%29_Suite_bergamasque.ogg.mp3");a.loop=true;a.preload="auto";a.volume=0.6;
function done(){["touchend","click","keydown"].forEach(function(n){document.removeEventListener(n,first,true)})}
function first(){var p=a.play();if(p&&p.then)p.then(done).catch(function(){});else done()}
["touchend","click","keydown"].forEach(function(n){document.addEventListener(n,first,true)});
var p=a.play();if(p&&p.then)p.then(done).catch(function(){});
})();
