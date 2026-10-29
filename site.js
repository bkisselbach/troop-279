var navToggle = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', function(){
  var open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', function(){
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
