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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
function handleScroll() {
    const scrollUpButton = document.getElementById('scroll-up-button');
    if (window.scrollY > 100) {
        scrollUpButton.classList.add('show');
        scrollUpButton.classList.remove('hide');
    } else {
        scrollUpButton.classList.add('hide');
        scrollUpButton.classList.remove('show');
    }
}

window.addEventListener('scroll', handleScroll);

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
  