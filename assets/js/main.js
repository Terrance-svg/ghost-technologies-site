
(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('ghost-theme');
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;
  else if (window.matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme = 'light';

  const updateThemeButton = () => {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const light = root.dataset.theme === 'light';
      btn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      btn.innerHTML = light ? '☾' : '☀';
    });
  };
  updateThemeButton();
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ghost-theme', root.dataset.theme);
    updateThemeButton();
  }));

  const menu = document.querySelector('[data-mobile-menu]');
  const links = document.querySelector('[data-nav-links]');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.innerHTML = open ? '×' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.innerHTML='☰';
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }), {threshold:.12}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  const canvas = document.querySelector('.network-bg');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const ctx = canvas.getContext('2d');
  let w,h,dpr,points=[];
  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;
    canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
    const count=Math.min(80,Math.max(24,Math.floor(w*h/25000)));
    points=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18}));
  }
  function draw(){
    ctx.clearRect(0,0,w,h); const light=root.dataset.theme==='light';
    points.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1});
    for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){
      const a=points[i],b=points[j],dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy);
      if(dist<145){ctx.strokeStyle=light?`rgba(8,120,135,${(1-dist/145)*.08})`:`rgba(114,245,251,${(1-dist/145)*.09})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
    }
    points.forEach(p=>{ctx.fillStyle=light?'rgba(8,120,135,.16)':'rgba(114,245,251,.22)';ctx.beginPath();ctx.arc(p.x,p.y,1.2,0,Math.PI*2);ctx.fill()});
    requestAnimationFrame(draw);
  }
  addEventListener('resize',resize,{passive:true});resize();draw();
})();
