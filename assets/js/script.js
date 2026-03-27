// --- HERO SLIDER LOGIC ---
const heroSlides = document.querySelectorAll('.hero .slide');
const heroDots = document.querySelectorAll('.hero .dot');
const heroNextBtn = document.querySelector('.hero .next-btn');
const heroPrevBtn = document.querySelector('.hero .prev-btn');
let heroCurrentIndex = 0;

function showHeroSlide(index) {
    heroSlides.forEach(s => s.classList.remove('active'));
    heroDots.forEach(d => d.classList.remove('active'));
    heroSlides[index].classList.add('active');
    heroDots[index].classList.add('active');
}

heroNextBtn.onclick = () => { 
    heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length; 
    showHeroSlide(heroCurrentIndex); 
};

heroPrevBtn.onclick = () => { 
    heroCurrentIndex = (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length; 
    showHeroSlide(heroCurrentIndex); 
};

// Auto slide every 5 seconds
let heroSliderInterval = setInterval(() => { 
    heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length; 
    showHeroSlide(heroCurrentIndex); 
}, 5000);

// Pause auto-slide when hovering over slider
const heroSlider = document.querySelector('.hero .slider');
heroSlider.addEventListener('mouseenter', () => {
    clearInterval(heroSliderInterval);
});

heroSlider.addEventListener('mouseleave', () => {
    heroSliderInterval = setInterval(() => { 
        heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length; 
        showHeroSlide(heroCurrentIndex); 
    }, 5000);
});

// Dot click navigation
heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        heroCurrentIndex = index;
        showHeroSlide(heroCurrentIndex);
        // Reset auto-slide timer
        clearInterval(heroSliderInterval);
        heroSliderInterval = setInterval(() => { 
            heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length; 
            showHeroSlide(heroCurrentIndex); 
        }, 5000);
    });
});

// --- CAREER MODAL DATA & LOGIC ---
const careerData = {
    "Software Developer": {
        icon: "fa-code",
        desc: "Master the art of creating robust applications and software systems.",
        courses: ["Data Structures", "Web Development", "Software Engineering"],
        careers: ["Full Stack Developer", "Mobile App Dev", "Systems Architect"],
        tools: ["VS Code", "GitHub", "React", "Node.js"],
        skills: ["Coding", "Logic", "Problem Solving"]
    },
    "Computer Network Security": {
        icon: "fa-shield-alt",
        desc: "Protect critical infrastructure and defend against global cyber threats.",
        courses: ["Ethical Hacking", "Cryptography", "Network Security"],
        careers: ["Security Analyst", "Penetration Tester", "Cyber Architect"],
        tools: ["Wireshark", "Kali Linux", "Nmap", "Metasploit"],
        skills: ["Cyber Defense", "Networking", "Risk Assessment"]
    },
    "Data Analytics": {
        icon: "fa-chart-bar",
        desc: "Turn raw data into business intelligence and actionable insights.",
        courses: ["Statistics", "Data Mining", "Predictive Analytics"],
        careers: ["Data Scientist", "Business Analyst", "Database Admin"],
        tools: ["Python", "SQL", "Tableau", "PowerBI"],
        skills: ["Mathematics", "Visualization", "Data Cleanup"]
    }
};

const careerModal = document.getElementById("careerModal");
const closeCareerBtn = careerModal.querySelector(".close-btn");

// Open career modal when career cards are clicked
document.querySelectorAll(".career-card").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText.trim();
        const data = careerData[title];

        if (!data) return;

        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDesc").innerText = data.desc;
        document.getElementById("modalIcon").innerHTML = `<i class="fas ${data.icon}"></i>`;
        
        document.getElementById("coreCourses").innerHTML = data.courses.map(i => `<li>${i}</li>`).join("");
        document.getElementById("careerOps").innerHTML = data.careers.map(i => `<li>${i}</li>`).join("");
        document.getElementById("toolsTags").innerHTML = data.tools.map(i => `<span>${i}</span>`).join("");
        document.getElementById("skillsTags").innerHTML = data.skills.map(i => `<span>${i}</span>`).join("");

        careerModal.style.display = "block";
    });
});

// Close career modal
closeCareerBtn.onclick = () => careerModal.style.display = "none";
window.addEventListener("click", (e) => {
    if (e.target == careerModal) careerModal.style.display = "none";
});

// ===== TECH MODAL - SMOOTH SLIDE TRACK VERSION =====
const techModal = document.getElementById('techPathModal');
const viewPathBtn = document.getElementById('viewPathBtn');
const techCloseBtn = techModal.querySelector('.close-btn');
const techSlideTrack = techModal.querySelector('.tech-slide-track');
const techSlides = techModal.querySelectorAll('.tech-slide');
const carouselDots = techModal.querySelectorAll('.carousel-dot');
const techCarousel = techModal.querySelector('.tech-carousel');
const prevArrow = techModal.querySelector('.prev-arrow');
const nextArrow = techModal.querySelector('.next-arrow');

let techCurrentSlide = 0;
let techStartX = 0;
let techCurrentX = 0;
let techIsDragging = false;
let techDragOffset = 0;

// ===== OPEN/CLOSE TECH MODAL =====
viewPathBtn.addEventListener('click', function(e) {
    e.preventDefault();
    techModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    goToSlide(0, false);
    updateArrows();
});

techCloseBtn.onclick = function() {
    techModal.style.display = 'none';
    document.body.style.overflow = '';
};

window.addEventListener('click', function(e) {
    if (e.target == techModal) {
        techModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// ===== CORE SLIDE FUNCTION =====
function goToSlide(index, animate) {
    if (animate === undefined) animate = true;
    
    if (index < 0) index = 0;
    if (index >= techSlides.length) index = techSlides.length - 1;
    
    techCurrentSlide = index;
    
    if (!animate) {
        techSlideTrack.classList.add('no-transition');
    } else {
        techSlideTrack.classList.remove('no-transition');
    }
    
    techSlideTrack.style.transform = `translateX(-${techCurrentSlide * 100}%)`;
    
    // Force reflow when removing transition
    if (!animate) {
        techSlideTrack.offsetHeight;
        setTimeout(() => techSlideTrack.classList.remove('no-transition'), 20);
    }
    
    // Update dots
    carouselDots.forEach(dot => dot.classList.remove('active'));
    carouselDots[index].classList.add('active');
    
    updateArrows();
}

function updateArrows() {
    if (prevArrow) {
        prevArrow.classList.toggle('disabled', techCurrentSlide === 0);
    }
    if (nextArrow) {
        nextArrow.classList.toggle('disabled', techCurrentSlide === techSlides.length - 1);
    }
}

// ===== ARROW NAVIGATION =====
if (prevArrow) {
    prevArrow.addEventListener('click', function() {
        if (techCurrentSlide > 0) goToSlide(techCurrentSlide - 1);
    });
}

if (nextArrow) {
    nextArrow.addEventListener('click', function() {
        if (techCurrentSlide < techSlides.length - 1) goToSlide(techCurrentSlide + 1);
    });
}

// ===== DOT NAVIGATION =====
carouselDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        goToSlide(index);
    });
});

// ===== TOUCH SWIPE =====
techCarousel.addEventListener('touchstart', function(e) {
    techStartX = e.touches[0].clientX;
    techCurrentX = techStartX;
    techIsDragging = true;
    techSlideTrack.classList.add('no-transition');
    techCarousel.classList.add('dragging');
}, { passive: true });

techCarousel.addEventListener('touchmove', function(e) {
    if (!techIsDragging) return;
    techCurrentX = e.touches[0].clientX;
    techDragOffset = techCurrentX - techStartX;
    const carouselWidth = techCarousel.offsetWidth;
    const baseOffset = -techCurrentSlide * carouselWidth;
    techSlideTrack.style.transform = `translateX(${baseOffset + techDragOffset}px)`;
}, { passive: true });

techCarousel.addEventListener('touchend', function() {
    finishDrag();
});

// ===== MOUSE DRAG =====
techCarousel.addEventListener('mousedown', function(e) {
    techStartX = e.clientX;
    techCurrentX = techStartX;
    techIsDragging = true;
    techSlideTrack.classList.add('no-transition');
    techCarousel.classList.add('dragging');
    e.preventDefault();
});

techCarousel.addEventListener('mousemove', function(e) {
    if (!techIsDragging) return;
    techCurrentX = e.clientX;
    techDragOffset = techCurrentX - techStartX;
    const carouselWidth = techCarousel.offsetWidth;
    const baseOffset = -techCurrentSlide * carouselWidth;
    techSlideTrack.style.transform = `translateX(${baseOffset + techDragOffset}px)`;
});

techCarousel.addEventListener('mouseup', finishDrag);
techCarousel.addEventListener('mouseleave', function() {
    if (techIsDragging) finishDrag();
});

function finishDrag() {
    if (!techIsDragging) return;
    techIsDragging = false;
    techCarousel.classList.remove('dragging');
    techSlideTrack.classList.remove('no-transition');
    
    const threshold = techCarousel.offsetWidth * 0.15;
    const diff = techCurrentX - techStartX;
    
    if (Math.abs(diff) > threshold) {
        if (diff < 0 && techCurrentSlide < techSlides.length - 1) {
            goToSlide(techCurrentSlide + 1);
        } else if (diff > 0 && techCurrentSlide > 0) {
            goToSlide(techCurrentSlide - 1);
        } else {
            goToSlide(techCurrentSlide);
        }
    } else {
        goToSlide(techCurrentSlide);
    }
    
    techDragOffset = 0;
    techStartX = 0;
    techCurrentX = 0;
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    if (techModal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            if (techCurrentSlide > 0) goToSlide(techCurrentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            if (techCurrentSlide < techSlides.length - 1) goToSlide(techCurrentSlide + 1);
        } else if (e.key === 'Escape') {
            techModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});

// ===== INITIALIZE =====
goToSlide(0, false);

// ===== STUDENT OUTPUTS CAROUSEL =====
const outputsTrack = document.querySelector('.outputs-track');
const outputCards = document.querySelectorAll('.output-card');
const prevOutputsBtn = document.querySelector('.prev-outputs-btn');
const nextOutputsBtn = document.querySelector('.next-outputs-btn');
const outputsDots = document.querySelectorAll('.outputs-dot');

let currentOutputPage = 0;
let cardsPerPage = 3;

// Update cards per page based on window width
function updateCardsPerPage() {
    if (window.innerWidth <= 480) {
        cardsPerPage = 1;
    } else if (window.innerWidth <= 768) {
        cardsPerPage = 2;
    } else {
        cardsPerPage = 3;
    }
}

// Calculate total pages
function getTotalPages() {
    return Math.ceil(outputCards.length / cardsPerPage);
}

// Update outputs carousel
function updateOutputsCarousel(animate = true) {
    updateCardsPerPage();
    const totalPages = getTotalPages();
    
    // Clamp current page
    if (currentOutputPage >= totalPages) {
        currentOutputPage = totalPages - 1;
    }
    if (currentOutputPage < 0) {
        currentOutputPage = 0;
    }
    
    // Calculate card width and gap
    const cardWidth = outputCards[0].offsetWidth;
    const gap = 24;
    const offset = currentOutputPage * (cardWidth + gap) * cardsPerPage;
    
    if (animate) {
        outputsTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
        outputsTrack.style.transition = 'none';
    }
    
    outputsTrack.style.transform = `translateX(-${offset}px)`;
    
    // Update buttons
    updateOutputsButtons();
    
    // Update dots
    updateOutputsDots();
}

function updateOutputsButtons() {
    const totalPages = getTotalPages();
    
    if (prevOutputsBtn) {
        prevOutputsBtn.disabled = currentOutputPage === 0;
    }
    
    if (nextOutputsBtn) {
        nextOutputsBtn.disabled = currentOutputPage >= totalPages - 1;
    }
}

function updateOutputsDots() {
    const totalPages = getTotalPages();
    
    outputsDots.forEach((dot, index) => {
        if (index < totalPages) {
            dot.style.display = 'block';
            dot.classList.toggle('active', index === currentOutputPage);
        } else {
            dot.style.display = 'none';
        }
    });
}

// Navigation buttons
if (prevOutputsBtn) {
    prevOutputsBtn.addEventListener('click', () => {
        if (currentOutputPage > 0) {
            currentOutputPage--;
            updateOutputsCarousel();
        }
    });
}

if (nextOutputsBtn) {
    nextOutputsBtn.addEventListener('click', () => {
        const totalPages = getTotalPages();
        if (currentOutputPage < totalPages - 1) {
            currentOutputPage++;
            updateOutputsCarousel();
        }
    });
}

// Dots navigation
outputsDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const page = parseInt(dot.getAttribute('data-page'));
        const totalPages = getTotalPages();
        if (page < totalPages) {
            currentOutputPage = page;
            updateOutputsCarousel();
        }
    });
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateOutputsCarousel(false);
    }, 200);
});

// Initialize outputs carousel
updateOutputsCarousel(false);

// ===== STUDENT OUTPUT DETAILS MODAL =====
const outputDetailsModal = document.getElementById('outputDetailsModal');
const closeOutputModalBtn = document.getElementById('closeOutputModal');

// Project data with all details
const outputProjectsData = {
    "HealthWatch": {
        type: "Website Application",
        icon: "fa-globe",
        logo: "assets/images/projects/logos/HWLogo.png",
        team: "IGNITE (BSIT1-A2)",
        overview: "An AI-powered community health surveillance system designed to monitor and track health trends in local communities. The platform uses machine learning algorithms to predict potential health outbreaks and provides real-time data visualization for health officials.",
        duration: "4 months",
        teamSize: "5 students",
        techCount: "6",
        technologies: ["HTML5", "CSS3", "JavaScript", "Python", "TensorFlow", "MySQL"],
        features: [
            "Real-time health data collection and analysis",
            "AI-powered outbreak prediction algorithms",
            "Interactive dashboard with data visualization",
            "Mobile-responsive design for field workers",
            "Automated alert system for health officials",
            "Community health reporting interface"
        ],
        screenshots: [
            "assets/images/projects/screenshots/healthwatch_screenshot1.jpg",

            "assets/images/projects/screenshots/healthwatch_screenshot2.jpg",
            "assets/images/projects/screenshots/healthwatch_screenshot3.jpg",
            "assets/images/projects/screenshots/healthwatch_screenshot4.jpg"

        ],
        outcome: "Deployed in 3 barangays in Cebu City, monitoring health data for 10,000+ residents",
        hasGithub: true,
        githubUrl: "https://github.com/example/healthwatch",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "eBayan": {
        type: "Website Application",
        icon: "fa-globe",
        logo: "assets/images/projects/logos/eBayanLogo.jpg",
        team: "IV of Spades (BSIT1-A1)",
        overview: "A comprehensive digital unified government platform that streamlines citizen services and promotes public engagement. eBayan provides a centralized portal for government transactions, document requests, and community announcements.",
        duration: "5 months",
        teamSize: "6 students",
        techCount: "7",
        technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Bootstrap", "Socket.io"],
        features: [
            "Unified citizen portal for government services",
            "Online document request and tracking system",
            "Real-time notifications for service updates",
            "Community forum and announcement board",
            "Secure authentication and data encryption",
            "Admin dashboard for government officials",
            "Mobile app integration"
        ],
        screenshots: [
            "assets/images/projects/screenshots/eBayan_screenshot1.jpg",
            // "assets/images/projects/ebayan/screenshot2.jpg",
            // "assets/images/projects/ebayan/screenshot3.jpg"
        ],
        outcome: "Pilot program launched in partnership with Cebu City Hall, serving 500+ daily users",
        hasGithub: true,
        githubUrl: "https://github.com/example/ebayan",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "ValiCheck": {
        type: "Web Application",
        icon: "fa-car",
        logo: "assets/images/projects/logos/VaLiCheckLogo.png",
        team: "Unli Rice (BSIT3-C1)",
        overview: "A modern digital motor vehicle verification system that enables quick and secure validation of vehicle registration and documentation. ValiCheck integrates with LTO databases to provide instant verification results.",
        duration: "3 months",
        teamSize: "4 students",
        techCount: "5",
        technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Tailwind CSS"],
        features: [
            "Instant vehicle registration verification",
            "QR code scanning for quick validation",
            "Integration with LTO database systems",
            "Vehicle history and ownership records",
            "Violation tracking and alerts",
            "Mobile-responsive interface for field use"
        ],
        screenshots: [
            // "assets/images/projects/valicheck/screenshot1.jpg",
            // "assets/images/projects/valicheck/screenshot2.jpg",
            // "assets/images/projects/valicheck/screenshot3.jpg"
        ],
        outcome: "Adopted by 2 LTO satellite offices for registration verification",
        hasGithub: true,
        githubUrl: "https://github.com/example/valicheck",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "Network Security Dashboard": {
        type: "Cybersecurity",
        icon: "fa-shield-alt",
        logo: "assets/images/projects/network-security/logo.png",
        team: "Security Team Beta",
        overview: "A comprehensive real-time network monitoring and intrusion detection system that helps organizations identify and prevent security threats. Features advanced analytics and automated response mechanisms.",
        duration: "6 months",
        teamSize: "4 students",
        techCount: "8",
        technologies: ["Python", "Django", "Elasticsearch", "Kibana", "Wireshark", "Snort", "Docker", "Redis"],
        features: [
            "Real-time network traffic monitoring",
            "Automated intrusion detection and prevention",
            "Security threat analytics and reporting",
            "Customizable alert system",
            "Network topology visualization",
            "Integration with SIEM tools"
        ],
        screenshots: [
            // "assets/images/projects/security-dashboard/screenshot1.jpg",
            // "assets/images/projects/security-dashboard/screenshot2.jpg",
            // "assets/images/projects/security-dashboard/screenshot3.jpg"
        ],
        outcome: "Implemented in university's IT infrastructure, monitoring 200+ devices",
        hasGithub: false,
        githubUrl: "",
        githubDesc: ""
    },
    "Sales Forecasting Tool": {
        type: "Data Analytics",
        icon: "fa-chart-line",
        logo: "assets/images/projects/sales-forecasting/logo.png",
        team: "Data Science Group",
        overview: "A Python-based analytics platform that uses machine learning algorithms to predict sales trends and provide actionable business insights. The tool helps businesses make data-driven decisions for inventory and marketing strategies.",
        duration: "4 months",
        teamSize: "3 students",
        techCount: "6",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Flask", "PostgreSQL"],
        features: [
            "Historical sales data analysis",
            "Machine learning-based forecasting models",
            "Interactive data visualizations",
            "Product demand prediction",
            "Seasonal trend analysis",
            "Automated reporting system"
        ],
        screenshots: [
            // "assets/images/projects/sales-forecasting/screenshot1.jpg",
            // "assets/images/projects/sales-forecasting/screenshot2.jpg",
            // "assets/images/projects/sales-forecasting/screenshot3.jpg"
        ],
        outcome: "Deployed for 3 local retail businesses, improving inventory accuracy by 35%",
        hasGithub: true,
        githubUrl: "https://github.com/example/sales-forecasting",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "Online Marketplace Platform": {
        type: "E-Commerce",
        icon: "fa-shopping-cart",
        logo: "src/images/projects/marketplace/logo.png",
        team: "BSIT-4 Group A",
        overview: "A full-stack e-commerce solution with integrated payment processing and comprehensive inventory management. The platform supports multiple vendors and provides a seamless shopping experience.",
        duration: "5 months",
        teamSize: "6 students",
        techCount: "9",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS S3", "Redux", "JWT", "Docker"],
        features: [
            "Multi-vendor marketplace support",
            "Secure payment integration with Stripe",
            "Real-time inventory management",
            "Product search and filtering",
            "User reviews and ratings system",
            "Order tracking and notifications",
            "Admin panel for vendor management"
        ],
        screenshots: [
            // "src/images/projects/marketplace/screenshot1.jpg",
            // "src/images/projects/marketplace/screenshot2.jpg",
            // "src/images/projects/marketplace/screenshot3.jpg"
        ],
        outcome: "Launched with 15+ local vendors and 300+ registered users in first month",
        hasGithub: true,
        githubUrl: "https://github.com/example/marketplace",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "Patient Management System": {
        type: "Healthcare",
        icon: "fa-heartbeat",
        logo: "src/images/projects/patient-management/logo.png",
        team: "HealthTech Team",
        overview: "A comprehensive hospital information system designed for managing patient records, appointments, and medical histories. The system streamlines hospital operations and improves patient care coordination.",
        duration: "6 months",
        teamSize: "5 students",
        techCount: "7",
        technologies: ["Java", "Spring Boot", "MySQL", "Angular", "Bootstrap", "JWT", "JasperReports"],
        features: [
            "Electronic health records (EHR) management",
            "Appointment scheduling system",
            "Patient medical history tracking",
            "Prescription and medication management",
            "Lab results integration",
            "Billing and insurance processing",
            "Role-based access control"
        ],
        screenshots: [
            // "src/images/projects/patient-management/screenshot1.jpg",
            // "src/images/projects/patient-management/screenshot2.jpg",
            // "src/images/projects/patient-management/screenshot3.jpg"
        ],
        outcome: "Implemented in a 50-bed hospital, managing 200+ patient records daily",
        hasGithub: false,
        githubUrl: "",
        githubDesc: ""
    },
    "Educational Quiz Game": {
        type: "Game Development",
        icon: "fa-gamepad",
        logo: "src/images/projects/quiz-game/logo.png",
        team: "GameDev Squad",
        overview: "An interactive learning game designed to make education fun and engaging for students. Built using Unity and C#, the game features multiple subjects and adaptive difficulty levels.",
        duration: "4 months",
        teamSize: "4 students",
        techCount: "5",
        technologies: ["Unity", "C#", "Firebase", "Blender", "Photoshop"],
        features: [
            "Multiple subject areas and quiz categories",
            "Adaptive difficulty based on performance",
            "Multiplayer competition mode",
            "Progress tracking and achievements",
            "3D graphics and animations",
            "Leaderboard system"
        ],
        screenshots: [
            // "src/images/projects/quiz-game/screenshot1.jpg",
            // "src/images/projects/quiz-game/screenshot2.jpg",
            // "src/images/projects/quiz-game/screenshot3.jpg"
        ],
        outcome: "Downloaded by 1,000+ students, used in 5 schools for supplementary learning",
        hasGithub: true,
        githubUrl: "https://github.com/example/quiz-game",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    "Chatbot Assistant": {
        type: "AI & Automation",
        icon: "fa-robot",
        logo: "src/images/projects/chatbot/logo.png",
        team: "AI Innovation Lab",
        overview: "An AI-powered chatbot for customer support using natural language processing. The chatbot can understand customer queries, provide instant responses, and escalate complex issues to human agents.",
        duration: "5 months",
        teamSize: "4 students",
        techCount: "7",
        technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React", "MongoDB", "DialogFlow"],
        features: [
            "Natural language understanding",
            "Intent recognition and entity extraction",
            "Multi-language support",
            "Integration with existing CRM systems",
            "Conversation history and analytics",
            "Automated ticket creation",
            "Continuous learning from interactions"
        ],
        screenshots: [
            // "src/images/projects/chatbot/screenshot1.jpg",
            // "src/images/projects/chatbot/screenshot2.jpg",
            // "src/images/projects/chatbot/screenshot3.jpg"
        ],
        outcome: "Deployed for 2 e-commerce companies, handling 70% of customer inquiries automatically",
        hasGithub: true,
        githubUrl: "https://github.com/example/chatbot-assistant",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    }
};

// Open output details modal
function openOutputModal(projectTitle) {
    const data = outputProjectsData[projectTitle];
    if (!data) return;

    // Populate modal content
    document.getElementById('outputModalTitle').textContent = projectTitle;
    document.getElementById('outputProjectType').innerHTML = `<i class="fas ${data.icon}"></i> ${data.type}`;
    document.getElementById('outputDevTeam').textContent = data.team;
    
    // Set project logo
    const projectLogo = document.getElementById('projectLogo');
    if (data.logo) {
        projectLogo.src = data.logo;
        projectLogo.alt = `${projectTitle} Logo`;
    } else {
        projectLogo.src = 'src/images/default-project-logo.png';
        projectLogo.alt = 'Project Logo';
    }
    document.getElementById('outputOverview').textContent = data.overview;
    document.getElementById('outputDuration').textContent = data.duration;
    document.getElementById('outputTeamSize').textContent = data.teamSize;
    document.getElementById('outputTechCount').textContent = data.techCount;
    document.getElementById('outputOutcome').textContent = data.outcome;

    // Populate technologies
    const techTagsContainer = document.getElementById('outputTechTags');
    techTagsContainer.innerHTML = data.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    // Populate features
    const featuresList = document.getElementById('outputFeaturesList');
    featuresList.innerHTML = data.features.map(feature => 
        `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
    ).join('');

    // Populate screenshots dynamically
    const screenshotsContainer = document.getElementById('outputScreenshots');
    if (data.screenshots && data.screenshots.length > 0) {
        // If project has screenshots, display them
        screenshotsContainer.innerHTML = data.screenshots.map((screenshot, index) => `
            <div class="screenshot-placeholder has-image" data-screenshot="${screenshot}" data-caption="${projectTitle} - Screenshot ${index + 1}">
                <img src="${screenshot}" alt="${projectTitle} Screenshot ${index + 1}">
            </div>
        `).join('');
        
        // Add click events to screenshots for lightbox
        screenshotsContainer.querySelectorAll('.screenshot-placeholder.has-image').forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-screenshot');
                const caption = this.getAttribute('data-caption');
                openLightbox(imgSrc, caption);
            });
        });
    } else {
        // If no screenshots, show placeholders with comments
        screenshotsContainer.innerHTML = `
            <div class="screenshot-placeholder">
                <i class="fas fa-image"></i>
                <p>Screenshot 1</p>
                <!-- INSERT ${projectTitle.toUpperCase()} SCREENSHOT 1 HERE -->
                <!-- Example: <img src="src/images/projects/${projectTitle.toLowerCase().replace(/\s+/g, '-')}/screenshot1.jpg" alt="Screenshot 1"> -->
            </div>
            <div class="screenshot-placeholder">
                <i class="fas fa-image"></i>
                <p>Screenshot 2</p>
                <!-- INSERT ${projectTitle.toUpperCase()} SCREENSHOT 2 HERE -->
                <!-- Example: <img src="src/images/projects/${projectTitle.toLowerCase().replace(/\s+/g, '-')}/screenshot2.jpg" alt="Screenshot 2"> -->
            </div>
            <div class="screenshot-placeholder">
                <i class="fas fa-image"></i>
                <p>Screenshot 3</p>
                <!-- INSERT ${projectTitle.toUpperCase()} SCREENSHOT 3 HERE -->
                <!-- Example: <img src="src/images/projects/${projectTitle.toLowerCase().replace(/\s+/g, '-')}/screenshot3.jpg" alt="Screenshot 3"> -->
            </div>
        `;
    }

    // Handle GitHub section
    const openSourceSection = document.getElementById('openSourceSection');
    const viewSourceBtn = document.getElementById('viewSourceBtn');
    
    if (data.hasGithub) {
        openSourceSection.style.display = 'block';
        viewSourceBtn.style.display = 'inline-flex';
        document.getElementById('openSourceDesc').textContent = data.githubDesc;
        document.getElementById('repoLink').href = data.githubUrl;
        viewSourceBtn.onclick = () => window.open(data.githubUrl, '_blank');
    } else {
        openSourceSection.style.display = 'none';
        viewSourceBtn.style.display = 'none';
    }

    // Show modal
    outputDetailsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close output details modal
closeOutputModalBtn.onclick = function() {
    outputDetailsModal.style.display = 'none';
    document.body.style.overflow = '';
};

// Close when clicking outside modal
window.addEventListener('click', function(e) {
    if (e.target == outputDetailsModal) {
        outputDetailsModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Add click events to all "View Details" buttons
document.querySelectorAll('.view-details-btn').forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card click event
        const card = this.closest('.output-card');
        const projectTitle = card.querySelector('h3').textContent.trim();
        openOutputModal(projectTitle);
    });
});

// ===== IMAGE LIGHTBOX FUNCTIONALITY =====
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');

// Function to open lightbox
function openLightbox(imageSrc, caption) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
    imageLightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close lightbox
lightboxClose.onclick = function() {
    imageLightbox.style.display = 'none';
    document.body.style.overflow = '';
};

// Close when clicking outside the image
imageLightbox.addEventListener('click', function(e) {
    if (e.target === imageLightbox) {
        imageLightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imageLightbox.style.display === 'block') {
        imageLightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// ===== SMOOTH PAGE TRANSITIONS =====
function smoothPageTransition(event, url) {
    // Check if it's an external link or anchor link
    if (url.startsWith('http') || url.startsWith('#') || url === 'javascript:void(0)') {
        return; // Let it behave normally
    }
    event.preventDefault();
    document.body.classList.add('page-transitioning');
    setTimeout(() => {
        window.location.href = url;
    }, 150); // Match the fadeOut animation duration
}

// Apply to all internal navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links in the page
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only apply transition to internal page links
            if (href && 
                !href.startsWith('http') && 
                !href.startsWith('#') && 
                href !== 'javascript:void(0)' &&
                !this.hasAttribute('target')) {
                smoothPageTransition(e, href);
            }
        });
    });

    // ===== FACULTY MODAL LOGIC (About SWU-IT Page) =====
    const facultyData = {
        santos: {
            initials: 'RS',
            role: 'Dean',
            name: 'Dr. Ricardo M. Santos',
            title: 'Dean, College of Information Technology',
            email: 'r.santos@swu.edu.ph',
            photo: '../assets/images/faculty/r-santos.jpg',
            bio: 'Dr. Santos has over 20 years of experience in academia and industry. He has led the College of IT since 2018, driving curriculum modernization and forging partnerships with leading tech companies in Cebu and beyond.',
            education: 'Ph.D. Computer Science, University of the Philippines',
            specialization: ['Software Engineering', 'AI & Machine Learning'],
            courses: ['IT Capstone Project', 'Advanced Software Engineering', 'Research Methods in IT'],
        },
        reyes: {
            initials: 'MR',
            role: 'Department Head',
            name: 'Prof. Maria Elena C. Reyes',
            title: 'Department Head, Software Development',
            email: 'm.reyes@swu.edu.ph',
            photo: '../assets/images/faculty/m-reyes.jpg',
            bio: 'Prof. Reyes specializes in full-stack web development and database management. She coordinates the capstone program and mentors student teams on industry-partnered projects.',
            education: 'M.S. Information Technology, Cebu Institute of Technology',
            specialization: ['Web Development', 'Database Systems'],
            courses: ['Web Development', 'Database Management Systems', 'Systems Analysis & Design'],
        },
        delacruz: {
            initials: 'JD',
            role: 'Senior Faculty',
            name: 'Prof. Juan Carlos B. Dela Cruz',
            title: 'Senior Faculty, Programming',
            email: 'j.delacruz@swu.edu.ph',
            photo: '../assets/images/faculty/j-delacruz.jpg',
            bio: 'Prof. Dela Cruz brings deep expertise in Java and object-oriented paradigms. He has guided multiple award-winning student teams at regional programming competitions.',
            education: 'M.S. Computer Science, University of San Carlos',
            specialization: ['Java Programming', 'Object-Oriented Design'],
            courses: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Software Design Patterns'],
        },
        lim: {
            initials: 'AL',
            role: 'Faculty',
            name: 'Prof. Angela T. Lim',
            title: 'Faculty, Networking & Security',
            email: 'a.lim@swu.edu.ph',
            photo: '../assets/images/faculty/a-lim.jpg',
            bio: "Prof. Lim is a certified network professional with hands-on experience in enterprise infrastructure. She leads the college's cybersecurity awareness initiatives and student-run security lab.",
            education: 'M.S. Information Security, Ateneo de Manila University',
            specialization: ['Network Administration', 'Cybersecurity'],
            courses: ['Computer Networks', 'Network Security', 'Ethical Hacking'],
        },
        garcia: {
            initials: 'MG',
            role: 'Faculty',
            name: 'Prof. Mark Anthony R. Garcia',
            title: 'Faculty, Mobile & Emerging Tech',
            email: 'm.garcia@swu.edu.ph',
            photo: '../assets/images/faculty/m-garcia.jpg',
            bio: 'Prof. Garcia is passionate about mobile platforms, IoT, and cloud services. He has co-developed several mobile applications deployed in local government units across Cebu.',
            education: 'M.S. Information Technology, De La Salle University',
            specialization: ['Mobile Development', 'IoT', 'Cloud Computing'],
            courses: ['Mobile Application Development', 'Internet of Things', 'Cloud Infrastructure'],
        },
        tan: {
            initials: 'CT',
            role: 'Faculty',
            name: 'Prof. Christine Joy S. Tan',
            title: 'Faculty, Multimedia & UI/UX',
            email: 'c.tan@swu.edu.ph',
            photo: '../assets/images/faculty/c-tan.jpg',
            bio: 'Prof. Tan merges creative design thinking with technical execution. She has won several design awards and regularly mentors student teams in UI/UX competitions and hackathons.',
            education: 'M.A. Multimedia Arts, Far Eastern University',
            specialization: ['UI/UX Design', 'Multimedia Systems'],
            courses: ['UI/UX Design', 'Multimedia Systems', 'Human-Computer Interaction'],
        },
    };

    // Modal elements — IDs match the HTML exactly
    const facultyModal           = document.getElementById('facultyModal');
    const closeFacultyModal      = document.getElementById('closeFacultyModal');
    const modalFacultyAvatar     = document.getElementById('modalFacultyAvatar');
    const modalFacultyName       = document.getElementById('modalFacultyName');
    const modalFacultyTitle      = document.getElementById('modalFacultyTitle');
    const modalFacultyEmail      = document.getElementById('modalFacultyEmail');
    const modalFacultyBio        = document.getElementById('modalFacultyBio');
    const modalFacultyEducation  = document.getElementById('modalFacultyEducation');
    const modalFacultySpecialization = document.getElementById('modalFacultySpecialization');
    const modalFacultyCourses    = document.getElementById('modalFacultyCourses');

    // Only run modal logic if the modal exists on this page
    if (facultyModal) {

        // Open modal on card click
        document.querySelectorAll('.faculty-card').forEach(card => {
            card.addEventListener('click', function() {
                const key  = card.getAttribute('data-faculty');
                const data = facultyData[key];
                if (!data) return;

                // Top bar name
                const topName = document.getElementById('modalTopName');
                if (topName) topName.textContent = data.name;

                // Role badge
                const roleBadge = document.getElementById('modalFacultyRoleBadge');
                if (roleBadge) roleBadge.textContent = data.role;

                // Avatar: try real photo, fall back to initials on error
                const img  = modalFacultyAvatar.querySelector('img');
                const span = modalFacultyAvatar.querySelector('span');
                img.style.display  = 'block';
                span.style.display = 'none';
                img.src = data.photo;
                img.alt = data.name;
                img.onerror = function () {
                    this.style.display = 'none';
                    span.style.display = 'flex';
                    span.textContent   = data.initials;
                };

                // Name / title / email
                modalFacultyName.textContent  = data.name;
                modalFacultyTitle.textContent = data.title;
                modalFacultyEmail.textContent = data.email;

                // Bio & education
                modalFacultyBio.textContent       = data.bio;
                modalFacultyEducation.textContent = data.education;

                // Specialization tags
                modalFacultySpecialization.innerHTML =
                    data.specialization.map(s => `<span>${s}</span>`).join('');

                // Courses
                modalFacultyCourses.innerHTML =
                    data.courses.map(c => `<li><i class="fas fa-book-open"></i> ${c}</li>`).join('');

                facultyModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close — X button
        if (closeFacultyModal) {
            closeFacultyModal.onclick = function () {
                facultyModal.style.display = 'none';
                document.body.style.overflow = '';
            };
        }

        // Close — click outside modal content
        window.addEventListener('click', function (e) {
            if (e.target === facultyModal) {
                facultyModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Close — Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && facultyModal.style.display === 'block') {
                facultyModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
});