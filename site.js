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

// Square manages availability for the limited wreath sale.
