const maxWidth = 1180

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
  
function handleMenuClick(event) {
    if (window.innerWidth <= maxWidth) {
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

function formSubmissionHandler() {
  if (submitted) {
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('gform');
    successMessage.classList.add('show');
    form.reset();
    submitted = false;

    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000); // 1s fade in + 4s display + 1s fade out = 6s total
  }
}
  
window.addEventListener('resize', handleResize);

window.addEventListener('load', () => {
  handleResize();
  if (window.innerWidth > maxWidth) {
    highlightCurrentSection();
  }

  ScrollReveal().reveal('.about-me, .experience-item, .project-item, .education-item, .contact-info, form, section h2', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });
});

window.addEventListener('scroll', () => {
  if (window.innerWidth > maxWidth) {
    highlightCurrentSection();
  }
});
