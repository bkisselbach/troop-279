var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');
function closeNav(){
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', function(){
  var open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', closeNav);
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    closeNav();
    navToggle.focus();
  }
});

// Wreath sale banner and hero come down once orders close at the end of Nov 14
if (new Date() >= new Date(2026, 10, 15)) {
  document.querySelectorAll('[data-sale-only]').forEach(function(el){ el.classList.add('hidden'); });
}
