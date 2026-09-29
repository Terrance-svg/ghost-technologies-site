(() => {
  const button = document.querySelector('[data-load-youtube]');
  const container = document.querySelector('[data-youtube-player]');
  if (!button || !container) return;
  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/ndMGVvAXGO4?playsinline=1';
    iframe.title = 'Ghost Inventory featured YouTube Short';
    iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    container.replaceChildren(iframe);
    iframe.focus();
  }, { once: true });
})();
