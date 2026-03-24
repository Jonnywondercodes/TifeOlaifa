/* ---- Mobile menu ---- */
const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');
const navClose  = document.getElementById('navClose');

function openDrawer() {
  if (navDrawer) navDrawer.classList.add('open');
}
function closeDrawer() {
  if (navDrawer) navDrawer.classList.remove('open');
}

if (navToggle) navToggle.addEventListener('click', openDrawer);
if (navClose)  navClose.addEventListener('click', closeDrawer);
