(function(){
var SB_URL="https://fglvwsalhsyybxhqdsio.supabase.co",SB_KEY="sb_publishable_U-qZjSpuC0Huwnoe_939tw_T9v90ECc";
var css=document.createElement('style');
css.textContent=".ded-box{direction:rtl;text-align:center;padding:36px 22px 18px;font-family:'Amiri',serif;color:inherit}.ded-box h2{margin:0 0 6px;font-size:26px}.ded-box p{margin:0 0 14px;opacity:.8;font-size:15px}.ded-box input,.ded-box textarea{width:100%;box-sizing:border-box;margin:6px 0;padding:11px 12px;border:1px solid #c9a95c;border-radius:10px;background:rgba(255,255,255,.7);font:inherit;font-size:16px;color:#333;direction:rtl}.ded-box textarea{min-height:90px}.ded-box button{margin-top:8px;padding:11px 30px;border:1px solid #c9a95c;border-radius:999px;background:#c9a95c;color:#fff;font:inherit;font-size:16px;cursor:pointer}.ded-box button[disabled]{opacity:.6}.ded-msg{min-height:20px;margin-top:8px;font-size:15px}";
document.head.appendChild(css);
function build(){
 var col=document.querySelector('.cc-col');
 if(!col||!document.querySelector('.cc-end')||document.getElementById('ded-box'))return;
 var d=document.createElement('div');d.id='ded-box';d.className='ded-box';
 d.innerHTML='<h2>اترك إهداءك</h2><p>اكتب اسمك وكلمة للعروسين</p><input id="ded-name" maxlength="80" placeholder="الاسم"><textarea id="ded-text" maxlength="1000" placeholder="إهداؤك"></textarea><input id="ded-hp" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;height:0;opacity:0"><button id="ded-send">إرسال</button><div class="ded-msg" id="ded-msg"></div>';
 col.appendChild(d);
 document.getElementById('ded-send').onclick=async function(){
  var n=document.getElementById('ded-name').value.trim(),t=document.getElementById('ded-text').value.trim(),m=document.getElementById('ded-msg'),b=this;
  if(document.getElementById('ded-hp').value)return;
  if(!n||!t){m.textContent='اكتب الاسم والإهداء';return}
  b.disabled=true;m.textContent='...';
  try{var r=await fetch(SB_URL+'/rest/v1/dedications',{method:'POST',headers:{apikey:SB_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({name:n,message:t})});
   if(!r.ok)throw 0;m.textContent='وصل إهداؤك، شكراً ❤';document.getElementById('ded-name').value='';document.getElementById('ded-text').value='';}
  catch(e){m.textContent='حصلت مشكلة، حاول تاني';}
  b.disabled=false;};
}
new MutationObserver(build).observe(document.documentElement,{childList:true,subtree:true});build();
})();
