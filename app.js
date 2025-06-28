function scrollToTop() {
    window.scrollTo({ top: 0, behaviour:'smooth'})
}
function togglemenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
