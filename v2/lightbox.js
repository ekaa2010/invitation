(function(){
var css=document.createElement('style');
css.textContent=".lb-ov{position:fixed;inset:0;z-index:10000;background:rgba(30,20,5,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:lb-fade .25s ease both}.lb-ov img{max-width:94vw;max-height:92vh;border:2px solid #c9a049;border-radius:10px;box-shadow:0 12px 44px rgba(0,0,0,.6);object-fit:contain}.lb-x{position:absolute;top:14px;inset-inline-end:18px;width:42px;height:42px;border-radius:50%;border:1px solid #c9a049;background:rgba(245,237,218,.12);color:#ecd085;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center}@keyframes lb-fade{from{opacity:0}to{opacity:1}}.cc-gal img,.cc-hero img{cursor:zoom-in}";
document.head.appendChild(css);
function close(){var o=document.querySelector('.lb-ov');if(o)o.remove();document.removeEventListener('keydown',onKey,true)}
function onKey(e){if(e.key==='Escape')close()}
function open(src){
 close();
 var o=document.createElement('div');o.className='lb-ov';
 var im=document.createElement('img');im.src=src;im.alt='';
 var x=document.createElement('button');x.type='button';x.className='lb-x';x.textContent='✕';x.setAttribute('aria-label','إغلاق');
 o.appendChild(im);o.appendChild(x);
 o.addEventListener('click',close);
 document.body.appendChild(o);
 document.addEventListener('keydown',onKey,true);
}
function bind(){
 document.querySelectorAll('.cc-gal img,.cc-hero img').forEach(function(im){
  if(im.dataset.lbBound)return;
  if(!im.src||im.src.indexOf('data:,')===0)return;
  im.dataset.lbBound='1';
  im.addEventListener('click',function(){open(im.currentSrc||im.src)});
 });
}
new MutationObserver(bind).observe(document.documentElement,{childList:true,subtree:true});bind();
})();
