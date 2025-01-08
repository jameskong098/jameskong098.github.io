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
  
function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const content = document.querySelector('.content');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (window.innerWidth > 768) {
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
  
function handleMenuClick(event) {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
    document.querySelectorAll('.sidebar ul li a').forEach(item => {
      item.classList.remove('selected');
    });
    event.target.classList.add('selected');
}
  
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    let currentSection = '';
  
    if (window.scrollY === 0) {
      currentSection = 'about-me';
    } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      currentSection = sections[sections.length - 1].id;
    } else {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
    }
  
    sidebarLinks.forEach(link => {
      link.classList.remove('selected');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('selected');
      }
    });
}
  
window.addEventListener('resize', handleResize);
window.addEventListener('load', () => {
handleResize();
highlightCurrentSection();
});
window.addEventListener('scroll', () => {
if (window.innerWidth > 768) {
    highlightCurrentSection();
}
});
