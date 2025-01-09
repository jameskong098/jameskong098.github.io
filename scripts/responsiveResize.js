function handleResize() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (window.innerWidth > maxWidth) {
    sidebar.style.left = '0';
    overlay.style.display = 'none';
    content.style.filter = 'none';
    hamburgerMenu.style.display = 'none'; // Hide hamburger menu on larger screens
  } else {
    sidebar.style.left = '-100%';
    overlay.style.display = 'none';
    content.style.filter = 'none';
    hamburgerMenu.style.display = 'block'; // Show hamburger menu on smaller screens
  }
}

window.addEventListener('resize', handleResize);