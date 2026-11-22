window.__dm=(function(){var m=[[0]];for(var s=1;s<8;s*=2){var n=[];for(var y=0;y<s*2;y++){n[y]=[];for(var x=0;x<s*2;x++){var v=m[y%s][x%s]*4;var qx=x>=s?1:0,qy=y>=s?1:0;n[y][x]=v+(qx===0&&qy===0?0:qx===1&&qy===0?2:qx===0&&qy===1?3:1)}}m=n}var BAY=m;
return function(H,inv){var dpr=Math.max(1,Math.round(window.devicePixelRatio||1)),s=1.1,rows=Math.ceil(H*(2+1/s))+8,c=document.createElement('canvas');c.width=8*dpr;c.height=rows*dpr;var g=c.getContext('2d'),im=g.createImageData(c.width,c.height),d=im.data,I=!!inv;
for(var ri=0;ri<rows;ri++){var r=ri-H,f=s*r/H,row=BAY[((r%8)+8)%8];for(var x=0;x<8;x++){var on=(row[x]/64)<f;if(on!==I){for(var sy=0;sy<dpr;sy++)for(var sx=0;sx<dpr;sx++){d[((ri*dpr+sy)*c.width+x*dpr+sx)*4+3]=255}}}}
g.putImageData(im,0,0);var u='url('+c.toDataURL()+')',px=new Image();px.src=c.toDataURL();
return{url:u,size:'8px '+rows+'px',pos:function(p){return '0 '+(-(Math.round((p*(1+s)-s)*H/s)+H))+'px'},apply:function(el,p){el.style.webkitMaskImage=el.style.maskImage=u;el.style.webkitMaskSize=el.style.maskSize='8px '+rows+'px';el.style.webkitMaskRepeat=el.style.maskRepeat='repeat-x';el.style.webkitMaskPosition=el.style.maskPosition=this.pos(p)},move:function(el,p){el.style.webkitMaskPosition=el.style.maskPosition=this.pos(p)}}}})();
(function(){
var de=document.documentElement,L=document.querySelector('.loader');
if(!L||!de.classList.contains('js')||de.classList.contains('loaded')){de.classList.add('loaded');return}
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var num=L.querySelector('.n'),bar=L.querySelector('.ld-bar i'),msg=L.querySelector('.ld-msg');
var total=0,done=0,t0=Date.now(),finished=false;
function track(p){total++;var f=false;function d(){if(!f){f=true;done++}}p.then(d,d)}
function ev(el,names){return new Promise(function(r){names.forEach(function(n){el.addEventListener(n,r,{once:true})})})}
[].slice.call(document.images).forEach(function(i){if(i.loading==='lazy')i.loading='eager';track(i.complete&&i.naturalWidth>0?Promise.resolve():ev(i,['load','error']))});
[].slice.call(document.querySelectorAll('video')).forEach(function(v){track(v.readyState>=1?Promise.resolve():ev(v,['loadedmetadata','error','stalled']))});
[].slice.call(document.querySelectorAll('.bgp')).forEach(function(e){var m=(e.style.backgroundImage||'').match(/url\(["']?([^"')]+)/);if(!m)return;track(new Promise(function(r){var im=new Image();im.onload=im.onerror=r;im.src=m[1]}))});
if(document.fonts&&document.fonts.ready)track(document.fonts.ready);
var shown=0;
function frame(){if(finished)return;var tgt=total?done/total:1;shown+=(tgt-shown)*.14+.002;if(shown>tgt)shown=tgt;num.textContent=Math.round(shown*100);bar.style.width=(shown*100)+'%';
 var ok=done>=total&&shown>=.995&&Date.now()-t0>900;if(ok||Date.now()-t0>30000){finish();return}requestAnimationFrame(frame)}
var dm=null;if(!rm){try{dm=window.__dm(Math.min(2400,Math.max(innerHeight,screen.height||0)),true);dm.apply(L,0)}catch(e){dm=null}}
requestAnimationFrame(frame);
var bay=(function(){var m=[[0]];for(var s=1;s<8;s*=2){var n=[];for(var y=0;y<s*2;y++){n[y]=[];for(var x=0;x<s*2;x++){var v=m[y%s][x%s]*4;var qx=x>=s?1:0,qy=y>=s?1:0;n[y][x]=v+(qx===0&&qy===0?0:qx===1&&qy===0?2:qx===0&&qy===1?3:1)}}m=n}return m})();
var dpr=Math.max(1,Math.round(devicePixelRatio||1));
function release(){de.classList.add('loaded');de.style.scrollBehavior='auto';
 try{if(location.hash.length>1){var el=document.querySelector(location.hash);if(el)el.scrollIntoView()}}catch(e){}
 de.style.scrollBehavior='';dispatchEvent(new Event('resize'));dispatchEvent(new Event('scroll'))}
function finish(){if(finished)return;finished=true;num.textContent='100';bar.style.width='100%';msg.textContent='Ready';
 if(rm){L.classList.add('fade');setTimeout(release,520);return}
 var t1=Date.now();
 (function step(){var p=Math.min(1,(Date.now()-t1)/1000);if(dm)dm.move(L,p);if(p>=1){release();return}requestAnimationFrame(step)})()}
})();
(function(){
document.documentElement.classList.add('r3');
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function fit(){document.querySelectorAll('[data-fit]').forEach(function(el){var cs=getComputedStyle(el.parentElement);var pw=el.parentElement.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);el.style.fontSize='100px';el.style.width='max-content';var w=el.getBoundingClientRect().width;el.style.width='';if(w>0)el.style.fontSize=(100*pw/w*.995).toFixed(2)+'px'})}
fit();addEventListener('resize',fit);addEventListener('load',function(){fit();setTimeout(fit,400)});if(document.fonts){document.fonts.ready.then(fit);if(document.fonts.addEventListener)document.fonts.addEventListener('loadingdone',fit)}if('ResizeObserver' in window){var ro=new ResizeObserver(fit);document.querySelectorAll('[data-fit]').forEach(function(e){ro.observe(e.parentElement)})}
if(rm)return;
var rv=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px'});rv.forEach(function(e){io.observe(e)})}else{rv.forEach(function(e){e.classList.add('in')})}
var fills=[].slice.call(document.querySelectorAll('[data-fill]'));
fills.forEach(function(p){var words=p.textContent.trim().split(/\s+/);p.innerHTML=words.map(function(w){return '<span class="w">'+w+'</span>'}).join(' ');p._w=[].slice.call(p.querySelectorAll('.w'))});
var pcs=[].slice.call(document.querySelectorAll('.pc .fr')),covers=[].slice.call(document.querySelectorAll('.case .cover'));
var dis=[];var t1=document.querySelector('.cta-top'),t2=document.querySelector('.rowend');if(t1)dis.push({el:t1.querySelector('.dis'),host:t1,a:.95,b:.7});if(t2)dis.push({el:t2.querySelector('.dis'),host:t2,a:.92,b:.7});
var wm=document.querySelector('.hero3 .wordmark'),trio=document.querySelector('.trio'),tls=[].slice.call(document.querySelectorAll('.tl')),tick=false;
function upd(){tick=false;var h=innerHeight;
fills.forEach(function(p){var r=p.getBoundingClientRect();var pr=(h*.85-r.top)/(h*.5+r.height*.4);pr=Math.max(0,Math.min(1,pr));var n=p._w.length;p._w.forEach(function(w,i){w.classList.toggle('on',pr>=(i+.4)/n)})});
pcs.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-80||r.top>h+80)return;var pr=(r.top+r.height/2-h/2)/(h/2+r.height/2);pr=Math.max(-1,Math.min(1,pr));e.style.translate='0 '+(-pr*16).toFixed(1)+'px'});
covers.forEach(function(cv){var cs=cv.closest('.case'),r=cs.getBoundingClientRect();if(r.bottom<-80||r.top>h+80)return;var cp=Math.max(0,Math.min(1,(h/2-r.top)/r.height));var k=(cp-.5)*2;var hh=cv.offsetHeight;cv.querySelectorAll('img').forEach(function(im){im.style.transform='translate3d(0,'+(k*hh*.05).toFixed(1)+'px,0)'});cv.style.translate='0 '+(k*-34).toFixed(1)+'px'});
dis.forEach(function(d){var r=d.host.getBoundingClientRect();var p=(h*d.a-r.top)/(h*d.b);p=Math.max(0,Math.min(1,p));var inv=d.el.hasAttribute('data-inv');d.el.classList.toggle('off',inv?p>=.995:p<.02);var H=Math.round(d.host.offsetHeight)||100;if(d.H!==H){d.H=H;d.dm=window.__dm(H,inv);d.dm.apply(d.el,p)}else d.dm.move(d.el,p)});
if(wm){var y=Math.min(1,scrollY/(h*.9));wm.style.opacity=(1-y*.85).toFixed(3);wm.style.transform='translate3d(0,'+(y*8).toFixed(1)+'vh,0) scale('+(1-y*.06).toFixed(3)+')'}
if(trio){var r=trio.getBoundingClientRect(),inn=trio.querySelector('.trio-in'),top0=parseFloat(getComputedStyle(inn).top)||0;var pr=(top0-r.top)/Math.max(1,r.height-inn.offsetHeight);pr=Math.max(0,Math.min(1,pr));tls.forEach(function(l,i){l.classList.toggle('on',pr>=(i+.25)/tls.length*.95)})}
}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
})();

/* drag proof cards */
(function(){var z=30;document.querySelectorAll('.pc').forEach(function(c){var sx,sy,ox=0,oy=0,moved=false,id=null;
c.addEventListener('pointerdown',function(e){if(e.button>0)return;if(e.target.closest('[data-play]'))return;id=e.pointerId;sx=e.clientX;sy=e.clientY;ox=parseFloat(c.style.getPropertyValue('--dx'))||0;oy=parseFloat(c.style.getPropertyValue('--dy'))||0;moved=false;c.setPointerCapture(id)});
c.addEventListener('pointermove',function(e){if(e.pointerId!==id)return;var dx=e.clientX-sx,dy=e.clientY-sy;if(!moved&&Math.abs(dx)+Math.abs(dy)<5)return;if(!moved){moved=true;c.classList.add('drag');c.style.zIndex=++z}c.style.setProperty('--dx',(ox+dx)+'px');c.style.setProperty('--dy',(oy+dy)+'px')});
function end(e){if(e.pointerId!==id)return;id=null;c.classList.remove('drag');if(moved)c.style.zIndex=z;else if(e.type==='pointerup'&&!e.target.closest('[data-play]')){c.classList.toggle('nocap');if(e.pointerType!=='mouse')c.classList.toggle('tapped')}}
c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);
c.addEventListener('dragstart',function(e){e.preventDefault()})})})();

document.querySelectorAll('.pc video').forEach(function(v){var c=v.closest('.pc');v.addEventListener('play',function(){c.classList.add('playing')});v.addEventListener('pause',function(){c.classList.remove('playing')})});


/* lightbox */
(function(){var de=document.documentElement,box=document.createElement('div');box.className='lb';box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.innerHTML='<img alt=""><button type="button" aria-label="Close">Close</button>';document.body.appendChild(box);
var img=box.querySelector('img'),last=null;
function open(c){var s=c.querySelector('.col');if(!s)return;last=c;img.src=c.getAttribute('data-full')||s.currentSrc||s.src;img.alt=s.alt||'';box.classList.add('open');de.classList.add('lb-lock');requestAnimationFrame(function(){box.classList.add('show')});box.querySelector('button').focus()}
function close(){box.classList.remove('show');setTimeout(function(){box.classList.remove('open');de.classList.remove('lb-lock');img.removeAttribute('src');if(last)last.focus()},matchMedia('(prefers-reduced-motion:reduce)').matches?0:350)}
document.querySelectorAll('.case .cover').forEach(function(c){c.addEventListener('click',function(){open(c)});c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(c)}})});
box.addEventListener('click',close);addEventListener('keydown',function(e){if(e.key==='Escape'&&box.classList.contains('open'))close()});
})();
