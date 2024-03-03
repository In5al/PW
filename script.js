function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  function hideWelcomeSection() {
    document.getElementById('welcome-section').classList.add('hidden');
  }
  