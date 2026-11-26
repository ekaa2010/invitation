(function(){
var SRC="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cb/A_Midsummer_Night%27s_Dream_Op._61_Wedding_March_%28Mendelssohn%29_European_Archive.ogg/A_Midsummer_Night%27s_Dream_Op._61_Wedding_March_%28Mendelssohn%29_European_Archive.ogg.mp3";
var a=new Audio(SRC);a.loop=true;a.preload="auto";a.volume=0.7;
var st=document.createElement("style");
st.textContent="#mz{position:fixed;right:10px;top:50%;margin-top:-23px;width:46px;height:46px;border-radius:50%;border:0;padding:0;cursor:pointer;z-index:99999;box-shadow:0 2px 10px rgba(0,0,0,.45);background:radial-gradient(circle,#c9a24a 0 17%,#111 18% 30%,#2a2a2a 31% 33%,#111 34% 46%,#2a2a2a 47% 49%,#111 50% 100%);opacity:.92;-webkit-tap-highlight-color:transparent}#mz:after{content:'';position:absolute;left:50%;top:50%;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:#e9dfca}#mz.on{animation:mzs 3s linear infinite}@keyframes mzs{to{transform:rotate(360deg)}}#mz.off:before{content:'';position:absolute;left:50%;top:-4px;width:2px;height:54px;background:#c9a24a;transform:rotate(45deg);box-shadow:0 0 0 1px rgba(0,0,0,.4)}";
document.head.appendChild(st);
var b=document.createElement("button");b.id="mz";b.setAttribute("aria-label","music");b.className="off";
document.body.appendChild(b);
var userPaused=false;
function sync(){b.className=a.paused?"off":"on"}
function play(){var p=a.play();if(p&&p.catch)p.catch(function(){});setTimeout(sync,100)}
b.addEventListener("click",function(e){e.stopPropagation();if(a.paused){userPaused=false;play()}else{userPaused=true;a.pause();sync()}});
a.addEventListener("play",sync);a.addEventListener("pause",sync);
function first(e){if(e&&e.target===b)return;if(!userPaused&&a.paused)play();["pointerdown","touchend","click","keydown"].forEach(function(n){document.removeEventListener(n,first,true)})}
["pointerdown","touchend","click","keydown"].forEach(function(n){document.addEventListener(n,first,true)});
play();
})();
