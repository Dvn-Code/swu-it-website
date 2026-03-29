// ===== ORGANIZATIONS DATA =====
const organizations = [
    {
        id: 1,
        name: "IT Student Council",
        shortName: "ITSC",
        category: "student-government",
        icon: "fa-landmark",
        logo: "../assets/images/organizations/ITSC_logo.jpg",
        members: 15,
        established: "2019",
        meetingSchedule: "Every Friday, 4:00 PM - 6:00 PM",
        description: "The Information Technology Student Council (ITSC) serves as the official student government body representing all IT students. It serves as the bridge between the student body and the college administration, ensuring student voices are heard and student welfare is prioritized. The council organizes major college events, advocates for student rights, and leads various community outreach programs.",
        achievements: [
            "Organized IT Days 2026 with 200+ attendees",
            "Launched Student Mentorship Program (SMP) in 2023",
            "Successfully lobbied for 24/7 computer lab access",
            "Hosted 10+ industry talks with tech leaders",
            "Raised ₱50,000 for community outreach programs",
            "Received Outstanding Student Organization Award 2024"
        ],
        activities: [
            "Monthly General Assemblies",
            "IT Days 2026 Planning and Execution",
            "Student Welfare Advocacy",
            "Community Outreach Programs",
            "Freshmen Orientation and Welcoming",
            "Leadership Training Workshops"
        ],
        gallery: [
            "../assets/images/organizations/ITSC-1.jpg",
            "../assets/images/organizations/ITSC-2.jpg",
            "../assets/images/organizations/ITSC-3.jpg"
        ],
        contact: {
            email: "itsc@swu.edu.ph",
            facebook: "https://web.facebook.com/swucitecouncil",
            room: "ITSC Office, TechHub Building",
            advisor: "Dr. Ira Pongasi"
        },
        officers: [
            { position: "President", name: "John Michael Reyes" },
            { position: "Vice President", name: "Sarah Jane Cruz" },
            { position: "Secretary", name: "Mark Anthony Santos" },
            { position: "Treasurer", name: "Patricia Anne Lim" }
        ]
    },
    {
        id: 2,
        name: "SWUDevs",
        shortName: "SWUDevs",
        category: "academic",
        icon: "fa-code",
        logo: "../assets/images/organizations/SWUdevs_logo.jpg",
        members: 18,
        established: "2024",
        meetingSchedule: "Tuesdays & Thursdays, 5:00 PM - 7:00 PM",
        description: "SWUDevs is a vibrant community of developers and aspiring programmers dedicated to nurturing coding skills through workshops, hackathons, and collaborative projects. The organization focuses on practical software development skills, modern frameworks, and industry best practices. Members work on real-world projects, participate in coding competitions, and build their professional portfolios.",
        achievements: [
            "Organized 12 successful coding bootcamps",
            "Top 10 in National Collegiate Programming Contest 2024",
            "Developed 5 open-source projects used by the college",
            "50+ members placed in tech companies",
            "Hosted 'CodeFest 2024' with 200 participants",
            "Created SWU DevHub - student project showcase platform"
        ],
        activities: [
            "Weekly Coding Workshops",
            "Weekend Hackathons",
            "Project Collaboration Sessions",
            "Code Review Meetups",
            "Tech Talk Series",
            "Open Source Contribution Drives"
        ],
        gallery: [
            "../assets/images/organizations/BigBro.jpg",
            "../assets/images/organizations/SWUdevs-1.jpg",
            "../assets/images/organizations/SWUdevs-2.jpg"
        ],
        contact: {
            email: "swudevs@swu.edu.ph",
            facebook: "https://web.facebook.com/profile.php?id=61564750572479",
            discord: "https://discord.gg/swudevs",
            room: "ITSC Office, TechHub Building",
            advisor: "Prof. Althani Miguel"
        },
        officers: [
            { position: "President", name: "Carlos Mendoza" },
            { position: "VP for Development", name: "Maria Santos" },
            { position: "VP for Events", name: "James Lopez" },
            { position: "Technical Lead", name: "Angela Reyes" }
        ]
    },
    {
        id: 3,
        name: "AWS Cloud Club - SWU",
        shortName: "AWS Cloud Club",
        category: "professional",
        icon: "fa-cloud",
        logo: "../assets/images/organizations/AWS-SWU_Logo.png",
        members: 15,
        established: "2025",
        meetingSchedule: "Wednesdays, 3:00 PM - 5:00 PM",
        description: "The AWS Cloud Club is a student-led organization focused on Amazon Web Services (AWS) and cloud computing technologies. The club provides hands-on experience with cloud infrastructure, serverless architectures, and modern DevOps practices. Members prepare for AWS certifications, work on cloud projects, and network with industry professionals in the cloud computing space.",
        achievements: [
            "30+ members AWS Certified",
            "Hosted AWS re/Start Program with 50 graduates",
            "Organized Cloud Career Fair with 10+ companies",
            "Won regional Cloud Computing Challenge 2024",
            "Deployed 5 student projects on AWS",
            "Partnership with AWS Educate program"
        ],
        activities: [
            "AWS Certification Study Groups",
            "Cloud Architecture Workshops",
            "Hands-on Lab Sessions",
            "Industry Guest Speaker Events",
            "Cloud Project Development",
            "Career Preparation Sessions"
        ],
        gallery: [
            "../assets/images/organizations/AWS-1.jpg",
            "../assets/images/organizations/AWS-2.jpg",
            "../assets/images/organizations/AWS-3.jpg"
        ],
        contact: {
            email: "awscloud@swu.edu.ph",
            facebook: "https://web.facebook.com/profile.php?id=61584355648026",
            discord: "https://discord.gg/awscloudclub",
            room: "TechHub Building",
            advisor: "Yuri Yankin"
        },
        officers: [
            { position: "President", name: "Kristine Joy Tan" },
            { position: "VP for Education", name: "Mark Wilson" },
            { position: "VP for Operations", name: "Diana Cruz" },
            { position: "Technical Officer", name: "Ramon Garcia" }
        ]
    }
];

// ===== EVENTS DATA =====
const events = [
    {
        id: 1,
        title: "IT Days 2026 Kickoff",
        organization: "Information Technology Student Council",
        date: "February 12",
        month: "Feb",
        day: "12",
        type: "Event",
        icon: "fa-calendar-alt",
        description: "Join us for the grand opening of IT Days 2026 with exciting activities and guest speakers."
    },
    {
        id: 2,
        title: "48-Hour Game Jam",
        organization: "SWUDevs",
        date: "February 8",
        month: "Feb",
        day: "8",
        type: "Event",
        icon: "fa-gamepad",
        description: "Collaborate with fellow developers to create games in 48 hours. Prizes await the best projects!"
    },
    {
        id: 3,
        title: "Algorithm Bootcamp",
        organization: "SWUDevs",
        date: "February 15",
        month: "Feb",
        day: "15",
        type: "Workshop",
        icon: "fa-code",
        description: "Master algorithms and data structures with hands-on coding exercises and expert guidance."
    },
    {
        id: 4,
        title: "Tech Career Panel",
        organization: "AWS Cloud Club - SWU",
        date: "February 22",
        month: "Feb",
        day: "22",
        type: "Speaker",
        icon: "fa-users",
        description: "Learn from industry professionals about career paths in tech and cloud computing."
    },
    {
        id: 5,
        title: "Startup Pitch Night",
        organization: "Information Technology Student Council",
        date: "March 1",
        month: "Mar",
        day: "1",
        type: "Competition",
        icon: "fa-chart-line",
        description: "Present your startup ideas to a panel of judges and win seed funding for your venture."
    },
    {
        id: 6,
        title: "Exam Prep Marathon",
        organization: "SWUDevs",
        date: "March 10",
        month: "Mar",
        day: "10",
        type: "Workshop",
        icon: "fa-book",
        description: "Intensive review sessions for upcoming exams with experienced student mentors."
    },
    {
        id: 7,
        title: "AWS Solutions Architect Certification Bootcamp",
        organization: "AWS Cloud Club - SWU",
        date: "March 22",
        month: "Mar",
        day: "22",
        type: "Workshop",
        icon: "fa-cloud",
        description: "Prepare for the AWS Solutions Architect certification with expert-led training sessions."
    },
    {
        id: 8,
        title: "Hackathon 2025",
        organization: "SWUDevs",
        date: "April 5",
        month: "Apr",
        day: "5",
        type: "Competition",
        icon: "fa-laptop-code",
        description: "Build innovative solutions to real-world problems in this 24-hour hackathon."
    }
];

// ===== DOM Elements =====
const orgsGrid = document.getElementById('orgsGrid');
const filterBtns = document.querySelectorAll('.filter-category-btn');
const visibleOrgsCount = document.getElementById('visibleOrgsCount');
const totalOrgsCount = document.getElementById('totalOrgsCount');
const eventsGrid = document.getElementById('eventsGrid');

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', () => {
    totalOrgsCount.textContent = organizations.length;
    renderOrganizations('all');
    renderEvents();
    setupEventListeners();
    setupModalEvents();
});

// ===== Render Organizations =====
function renderOrganizations(category) {
    let filteredOrgs = organizations;
    
    if (category !== 'all') {
        filteredOrgs = organizations.filter(org => org.category === category);
    }
    
    visibleOrgsCount.textContent = filteredOrgs.length;
    
    if (filteredOrgs.length === 0) {
        orgsGrid.innerHTML = `
            <div class="no-orgs-message">
                <i class="fas fa-users-slash"></i>
                <h3>No organizations found</h3>
                <p>Check back later for new organizations in this category.</p>
            </div>
        `;
        return;
    }
    
    orgsGrid.innerHTML = filteredOrgs.map(org => `
        <div class="org-card" data-org-id="${org.id}">
            <div class="org-card-header">
                <div class="org-card-logo">
                    ${org.logo ? 
                        `<img src="${org.logo}" alt="${org.name}" class="org-logo-img">` : 
                        `<i class="fas ${org.icon}"></i>`
                    }
                </div>
                <span class="org-card-category">${getCategoryName(org.category)}</span>
            </div>
            <div class="org-card-body">
                <h3>${org.name}</h3>
                <div class="org-stats-mini">
                    <span><i class="fas fa-user-friends"></i> ${org.members} members</span>
                    <span><i class="fas fa-calendar-alt"></i> Est. ${org.established}</span>
                </div>
                <div class="org-meeting-mini">
                    <i class="fas fa-clock"></i> ${org.meetingSchedule}
                </div>
                <p class="org-description-mini">${org.description.substring(0, 120)}${org.description.length > 120 ? '...' : ''}</p>
                <div class="org-achievement-highlight">
                    <i class="fas fa-trophy"></i> ${org.achievements[0]}
                </div>
            </div>
            <div class="org-card-footer">
                <button class="view-org-details-btn" data-id="${org.id}">View Details <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `).join('');
    
    // Add click events to view details buttons
    document.querySelectorAll('.view-org-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const orgId = parseInt(btn.getAttribute('data-id'));
            const organization = organizations.find(o => o.id === orgId);
            if (organization) {
                openOrgModal(organization);
            }
        });
    });
}

// ===== Get Category Name =====
function getCategoryName(category) {
    const categories = {
        'student-government': 'Student Government',
        'academic': 'Academic',
        'special-interest': 'Special Interest',
        'professional': 'Professional Development'
    };
    return categories[category] || category;
}

// ===== Render Events =====
function renderEvents() {
    // Show first 8 events
    const displayEvents = events.slice(0, 8);
    
    eventsGrid.innerHTML = displayEvents.map(event => `
        <div class="event-card">
            <div class="event-date">
                <div class="event-month">${event.month}</div>
                <div class="event-day">${event.day}</div>
            </div>
            <div class="event-content">
                <h4>${event.title}</h4>
                <div class="event-org">
                    <i class="fas fa-users"></i> ${event.organization}
                </div>
                <div class="event-type">
                    <i class="fas ${event.icon}"></i> ${event.type}
                </div>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Render filtered organizations
            renderOrganizations(category);
        });
    });
}

// ===== Organization Modal =====
const orgModal = document.getElementById('orgModal');
const closeOrgModalBtn = document.getElementById('closeOrgModal');

function openOrgModal(organization) {
    // Set modal content
    document.getElementById('orgModalTitle').textContent = organization.name;
    
    // Set logo
    const modalLogo = document.getElementById('orgModalLogo');
    if (organization.logo) {
        modalLogo.innerHTML = `<img src="${organization.logo}" alt="${organization.name}" class="org-modal-logo-img">`;
    } else {
        modalLogo.innerHTML = `<i class="fas ${organization.icon}"></i>`;
    }
    
    // Set stats
    document.getElementById('orgModalMembers').textContent = organization.members;
    document.getElementById('orgModalEstablished').textContent = organization.established;
    document.getElementById('orgModalMeeting').textContent = organization.meetingSchedule;
    
    // Set description
    document.getElementById('orgModalDescription').textContent = organization.description;
    
    // Set achievements
    const achievementsList = document.getElementById('orgModalAchievements');
    achievementsList.innerHTML = organization.achievements.map(achievement => 
        `<li><i class="fas fa-check-circle"></i> ${achievement}</li>`
    ).join('');
    
    // Set activities
    const activitiesList = document.getElementById('orgModalActivities');
    activitiesList.innerHTML = organization.activities.map(activity => 
        `<li><i class="fas fa-calendar-check"></i> ${activity}</li>`
    ).join('');
    
    // Set gallery
    const galleryGrid = document.getElementById('orgModalGallery');
    if (organization.gallery && organization.gallery.length > 0) {
        galleryGrid.innerHTML = organization.gallery.map((img, index) => `
            <div class="gallery-item" data-image="${img}" data-caption="${organization.name} - Gallery Image ${index + 1}">
                <img src="${img}" alt="${organization.name} Gallery">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `).join('');
        
        // Add click events to gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.getAttribute('data-image');
                const caption = item.getAttribute('data-caption');
                openLightbox(imgSrc, caption);
            });
        });
    } else {
        galleryGrid.innerHTML = `
            <div class="gallery-placeholder">
                <i class="fas fa-images"></i>
                <p>Gallery coming soon</p>
            </div>
        `;
    }
    
    // Set contact information
    const contactInfo = document.getElementById('orgModalContact');
    contactInfo.innerHTML = `
        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>Email: ${organization.contact.email}</span>
        </div>
        ${organization.contact.facebook ? `
        <div class="contact-item">
            <i class="fab fa-facebook"></i>
            <span>Facebook: <a href="${organization.contact.facebook}" target="_blank">${organization.shortName || organization.name}</a></span>
        </div>` : ''}
        ${organization.contact.discord ? `
        <div class="contact-item">
            <i class="fab fa-discord"></i>
            <span>Discord: <a href="${organization.contact.discord}" target="_blank">Join Discord Server</a></span>
        </div>` : ''}
        <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Location: ${organization.contact.room}</span>
        </div>
        <div class="contact-item">
            <i class="fas fa-chalkboard-teacher"></i>
            <span>Adviser: ${organization.contact.advisor}</span>
        </div>
    `;
    
    // Show modal
    orgModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function setupModalEvents() {
    if (closeOrgModalBtn) {
        closeOrgModalBtn.onclick = function() {
            orgModal.style.display = 'none';
            document.body.style.overflow = '';
        };
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === orgModal) {
            orgModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && orgModal.style.display === 'block') {
            orgModal.style.display = 'none';
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
});

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