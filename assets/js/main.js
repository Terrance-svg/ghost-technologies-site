(()=>{const root=document.documentElement;let stored=null;try{stored=localStorage.getItem('ghost-theme')}catch(_){}if(stored==='light'||stored==='dark')root.dataset.theme=stored;else if(matchMedia('(prefers-color-scheme: light)').matches)root.dataset.theme='light';const syncTheme=()=>document.querySelectorAll('[data-theme-toggle]').forEach(b=>{const light=root.dataset.theme==='light';b.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');b.textContent=light?'☾':'☀'});syncTheme();document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('ghost-theme',root.dataset.theme)}catch(_){}syncTheme()}));const menu=document.querySelector('[data-mobile-menu]'),links=document.querySelector('[data-nav-links]');if(menu&&links){const close=()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'};menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));addEventListener('keydown',e=>{if(e.key==='Escape')close()});addEventListener('resize',()=>{if(innerWidth>1080)close()},{passive:true})}document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced){document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'));return}if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e))}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'))})();

(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  document.querySelectorAll('[data-vault-dust]').forEach(layer=>{
    if(layer.childElementCount) return;
    const count=innerWidth<620?18:32;
    for(let n=0;n<count;n++){
      const p=document.createElement('i');
      const side=Math.random()<.5;
      const x=side?(4+Math.random()*34):(62+Math.random()*34);
      const y=36+Math.random()*55;
      p.style.setProperty('--x',x.toFixed(2)+'%');
      p.style.setProperty('--y',y.toFixed(2)+'%');
      p.style.setProperty('--s',(1+Math.random()*2.3).toFixed(2)+'px');
      p.style.setProperty('--d',(6.5+Math.random()*8).toFixed(2)+'s');
      p.style.setProperty('--delay',(-Math.random()*12).toFixed(2)+'s');
      p.style.setProperty('--o',(0.18+Math.random()*.48).toFixed(2));
      p.style.setProperty('--tx',((side?1:-1)*(8+Math.random()*38)).toFixed(1)+'px');
      layer.appendChild(p);
    }
  });
})();
