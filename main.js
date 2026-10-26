/* Portafolio — comportamiento mínimo, sin dependencias */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Fotografía: si el archivo no carga, se ve el reemplazo con iniciales.
  document.querySelectorAll('.photo img').forEach(function (img) {
    function hide() { img.style.display = 'none'; }
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0) hide();
  });

  // Videos: si el archivo falta, se muestra un aviso en lugar de un reproductor roto.
  document.querySelectorAll('.video-box').forEach(function (box) {
    var v = box.querySelector('video');
    if (!v) return;
    function miss() { box.classList.add('is-missing'); }
    var src = v.querySelector('source');
    if (src) src.addEventListener('error', miss);
    v.addEventListener('error', miss);
  });

  // Aparición suave al hacer scroll.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
