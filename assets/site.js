const button = document.querySelector('.menu-button');
const mobile = document.querySelector('.mobile-nav');
if (button && mobile) {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    mobile.hidden = open;
  });
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobile.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }));
}
