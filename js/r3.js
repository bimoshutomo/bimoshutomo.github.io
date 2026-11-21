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
var bay=(function(){var m=[[0]];for(var s=1;s<8;s*=2){var n=[];for(var y=0;y<s*2;y++){n[y]=[];for(var x=0;x<s*2;x++){var v=m[y%s][x%s]*4;var qx=x>=s?1:0,qy=y>=s?1:0;n[y][x]=v+(qx===0&&qy===0?0:qx===1&&qy===0?2:qx===0&&qy===1?3:1)}}m=n}return m})();
var mc={},dpr=Math.max(1,Math.round(window.devicePixelRatio||1));
function mk(L,H,inv){var k=L+'_'+H+(inv?'i':'');if(mc[k])return mc[k];var p=L/100,s=1.1,c=document.createElement('canvas');c.width=8*dpr;c.height=H*dpr;var g=c.getContext('2d');for(var y=0;y<H;y++){var th=p*(1+s)-s*(1-y/H);for(var x=0;x<8;x++)if((bay[y%8][x]/64<th)!==!!inv)g.fillRect(x*dpr,y*dpr,dpr,dpr)}return mc[k]=c.toDataURL()}
var dis=[];var t1=document.querySelector('.cta-top'),t2=document.querySelector('.rowend');if(t1)dis.push({el:t1.querySelector('.dis'),host:t1,a:.95,b:.7});if(t2)dis.push({el:t2.querySelector('.dis'),host:t2,a:.92,b:.7});
var wm=document.querySelector('.hero3 .wordmark'),trio=document.querySelector('.trio'),tls=[].slice.call(document.querySelectorAll('.tl')),tick=false;
function upd(){tick=false;var h=innerHeight;
fills.forEach(function(p){var r=p.getBoundingClientRect();var pr=(h*.85-r.top)/(h*.5+r.height*.4);pr=Math.max(0,Math.min(1,pr));var n=p._w.length;p._w.forEach(function(w,i){w.classList.toggle('on',pr>=(i+.4)/n)})});
pcs.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-80||r.top>h+80)return;var pr=(r.top+r.height/2-h/2)/(h/2+r.height/2);pr=Math.max(-1,Math.min(1,pr));e.style.translate='0 '+(-pr*16).toFixed(1)+'px'});
covers.forEach(function(cv){var cs=cv.closest('.case'),r=cs.getBoundingClientRect();if(r.bottom<-80||r.top>h+80)return;var cp=Math.max(0,Math.min(1,(h/2-r.top)/r.height));var k=(cp-.5)*2;var hh=cv.offsetHeight;cv.querySelectorAll('img').forEach(function(im){im.style.transform='translate3d(0,'+(k*hh*.05).toFixed(1)+'px,0)'});cv.style.translate='0 '+(k*-34).toFixed(1)+'px'});
dis.forEach(function(d){var r=d.host.getBoundingClientRect();var p=(h*d.a-r.top)/(h*d.b);p=Math.max(0,Math.min(1,p));var inv=d.el.hasAttribute('data-inv');d.el.classList.toggle('off',inv?p>=.995:p<.02);var H=Math.round(d.host.offsetHeight),L=Math.round(p*100),key=L+'_'+H;if(key!==d.k){d.k=key;var u=(inv?L<=0:L>=100)?'none':'url('+mk(L,H,inv)+')';d.el.style.webkitMaskImage=u;d.el.style.maskImage=u;d.el.style.webkitMaskSize=d.el.style.maskSize='8px '+H+'px'}});
if(wm){var y=Math.min(1,scrollY/(h*.9));wm.style.opacity=(1-y*.85).toFixed(3);wm.style.transform='translate3d(0,'+(y*8).toFixed(1)+'vh,0) scale('+(1-y*.06).toFixed(3)+')'}
if(trio){var r=trio.getBoundingClientRect(),inn=trio.querySelector('.trio-in'),top0=parseFloat(getComputedStyle(inn).top)||0;var pr=(top0-r.top)/Math.max(1,r.height-inn.offsetHeight);pr=Math.max(0,Math.min(1,pr));tls.forEach(function(l,i){l.classList.toggle('on',pr>=(i+.25)/tls.length*.95)})}
}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
})();

/* drag proof cards */
(function(){var z=30;document.querySelectorAll('.pc').forEach(function(c){var sx,sy,ox=0,oy=0,moved=false,id=null;
c.addEventListener('pointerdown',function(e){if(e.button>0)return;if(e.target.closest('[data-play]'))return;id=e.pointerId;sx=e.clientX;sy=e.clientY;ox=parseFloat(c.style.getPropertyValue('--dx'))||0;oy=parseFloat(c.style.getPropertyValue('--dy'))||0;moved=false;c.setPointerCapture(id)});
c.addEventListener('pointermove',function(e){if(e.pointerId!==id)return;var dx=e.clientX-sx,dy=e.clientY-sy;if(!moved&&Math.abs(dx)+Math.abs(dy)<5)return;if(!moved){moved=true;c.classList.add('drag');c.style.zIndex=++z}c.style.setProperty('--dx',(ox+dx)+'px');c.style.setProperty('--dy',(oy+dy)+'px')});
function end(e){if(e.pointerId!==id)return;id=null;c.classList.remove('drag');if(moved)c.style.zIndex=z;else if(e.type==='pointerup'&&e.pointerType!=='mouse'&&!e.target.closest('[data-play]'))c.classList.toggle('tapped')}
c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);
c.addEventListener('dragstart',function(e){e.preventDefault()})})})();

document.querySelectorAll('.pc video').forEach(function(v){var c=v.closest('.pc');v.addEventListener('play',function(){c.classList.add('playing')});v.addEventListener('pause',function(){c.classList.remove('playing')})});

if(matchMedia('(hover:none)').matches)document.querySelectorAll('.cover').forEach(function(c){c.addEventListener('click',function(){c.classList.toggle('tapped')})});
