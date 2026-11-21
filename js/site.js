(function(){
var spy=[].slice.call(document.querySelectorAll('.idx a'));if(spy.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){spy.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+en.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});document.querySelectorAll('section.case').forEach(function(s){io.observe(s)});}
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,de=document.documentElement;
document.querySelectorAll('[data-play]').forEach(function(b){var v=b.previousElementSibling;b.addEventListener('click',function(){if(v.paused){document.querySelectorAll('[data-vid]').forEach(function(o){o.pause()});v.play();b.textContent='Pause'}else{v.pause();b.textContent='Play'}});v.addEventListener('pause',function(){b.textContent='Play'})});
if(!rm){
 var els=[].slice.call(document.querySelectorAll('[data-speed]')).filter(function(e){return parseFloat(e.dataset.speed)!==0}),tick=false;
 function par(){tick=false;var h=innerHeight;els.forEach(function(e){var fx=e.closest('.fx');
  if(fx){var r=fx.getBoundingClientRect();if(r.bottom<-50||r.top>h+50)return;var pr=(r.top+r.height/2-h/2)/(h/2+r.height/2);pr=Math.max(-1,Math.min(1,pr));var slack=(e.offsetHeight-fx.offsetHeight)/2;e.style.transform='translate3d(0,'+(-pr*slack*.9).toFixed(1)+'px,0)';return}
  var r=e.parentElement.getBoundingClientRect();if(r.bottom<-200||r.top>h+200)return;var y=(r.top+r.height/2-h/2)*parseFloat(e.dataset.speed)*-1;e.style.transform='translate3d(0,'+y.toFixed(1)+'px,0)'})}
 addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(par)}},{passive:true});addEventListener('resize',par);par();
 document.addEventListener('click',function(ev){
  var a=ev.target.closest&&ev.target.closest('a[href]');if(!a||ev.defaultPrevented||ev.metaKey||ev.ctrlKey||ev.shiftKey||ev.altKey||ev.button!==0)return;
  if(a.target==='_blank'||a.hasAttribute('download'))return;
  var u=new URL(a.href,location.href);if(u.origin!==location.origin||u.protocol.indexOf('http')!==0&&u.protocol!=='file:')return;
  if(u.pathname===location.pathname&&u.hash)return;
  ev.preventDefault();de.classList.add('wipe-out');
  setTimeout(function(){try{sessionStorage.setItem('wipe','1')}catch(e){}location.href=a.href},520)});
 addEventListener('pageshow',function(e){if(e.persisted){de.classList.remove('wipe-out','wipe-in')}});
}
})();
