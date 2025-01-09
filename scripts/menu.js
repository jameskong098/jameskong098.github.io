function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-100%';
    overlay.style.display = 'none';
    content.style.filter = 'none';
    hamburgerMenu.style.display = 'block'; // Show hamburger menu
  } else {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
    content.style.filter = 'blur(2px)';
    hamburgerMenu.style.display = 'none'; // Hide hamburger menu
  }
}

function handleMenuClick(event) {
  if (window.innerWidth <= maxWidth) {
    toggleMenu();
  }
}
  