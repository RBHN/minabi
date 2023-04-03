  const aboutButton = document.querySelector('.about-button');
  const actionsButton = document.querySelector('.actions-button');
  const partnersButton = document.querySelector('.partenaires-button');
  const aboutSection = document.querySelector('.about-section');
  const actionSection = document.querySelector('.actions-section');
  const partnersSection = document.querySelector('.partenaires-section');
  const sectionMenu = document.querySelector('.section_menu');
  const aboutCloses = document.getElementById('about-closes');
  const aboutOpens = document.getElementById('about-opens');
  const actionsCloses = document.getElementById('actions-closes');
  const actionsOpens = document.getElementById('actions-opens');
  const partnersOpens = document.getElementById('partners-opens');
  const partnersCloses = document.getElementById('partners-closes');
  const body = document.querySelector('.body');

  gsap.set(aboutSection, { opacity: 0 });
  gsap.set(actionSection, { opacity: 0 });
  gsap.set(partnersSection, { opacity: 0 });

// Disable background scrolling when menu is opened
sectionMenu.addEventListener('animationend', () => {
  if (!sectionMenu.classList.contains('is-hidden')) {
    body.classList.add('overflow-hidden');
  } else {
    body.classList.remove('overflow-hidden');
  }
});


// About section
 aboutButton.addEventListener('click', function() {
  
  if (aboutSection.classList.contains('is-hidden') && sectionMenu.classList.contains('is-hidden')) {
    // Reveal the section
    aboutSection.classList.remove('is-hidden');
    gsap.to(aboutSection, { opacity: 1, delay: 0.5 });
    sectionMenu.classList.remove('is-hidden');
    aboutOpens.click();
  
  } else if (aboutSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !actionSection.classList.contains('is-hidden')) {
    // Hide the Actions-section if it is already revealed, reveals aboutSection
    gsap.to(actionSection, { opacity: 0, delay: 0.25, onComplete: function() {
        actionSection.classList.add('is-hidden');
    }});
    aboutSection.classList.remove('is-hidden');
    gsap.to(aboutSection, { opacity: 1, delay: 0.5 });
  
  } else if (aboutSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !partnersSection.classList.contains('is-hidden')) {
    // Hide the Partners-section if it is already revealed, reveals aboutSection
      gsap.to(partnersSection, { opacity: 0, delay: 0.25, onComplete: function() {
        partnersSection.classList.add('is-hidden');
    }});
    aboutSection.classList.remove('is-hidden');
    gsap.to(aboutSection, { opacity: 1, delay: 0.5 });
  
  } else {
    // Hide both the section and sectionMenu if they are both visible
    aboutSection.classList.add('is-hidden');
    gsap.to(aboutSection, { opacity: 0, delay: 0.2 });
    sectionMenu.classList.add('is-hidden');
    aboutCloses.click();
  }
});

// Partners section
partnersButton.addEventListener('click', function() {
  
  if (partnersSection.classList.contains('is-hidden') && sectionMenu.classList.contains('is-hidden')) {
    // Reveal the partnersSection
    partnersSection.classList.remove('is-hidden');
    gsap.to(partnersSection, { opacity: 1, delay: 0.5 });
    sectionMenu.classList.remove('is-hidden');
    partnersOpens.click();
  
  } else if (partnersSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !actionSection.classList.contains('is-hidden')) {
    // Hide the actionSection if it is already revealed, reveals partnersSection
    gsap.to(actionSection, { opacity: 0, delay: 0.25, onComplete: function() {
        actionSection.classList.add('is-hidden');
    }});
    partnersSection.classList.remove('is-hidden');
    gsap.to(partnersSection, { opacity: 1, delay: 0.5 });
  
  } else if (partnersSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !aboutSection.classList.contains('is-hidden')) {
    // Hide the aboutSection if it is already revealed, reveals partnersSection
      gsap.to(aboutSection, { opacity: 0, delay: 0.25, onComplete: function() {
        aboutSection.classList.add('is-hidden');
    }});
    partnersSection.classList.remove('is-hidden');
    gsap.to(partnersSection, { opacity: 1, delay: 0.5 });
  
  } else {
    // Hide both the section and sectionMenu if they are both visible
    partnersSection.classList.add('is-hidden');
    gsap.to(partnersSection, { opacity: 0, delay: 0.2 });
    sectionMenu.classList.add('is-hidden');
    partnersCloses.click();
  }
});

// Actions section
   actionsButton.addEventListener('click', function() {
  
  if (actionSection.classList.contains('is-hidden') && sectionMenu.classList.contains('is-hidden')) {
    // Reveal the actionSection
    actionSection.classList.remove('is-hidden');
    gsap.to(actionSection, { opacity: 1, delay: 0.5 });
    sectionMenu.classList.remove('is-hidden');
    actionsOpens.click();
  
  } else if (actionSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !partnersSection.classList.contains('is-hidden')) {
    // Hide the partnersSection if it is already revealed, reveals actionSection
    gsap.to(partnersSection, { opacity: 0, delay: 0.25, onComplete: function() {
        partnersSection.classList.add('is-hidden');
    }});
    actionSection.classList.remove('is-hidden');
    gsap.to(actionSection, { opacity: 1, delay: 0.5 });
  
  } else if (actionSection.classList.contains('is-hidden') && !sectionMenu.classList.contains('is-hidden') && !aboutSection.classList.contains('is-hidden')) {
    // Hide the aboutSection if it is already revealed, reveals actionSection
      gsap.to(aboutSection, { opacity: 0, delay: 0.25, onComplete: function() {
        aboutSection.classList.add('is-hidden');
    }});
    actionSection.classList.remove('is-hidden');
    gsap.to(actionSection, { opacity: 1, delay: 0.5 });
  
  } else {
    // Hide both the section and sectionMenu if they are both visible
    actionSection.classList.add('is-hidden');
    gsap.to(actionSection, { opacity: 0, delay: 0.2 });
    sectionMenu.classList.add('is-hidden');
    actionsCloses.click();
  }
});
