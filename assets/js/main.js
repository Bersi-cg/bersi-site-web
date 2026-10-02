/* Bersi, scripts communs à toutes les pages */
(function () {
  var root = document.documentElement;

  /* Mode sombre / clair (le choix est mémorisé dans le navigateur) */
  var tbtn = document.getElementById('theme');
  function systemDark() { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }
  function current() { return root.getAttribute('data-theme') || (systemDark() ? 'dark' : 'light'); }
  function setLabel() {
    var d = current() === 'dark';
    tbtn.setAttribute('aria-label', d ? 'Passer en mode clair' : 'Passer en mode sombre');
    tbtn.title = d ? 'Mode clair' : 'Mode sombre';
  }
  if (tbtn) {
    setLabel();
    tbtn.addEventListener('click', function () {
      var n = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', n);
      try { localStorage.setItem('bersi-theme', n); } catch (e) {}
      setLabel();
    });
  }

  /* Menu mobile */
  var mb = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (mb && nav) {
    mb.addEventListener('click', function () {
      var o = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', o);
      mb.setAttribute('aria-label', o ? 'Fermer le menu' : 'Ouvrir le menu');
    });
  }

  /* Animation du plan réseau (page d'accueil) */
  document.querySelectorAll('.plan .link:not(.dash)').forEach(function (p) {
    try { p.style.setProperty('--len', Math.ceil(p.getTotalLength() + 2)); } catch (e) {}
  });

  /* Formulaire de contact : préremplissage et ouverture de la messagerie */
  var f = document.getElementById('f');
  if (f) {
    var sel = document.getElementById('svc'), err = document.getElementById('err');
    var m = location.search.match(/service=([\w-]+)/);
    if (m && sel.querySelector('option[value="' + m[1] + '"]')) sel.value = m[1];
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = f.nom.value.trim(), msg = f.msg.value.trim();
      if (!nom || !msg) {
        err.textContent = 'Indiquez votre nom et décrivez votre besoin pour préparer l\u2019e-mail.';
        (nom ? f.msg : f.nom).focus();
        return;
      }
      err.textContent = '';
      var svc = sel.options[sel.selectedIndex].text;
      var body = 'Bonjour,\n\n' + msg + '\n\n' + nom +
        (f.ent.value.trim() ? '\n' + f.ent.value.trim() : '') +
        (f.tel.value.trim() ? '\nTél. : ' + f.tel.value.trim() : '');
      window.location.href = 'mailto:bersi-cg@outlook.fr?subject=' + encodeURIComponent('Demande : ' + svc) + '&body=' + encodeURIComponent(body);
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
