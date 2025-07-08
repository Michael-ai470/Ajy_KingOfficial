// script.js
const projects = [
    {
      title: "Personal Portfolio Website",
      date: "2022-03-10",
      category: "Portfolio",
      description: "My very first personal portfolio to showcase basic HTML, CSS, and JavaScript skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["images/Ajibola's Portfolio 1 img.png"], // You can replace this with your real image later
      liveDemo: "https://ajy-king-1st-project.vercel.app/", // Replace with your project link when ready
      github: "https://github.com/Michael-ai470/personal_portfolio_website", // Replace with your GitHub repo when ready
      caseStudy: {
        challenges: "Learning page structure, responsive layout, and smooth scrolling.",
        solutions: "Focused on building a clean, single-page layout with responsive sections and smooth navigation.",
        outcomes: "Developed the foundation of web design and personal branding. Successfully launched my first project."
      }
    } ,
    {
      title: "Interactive Landing Page",
      date: "2023-03-10",
      category: "Landing Page",
      description: "An interactive, responsive landing page featuring a smooth typewriter effect, clean animations, and a simple contact form to capture user inquiries.",
      technologies: ["JavaScript", "HTML", "CSS"],
      images: ["images/creative landing page.png"],
      liveDemo: "https://creative-landing-page-sage.vercel.app/",
      github: "https://github.com/Michael-ai470/Ajy-Landing-page",
      caseStudy: {
        challenges: "Building a Typewriter Effect from Scratch, Keeping the Design Lightweight Yet Engaging, Smooth Section Animations, Balancing Simplicity and Functionality.",
        solutions: "Applied CSS transitions and lightweight Intersection Observer animations to ensure the page stayed fast and responsive, Clean Layout Structure, Responsive and Interactive Design.",
        outcomes: "Successfully delivered a fast, clean, and interactive landing page;  The typewriter effect and scroll animations greatly improved the visual flow, The project displayed a significant step forward in JavaScript and front-end animation skills, This project laid the groundwork for more advanced user interface designs in later projects."
      }
    },
    {
      title: "Delicious Bites",
      date: "2023-09-20",
      category: "Landing Page",
      description: "A conversion-focused landing page for a SaaS MVP.",
      technologies: ["HTML", "Tailwind CSS", "Node.js"],
      images: ["images/Delicious Bites.png"],
      liveDemo: "https://delicious-bites-pink.vercel.app/",
      github: "https://github.com/Michael-ai470/Delicious-Bites",
      caseStudy: {
        challenges: "High bounce rates on initial design.",
        solutions: "Optimized load times and added clear CTAs.",
        outcomes: "Conversion rate increased by 40%."
      }
    },
    {
      title: "EliteFit Pro – Fitness Club Website",
      date: "2024-01-12",
      category: "Fitness Website",
      description: "A premium fitness club website with interactive sections, scroll animations, and a modern, professional 2024 design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["images/EliteFit Pro-Fitness Club.png"],
      liveDemo: "https://elite-fit-pro.vercel.app/",
      github: "https://github.com/Michael-ai470/EliteFit-Pro",
      caseStudy: {
        challenges: "Creating a Distinct Look for a 2024 Project, Integrating a Fitness-Appropriate Hero Image, Balancing Simplicity with Professional Detailing, Crafting a Premium Layout.",
        solutions: "Sophisticated Hero Section: Added a hero background with a transparent overlay and blur effect to maintain readability while adding visual depth. Unique Styling and Branding: Introduced a new color palette (bold purple, soft lavender, clean whites) with a modern header style to completely differentiate it from past projects",
        outcomes: "Received positive client feedback, Delivered a distinct, modern 2024-level fitness website, Improved layout structure and design maturity compared to previous projects,  Successfully created a highly reusable website structure for other professional projects."
      }
    },
    {
      title: "VisionX Creatives",
      date: "2024-07-05",
      category: "Branding",
      description: "VisionX Creative Agency is a modern, interactive website that showcases creative projects with smooth animations, responsive layouts, and an elegant user experience.",
      technologies: ["HTML", "CSS", "Figma", "JavaScript"],
      images: ["images/VisionX.png"],
      liveDemo: "https://visionx-creatives.vercel.app/",
      github: "https://github.com/Michael-ai470/VisionX-Creatives",
      caseStudy: {
        challenges: "Creating a cohesive brand identity.",
        solutions: "Developed consistent design system.",
        outcomes: "Enhanced brand recognition."
      }
    },
    {
      title: "Mide_Shotzx",
      date: "2025-07-07",
      category: "Portfolio + Landing Page",
      description: "A personal portfolio and landing page showcasing photography skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["images/img1 (2).png"],
      liveDemo: "https://mide-shotzx.vercel.app/",
      github: "https://github.com/Michael-ai470/Mide-Shotzx",
      caseStudy: {
        challenges: "User-Friendly Interface for Diverse Audiences, Balancing Performance and Visual Appeal, Mobile Responsiveness Across All Devices, Maintaining Brand Consistency",
        solutions: "Developed a clean, intuitive layout that simplified navigation for all users. Optimized images and scripts to ensure fast loading times without compromising visual quality. Implemented responsive design techniques to ensure seamless viewing on mobile, tablet, and desktop devices. Created a cohesive design system that maintained brand identity across all pages.",
        outcomes: "Increased app downloads by 20%."
      }
    }
  ];

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

function toggleLightMode() {
  document.body.classList.toggle('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  // Optional: smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Color-wave hover effect on section
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.classList.add('wave-hover');
    });

    section.addEventListener('mouseleave', () => {
      section.classList.remove('wave-hover');
    });
  });

  // About section true typewriter effect
  const typewriter = document.querySelector('.about-typewriter');
  if (typewriter) {
    const phrases = [
      "React • JavaScript • UI/UX",
      "Performance • Reach • SEO",
      "Bring your vision to life!"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex < currentPhrase.length) {
          setTimeout(type, 50); // typing speed
        } else {
          setTimeout(() => { isDeleting = true; type(); }, 1200); // pause before deleting
        }
      } else {
        typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex > 0) {
          setTimeout(type, 30); // deleting speed
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 600); // pause before next phrase
        }
      }
    }
    type();
  }
  
  // Animate skill bars on scroll into view
  const skillSection = document.querySelector('.skills-section');
  const bars = document.querySelectorAll('.bar-fill');
  let skillsAnimated = false;

  function animateSkills() {
    if (!skillsAnimated && skillSection && skillSection.getBoundingClientRect().top < window.innerHeight - 100) {
      bars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
      skillsAnimated = true;
    }
  }

  window.addEventListener('scroll', animateSkills);
  animateSkills(); // in case already in view on load

  // Scroll to contact form from CTA
  function scrollToContact(){
    const contact = document.querySelector('#contact');
    if(contact){
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }


  function renderTimeline(maxDate) {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    projects.forEach((project, index) => {
      const projectDate = new Date(project.date);
      if (projectDate <= maxDate) {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${project.category.toLowerCase().replace(' ', '-')}`;
        item.innerHTML = `
          <div class="timeline-content">
            <span class="date">${project.date}</span>
            <h3>${project.title}</h3>
            <p>${project.category}</p>
            <button onclick="openProjectModal(${index})">View Details</button>
          </div>
        `;
        timeline.appendChild(item);
      }
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });
    timelineItems.forEach(item => observer.observe(item));
  }



  renderTimeline(new Date('2025-12-31'));

  const yearSlider = document.getElementById('year-slider');
  const selectedYear = document.getElementById('selected-year');
  const resetButton = document.getElementById('reset-timeline');
  yearSlider.addEventListener('input', () => {
    const year = yearSlider.value;
    selectedYear.textContent = year;
    const maxDate = new Date(`${year}-12-31`);
    renderTimeline(maxDate);
  });
  resetButton.addEventListener('click', () => {
    yearSlider.value = 2025;
    selectedYear.textContent = '2025';
    renderTimeline(new Date('2025-12-31'));
  });

  // Improved Active Link Scroll Spy using Intersection Observer
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').replace('#', ''));
  const sectionsForNav = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  let lastActiveLink = null;

  const observerOptions = {
    threshold: 0.4 // Section is considered active when 60% in view
  };

  const sectionToNav = new Map();
  sectionsForNav.forEach((section, idx) => {
    sectionToNav.set(section, navLinks[idx]);
  });

  const observer = new IntersectionObserver((entries) => {
    let foundActive = false;
    entries.forEach(entry => {
      if (entry.isIntersecting && sectionToNav.has(entry.target)) {
        foundActive = true;
        // Remove active from all, add to current
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = sectionToNav.get(entry.target);
        activeLink.classList.add('active');
        lastActiveLink = activeLink;
      }
    });
    // If no section is intersecting, keep last active
    if (!foundActive && lastActiveLink) {
      navLinks.forEach(link => link.classList.remove('active'));
      lastActiveLink.classList.add('active');
    }
  }, observerOptions);

  sectionsForNav.forEach(section => observer.observe(section));


}); // <--- END of DOMContentLoaded block

// Place openProjectModal here, OUTSIDE the DOMContentLoaded block
function openProjectModal(index) {
  const project = projects[index];
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal(this)">×</span>
      <h2>${project.title}</h2>
      <div class="project-gallery">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
      </div>
      <p><strong>Category:</strong> ${project.category}</p>
      <p><strong>Description:</strong> ${project.description}</p>
      <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
      <div class="case-study">
        <h3>Case Study</h3>
        <p><strong>Challenges:</strong> ${project.caseStudy.challenges}</p>
        <p><strong>Solutions:</strong> ${project.caseStudy.solutions}</p>
        <p><strong>Outcomes:</strong> ${project.caseStudy.outcomes}</p>
      </div>
      <p>
        <a href="${project.liveDemo}" target="_blank" class="project-btn">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
        <a href="${project.github}" target="_blank" class="project-btn">
          <i class="fab fa-github"></i> GitHub
        </a>
      </p>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Helper to close modal and restore scroll
function closeModal(btn) {
  btn.parentElement.parentElement.remove();
  document.body.style.overflow = '';
}

// Optional: close modal on overlay click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.remove();
    document.body.style.overflow = '';
  }
});

// Sidebar form functionality
function openSidebarForm() {
  document.getElementById('sidebarForm').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebarForm() {
  document.getElementById('sidebarForm').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close sidebar when clicking the overlay
document.getElementById('sidebarOverlay').addEventListener('click', closeSidebarForm);

// Optional: Close sidebar when clicking outside the form (if not using overlay click)
document.addEventListener('mousedown', function(e) {
  const sidebar = document.getElementById('sidebarForm');
  const privacyModal = document.getElementById('privacyModal');

  if (sidebar.classList.contains('open')) {
    const clickedInsideSidebar = sidebar.querySelector('.sidebar-form-content').contains(e.target);
    const clickedInsidePrivacyModal = privacyModal && privacyModal.contains(e.target);
    const clickedStartBtn = e.target.classList.contains('start-project-btn');
    const clickedOverlay = e.target.classList.contains('sidebar-overlay');

    if (!clickedInsideSidebar && !clickedStartBtn && !clickedOverlay && !clickedInsidePrivacyModal) {
      closeSidebarForm();
    }
  }
});


// Testimonial Slider

let currentSlide = 0;
let sliderInterval;

function startSlider() {
  sliderInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

function nextSlide() {
  const slider = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-track blockquote');
  const indicators = document.querySelectorAll('.indicator');

  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function pauseSlider() {
  clearInterval(sliderInterval);
}

function resumeSlider() {
  startSlider();
}

function goToSlide(index) {
  pauseSlider(); // Optional: pause when manually clicked
  const slider = document.querySelector('.testimonial-track');
  const indicators = document.querySelectorAll('.indicator');
  
  currentSlide = index;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlide);
  });
}

document.addEventListener('DOMContentLoaded', startSlider);


// Scroll Entrance Animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// Privacy Policy Modal Controls
function openPrivacyModal() {
  document.getElementById('privacyModal').classList.add('active');
  document.getElementById('privacyOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePrivacyModal() {
  document.getElementById('privacyModal').classList.remove('active');
  document.getElementById('privacyOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('privacyOverlay').addEventListener('click', closePrivacyModal);


// Optional: Close modal if user clicks outside the content
document.addEventListener('mousedown', function (e) {
  const modal = document.getElementById('privacyModal');
  if (modal.classList.contains('active') && !modal.querySelector('.privacy-modal-content').contains(e.target)) {
    closePrivacyModal();
  }
});


// Back to Top Button Functionality
window.addEventListener('scroll', () => {
  const backToTopBtn = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
