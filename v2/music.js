(function(){
var a=new Audio("https://ekaa2010.github.io/invitation/1-audio-91bdca36.mp3");
a.loop=true;a.preload="none";a.volume=0.8;
var started=false,btn=null;
var css=document.createElement('style');
css.textContent=".mus-btn{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:9999;width:52px;height:52px;border-radius:50%;border:1px solid #a97c2e;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:24px;color:#6b4a14;background:radial-gradient(circle at 35% 30%,#fbf2d7,#d8bf84 55%,#b08d3e);box-shadow:0 4px 14px rgba(90,60,10,.45),inset 0 0 0 3px rgba(255,255,255,.35);opacity:.45;transition:opacity .3s}.mus-btn.on{opacity:1;animation:mus-pulse 2.4s ease-in-out infinite}.mus-btn.off{opacity:.45}@keyframes mus-pulse{50%{box-shadow:0 4px 22px rgba(201,160,73,.9),inset 0 0 0 3px rgba(255,255,255,.35)}}";
document.head.appendChild(css);
function paint(){
 if(!btn)return;
 btn.textContent=a.paused?'🔇':'🎵';
 btn.className='mus-btn '+(a.paused?'off':'on');
 btn.setAttribute('aria-label',a.paused?'تشغيل الموسيقى':'إيقاف الموسيقى');
}
function makeBtn(){
 if(btn||!document.body)return;
 btn=document.createElement('button');
 btn.type='button';btn.className='mus-btn off';btn.textContent='🔇';
 btn.setAttribute('aria-label','تشغيل الموسيقى');
 btn.addEventListener('click',function(ev){
  ev.stopPropagation();ev.preventDefault();
  if(a.paused){var p=a.play();if(p&&p.catch)p.catch(function(){});started=true;}
  else a.pause();
 },true);
 document.body.appendChild(btn);
 a.addEventListener('play',paint);a.addEventListener('pause',paint);
 paint();
}
function done(){["touchend","click","keydown"].forEach(function(n){document.removeEventListener(n,first,true)})}
function first(ev){
 if(btn&&(ev.target===btn))return;
 var p=a.play();
 if(p&&p.then)p.then(function(){started=true;done();paint()}).catch(function(){});
 else{started=true;done()}
}
["touchend","click","keydown"].forEach(function(n){document.addEventListener(n,first,true)});
if(document.body)makeBtn();else document.addEventListener('DOMContentLoaded',makeBtn);
new MutationObserver(makeBtn).observe(document.documentElement,{childList:true,subtree:true});
var p=a.play();if(p&&p.then)p.then(function(){started=true;done();paint()}).catch(function(){});else started=true;
})();
