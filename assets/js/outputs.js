// ===== ALL PROJECTS DATA (Expanded from main page) =====
const allProjects = [
    {
        id: 1,
        title: "HealthWatch",
        type: "Website Application",
        icon: "fa-globe",
        logo: "../assets/images/projects/logos/HWLogo.png",
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
        screenshots: [],
        outcome: "Deployed in 3 barangays in Cebu City, monitoring health data for 10,000+ residents",
        hasGithub: true,
        githubUrl: "https://github.com/example/healthwatch",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 2,
        title: "eBayan",
        type: "Website Application",
        icon: "fa-globe",
        logo: "../assets/images/projects/logos/eBayanLogo.jpg",
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
        screenshots: [],
        outcome: "Pilot program launched in partnership with Cebu City Hall, serving 500+ daily users",
        hasGithub: true,
        githubUrl: "https://github.com/example/ebayan",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 3,
        title: "ValiCheck",
        type: "Web Application",
        icon: "fa-car",
        logo: "../assets/images/projects/logos/VaLiCheckLogo.png",
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
        screenshots: [],
        outcome: "Adopted by 2 LTO satellite offices for registration verification",
        hasGithub: true,
        githubUrl: "https://github.com/example/valicheck",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 4,
        title: "Network Security Dashboard",
        type: "Cybersecurity",
        icon: "fa-shield-alt",
        logo: "../assets/images/projects/network-security/logo.png",
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
        screenshots: [],
        outcome: "Implemented in university's IT infrastructure, monitoring 200+ devices",
        hasGithub: false,
        githubUrl: "",
        githubDesc: ""
    },
    {
        id: 5,
        title: "Sales Forecasting Tool",
        type: "Data Analytics",
        icon: "fa-chart-line",
        logo: "../assets/images/projects/sales-forecasting/logo.png",
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
        screenshots: [],
        outcome: "Deployed for 3 local retail businesses, improving inventory accuracy by 35%",
        hasGithub: true,
        githubUrl: "https://github.com/example/sales-forecasting",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 6,
        title: "Online Marketplace Platform",
        type: "E-Commerce",
        icon: "fa-shopping-cart",
        logo: "../assets/images/projects/marketplace/logo.png",
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
        screenshots: [],
        outcome: "Launched with 15+ local vendors and 300+ registered users in first month",
        hasGithub: true,
        githubUrl: "https://github.com/example/marketplace",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 7,
        title: "Patient Management System",
        type: "Healthcare",
        icon: "fa-heartbeat",
        logo: "../assets/images/projects/patient-management/logo.png",
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
        screenshots: [],
        outcome: "Implemented in a 50-bed hospital, managing 200+ patient records daily",
        hasGithub: false,
        githubUrl: "",
        githubDesc: ""
    },
    {
        id: 8,
        title: "Educational Quiz Game",
        type: "Game Development",
        icon: "fa-gamepad",
        logo: "../assets/images/projects/quiz-game/logo.png",
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
        screenshots: [],
        outcome: "Downloaded by 1,000+ students, used in 5 schools for supplementary learning",
        hasGithub: true,
        githubUrl: "https://github.com/example/quiz-game",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 9,
        title: "Chatbot Assistant",
        type: "AI & Automation",
        icon: "fa-robot",
        logo: "../assets/images/projects/chatbot/logo.png",
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
        screenshots: [],
        outcome: "Deployed for 2 e-commerce companies, handling 70% of customer inquiries automatically",
        hasGithub: true,
        githubUrl: "https://github.com/example/chatbot-assistant",
        githubDesc: "This project is open-source and available on GitHub. Students can fork, contribute, and learn from the codebase."
    },
    {
        id: 10,
        title: "University Library System",
        type: "Web Application",
        icon: "fa-book",
        logo: "../assets/images/projects/library/logo.png",
        team: "Team Alpha (BSIT-3)",
        overview: "A comprehensive management system for the university library built with Java and MySQL.",
        duration: "4 months",
        teamSize: "4 students",
        techCount: "4",
        technologies: ["Java", "MySQL", "JSP", "Servlet"],
        features: [
            "Book catalog management",
            "Student borrowing system",
            "Fine calculation and tracking",
            "Inventory management",
            "Search and filter functionality"
        ],
        screenshots: [],
        outcome: "Currently used by the university library, serving 500+ students daily",
        hasGithub: true,
        githubUrl: "https://github.com/example/library-system",
        githubDesc: "This project is open-source and available on GitHub."
    },
    {
        id: 11,
        title: "Student Portal Mobile App",
        type: "Mobile Development",
        icon: "fa-mobile-alt",
        logo: "../assets/images/projects/student-portal/logo.png",
        team: "John Doe & Jane Smith",
        overview: "Android application allowing students to check grades and schedules in real-time.",
        duration: "3 months",
        teamSize: "2 students",
        techCount: "5",
        technologies: ["Kotlin", "Firebase", "Android Studio", "REST API", "Material Design"],
        features: [
            "Real-time grade viewing",
            "Class schedule display",
            "Push notifications for announcements",
            "Faculty directory",
            "School event calendar"
        ],
        screenshots: [],
        outcome: "Downloaded by 1,500+ students with 4.5-star rating",
        hasGithub: true,
        githubUrl: "https://github.com/example/student-portal",
        githubDesc: "This project is open-source and available on GitHub."
    },
    {
        id: 12,
        title: "Alumni Tracking System",
        type: "Web Application",
        icon: "fa-users",
        logo: "../assets/images/projects/alumni/logo.png",
        team: "Capstone Group 4",
        overview: "Web-based platform for tracking alumni employment and networking opportunities.",
        duration: "5 months",
        teamSize: "5 students",
        techCount: "6",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Chart.js", "jQuery"],
        features: [
            "Alumni directory and search",
            "Employment tracking and analytics",
            "Event management system",
            "Networking forum",
            "Job posting board",
            "Donation management"
        ],
        screenshots: [],
        outcome: "Successfully tracked 800+ alumni with 85% employment rate",
        hasGithub: true,
        githubUrl: "https://github.com/example/alumni-system",
        githubDesc: "This project is open-source and available on GitHub."
    }
];

// ===== DOM Elements =====
const projectsGrid = document.getElementById('projectsGrid');
const projectsComingSoon = document.getElementById('projectsComingSoon');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterBtn = document.getElementById('filterBtn');
const filterMenu = document.getElementById('filterMenu');
const applyFiltersBtn = document.getElementById('applyFilters');
const clearFiltersBtn = document.getElementById('clearFilters');
const activeFiltersContainer = document.getElementById('activeFilters');
const noResultsDiv = document.getElementById('noResults');
const resetAllBtn = document.getElementById('resetAllBtn');
const totalProjectsSpan = document.getElementById('totalProjectsCount');
const paginationContainer = document.getElementById('paginationContainer');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const paginationPages = document.getElementById('paginationPages');

// ===== State Management =====
let currentSearchTerm = '';
let activeFilters = {
    types: []
};
let currentPage = 1;
let projectsPerPage = 9; // 9 projects per page (3x3 grid)
let filteredProjects = [];

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', () => {
    updateTotalProjectsCount();
    filterProjects();
    renderProjects();
    setupEventListeners();
    setupModalEvents();
    setupPagination();
});

// ===== Update Total Projects Count =====
function updateTotalProjectsCount() {
    totalProjectsSpan.textContent = allProjects.length;
}

// ===== Filter Projects =====
function filterProjects() {
    let filtered = [...allProjects];
    
    // Apply search filter
    if (currentSearchTerm) {
        const searchLower = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(project => 
            project.title.toLowerCase().includes(searchLower) ||
            project.team.toLowerCase().includes(searchLower) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
            project.overview.toLowerCase().includes(searchLower)
        );
    }
    
    // Apply type filters
    if (activeFilters.types.length > 0) {
        filtered = filtered.filter(project => 
            activeFilters.types.includes(project.type)
        );
    }
    
    filteredProjects = filtered;
    return filtered;
}

// ===== Render Projects Grid with Pagination =====
function renderProjects() {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = filteredProjects.slice(startIndex, endIndex);
    
    if (filteredProjects.length === 0) {
        projectsGrid.style.display = 'none';
        projectsComingSoon.style.display = 'none';
        noResultsDiv.style.display = 'block';
        paginationContainer.style.display = 'none';
        return;
    }
    
    // Show projects grid and hide others
    projectsGrid.style.display = 'grid';
    projectsComingSoon.style.display = 'none';
    noResultsDiv.style.display = 'none';
    paginationContainer.style.display = 'flex';
    
    projectsGrid.innerHTML = projectsToShow.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-card-image">
                ${project.logo && project.logo !== '../assets/images/projects/network-security/logo.png' ? 
                    `<img src="${project.logo}" alt="${project.title}">` : 
                    `<i class="fas ${project.icon} output-icon"></i>`
                }
                <button class="view-details-btn" data-id="${project.id}">View Details</button>
            </div>
            <div class="project-card-content">
                <div class="project-header">
                    <span class="project-type">${project.type}</span>
                    <i class="fas fa-arrow-up-right-from-square project-link-icon"></i>
                </div>
                <h3>${project.title}</h3>
                <p>${project.overview.substring(0, 100)}${project.overview.length > 100 ? '...' : ''}</p>
                <div class="project-footer">
                    <span class="developer-label">Developed by:</span>
                    <span class="developer-name">${project.team}</span>
                </div>
                <div class="project-tech-tags">
                    ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag-small">${tech}</span>`).join('')}
                    ${project.technologies.length > 3 ? `<span class="tech-tag-small">+${project.technologies.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click events to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = parseInt(btn.getAttribute('data-id'));
            const project = allProjects.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });
    
    updatePaginationButtons();
}

// ===== Setup Pagination =====
function setupPagination() {
    updatePaginationButtons();
    
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProjects();
            scrollToTop();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProjects();
            scrollToTop();
        }
    });
}

function updatePaginationButtons() {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    
    // Update prev/next buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Generate page numbers
    paginationPages.innerHTML = '';
    
    // Show max 5 page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    if (endPage - startPage < 4 && startPage > 1) {
        startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-page ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderProjects();
            scrollToTop();
        });
        paginationPages.appendChild(pageBtn);
    }
    
    // Show ellipsis if needed
    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'pagination-page';
        firstBtn.textContent = '1';
        firstBtn.addEventListener('click', () => {
            currentPage = 1;
            renderProjects();
            scrollToTop();
        });
        paginationPages.insertBefore(firstBtn, paginationPages.firstChild);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationPages.insertBefore(ellipsis, paginationPages.children[1]);
        }
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationPages.appendChild(ellipsis);
        }
        
        const lastBtn = document.createElement('button');
        lastBtn.className = 'pagination-page';
        lastBtn.textContent = totalPages;
        lastBtn.addEventListener('click', () => {
            currentPage = totalPages;
            renderProjects();
            scrollToTop();
        });
        paginationPages.appendChild(lastBtn);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== Update Active Filters Display =====
function updateActiveFiltersDisplay() {
    activeFiltersContainer.innerHTML = '';
    
    // Show search term filter
    if (currentSearchTerm) {
        const filterTag = createFilterTag(`Search: ${currentSearchTerm}`, 'search');
        activeFiltersContainer.appendChild(filterTag);
    }
    
    // Show type filters
    activeFilters.types.forEach(type => {
        const filterTag = createFilterTag(type, 'type');
        activeFiltersContainer.appendChild(filterTag);
    });
    
    if (activeFilters.types.length === 0 && !currentSearchTerm) {
        activeFiltersContainer.style.display = 'none';
    } else {
        activeFiltersContainer.style.display = 'flex';
    }
}

// ===== Create Filter Tag =====
function createFilterTag(text, type) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    tag.innerHTML = `
        ${text}
        <i class="fas fa-times" data-filter-type="${type}" data-filter-value="${text}"></i>
    `;
    
    tag.querySelector('i').addEventListener('click', (e) => {
        e.stopPropagation();
        const filterType = e.target.getAttribute('data-filter-type');
        let filterValue = e.target.getAttribute('data-filter-value');
        
        if (filterType === 'search') {
            currentSearchTerm = '';
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
        } else if (filterType === 'type') {
            // Remove the "Search: " prefix if present
            filterValue = filterValue.replace('Search: ', '');
            activeFilters.types = activeFilters.types.filter(t => t !== filterValue);
            // Uncheck corresponding checkbox
            const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
            checkboxes.forEach(cb => {
                if (cb.value === filterValue) {
                    cb.checked = false;
                }
            });
        }
        
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
    });
    
    return tag;
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        clearSearchBtn.style.display = currentSearchTerm ? 'flex' : 'none';
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
    });
    
    // Clear search button
    clearSearchBtn.addEventListener('click', () => {
        currentSearchTerm = '';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
    });
    
    // Filter dropdown toggle
    filterBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        filterMenu.classList.toggle('show');
    });
    
    // Close filter menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!filterBtn.contains(e.target) && !filterMenu.contains(e.target)) {
            filterMenu.classList.remove('show');
        }
    });
    
    // Apply filters button
    applyFiltersBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]:checked');
        activeFilters.types = Array.from(checkboxes).map(cb => cb.value);
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
        filterMenu.classList.remove('show');
    });
    
    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        activeFilters.types = [];
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
        filterMenu.classList.remove('show');
    });
    
    // Reset all button
    resetAllBtn.addEventListener('click', () => {
        currentSearchTerm = '';
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        
        const checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        activeFilters.types = [];
        
        filterProjects();
        currentPage = 1;
        updateActiveFiltersDisplay();
        renderProjects();
    });
}

// ===== Modal Functions =====
const outputDetailsModal = document.getElementById('outputDetailsModal');
const closeOutputModalBtn = document.getElementById('closeOutputModal');

function openProjectModal(project) {
    // Populate modal content
    document.getElementById('outputModalTitle').textContent = project.title;
    document.getElementById('outputProjectType').innerHTML = `<i class="fas ${project.icon}"></i> ${project.type}`;
    document.getElementById('outputDevTeam').textContent = project.team;
    
    // Set project logo
    const projectLogo = document.getElementById('projectLogo');
    if (project.logo && project.logo !== '../assets/images/projects/network-security/logo.png') {
        projectLogo.src = project.logo;
        projectLogo.alt = `${project.title} Logo`;
    } else {
        projectLogo.src = '../assets/images/default-project-logo.png';
    }
    
    document.getElementById('outputOverview').textContent = project.overview;
    document.getElementById('outputDuration').textContent = project.duration;
    document.getElementById('outputTeamSize').textContent = project.teamSize;
    document.getElementById('outputTechCount').textContent = project.techCount;
    document.getElementById('outputOutcome').textContent = project.outcome;
    
    // Populate technologies
    const techTagsContainer = document.getElementById('outputTechTags');
    techTagsContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Populate features
    const featuresList = document.getElementById('outputFeaturesList');
    featuresList.innerHTML = project.features.map(feature => 
        `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
    ).join('');
    
    // Populate screenshots
    const screenshotsContainer = document.getElementById('outputScreenshots');
    if (project.screenshots && project.screenshots.length > 0) {
        screenshotsContainer.innerHTML = project.screenshots.map((screenshot, index) => `
            <div class="screenshot-placeholder has-image" data-screenshot="${screenshot}" data-caption="${project.title} - Screenshot ${index + 1}">
                <img src="${screenshot}" alt="${project.title} Screenshot ${index + 1}">
            </div>
        `).join('');
        
        screenshotsContainer.querySelectorAll('.screenshot-placeholder.has-image').forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-screenshot');
                const caption = this.getAttribute('data-caption');
                openLightbox(imgSrc, caption);
            });
        });
    } else {
        screenshotsContainer.innerHTML = `
            <div class="screenshot-placeholder">
                <i class="fas fa-image"></i>
                <p>No screenshots available</p>
            </div>
        `;
    }
    
    // Handle GitHub section
    const openSourceSection = document.getElementById('openSourceSection');
    const viewSourceBtn = document.getElementById('viewSourceBtn');
    
    if (project.hasGithub) {
        openSourceSection.style.display = 'block';
        viewSourceBtn.style.display = 'inline-flex';
        document.getElementById('openSourceDesc').textContent = project.githubDesc;
        document.getElementById('repoLink').href = project.githubUrl;
        viewSourceBtn.onclick = () => window.open(project.githubUrl, '_blank');
    } else {
        openSourceSection.style.display = 'none';
        viewSourceBtn.style.display = 'none';
    }
    
    // Show modal
    outputDetailsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setupModalEvents() {
    if (closeOutputModalBtn) {
        closeOutputModalBtn.onclick = function() {
            outputDetailsModal.style.display = 'none';
            document.body.style.overflow = '';
        };
    }
    
    window.addEventListener('click', function(e) {
        if (e.target == outputDetailsModal) {
            outputDetailsModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// ===== Lightbox Functions =====
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(imageSrc, caption) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
    imageLightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

if (lightboxClose) {
    lightboxClose.onclick = function() {
        imageLightbox.style.display = 'none';
        document.body.style.overflow = '';
    };
}

if (imageLightbox) {
    imageLightbox.addEventListener('click', function(e) {
        if (e.target === imageLightbox) {
            imageLightbox.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imageLightbox && imageLightbox.style.display === 'block') {
        imageLightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
    if (e.key === 'Escape' && outputDetailsModal && outputDetailsModal.style.display === 'block') {
        outputDetailsModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// ===== Update projects per page based on screen size =====
function updateProjectsPerPage() {
    if (window.innerWidth <= 768) {
        projectsPerPage = 6; // 2x3 grid on tablet
    } else if (window.innerWidth <= 480) {
        projectsPerPage = 4; // 4x1 grid on mobile
    } else {
        projectsPerPage = 9; // 3x3 grid on desktop
    }
    
    // Re-render with new page size
    currentPage = 1;
    renderProjects();
}

// Listen for resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateProjectsPerPage();
    }, 250);
});

// Initial call
updateProjectsPerPage();

// --- MOBILE HAMBURGER LOGIC ---
const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});