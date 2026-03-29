// ===== CONTACT FORM HANDLER =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoader = submitBtn?.querySelector('.btn-loader');
    
    if (!contactForm) return;
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            const fieldValue = field.value.trim();
            let fieldError = field.parentElement.querySelector('.field-error');
            
            // Remove existing error
            if (fieldError) {
                fieldError.remove();
            }
            field.classList.remove('error');
            
            // Check if empty
            if (fieldValue === '') {
                isValid = false;
                field.classList.add('error');
                fieldError = document.createElement('div');
                fieldError.className = 'field-error';
                fieldError.textContent = 'This field is required';
                field.parentElement.appendChild(fieldError);
            }
            
            // Email validation
            if (field.type === 'email' && fieldValue !== '') {
                const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
                if (!emailRegex.test(fieldValue)) {
                    isValid = false;
                    field.classList.add('error');
                    if (!field.parentElement.querySelector('.field-error')) {
                        fieldError = document.createElement('div');
                        fieldError.className = 'field-error';
                        fieldError.textContent = 'Please enter a valid email address';
                        field.parentElement.appendChild(fieldError);
                    }
                }
            }
            
            // Mobile validation (Philippine number format)
            if (field.id === 'mobile' && fieldValue !== '') {
                const mobileRegex = /^(09|\+639)\d{9}$/;
                if (!mobileRegex.test(fieldValue.replace(/\s/g, ''))) {
                    isValid = false;
                    field.classList.add('error');
                    if (!field.parentElement.querySelector('.field-error')) {
                        fieldError = document.createElement('div');
                        fieldError.className = 'field-error';
                        fieldError.textContent = 'Please enter a valid Philippine mobile number (e.g., 09123456789)';
                        field.parentElement.appendChild(fieldError);
                    }
                }
            }
        });
        
        // Check reCAPTCHA
        if (typeof grecaptcha !== 'undefined') {
            const recaptchaResponse = grecaptcha.getResponse();
            const recaptchaError = document.getElementById('recaptchaError');
            
            if (!recaptchaResponse || recaptchaResponse.length === 0) {
                isValid = false;
                if (recaptchaError) recaptchaError.style.display = 'block';
            } else {
                if (recaptchaError) recaptchaError.style.display = 'none';
            }
        }
        
        return isValid;
    }
    
    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        if (btnText && btnLoader) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'flex';
            submitBtn.disabled = true;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('fullName')?.value || '',
            email: document.getElementById('email')?.value,
            mobile: document.getElementById('mobile')?.value,
            address: document.getElementById('address')?.value,
            course: document.getElementById('course')?.value,
            message: document.getElementById('message')?.value,
            timestamp: new Date().toISOString()
        };
        
        // Simulate form submission (replace with actual API endpoint)
        setTimeout(() => {
            // Save to localStorage for demo purposes
            let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            
            // Reset form
            contactForm.reset();
            
            // Reset reCAPTCHA
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }
            
            // Show success modal
            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.style.display = 'block';
            }
            
            // Reset button state
            if (btnText && btnLoader) {
                btnText.style.display = 'flex';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
            
            // Scroll to top of modal
            successModal.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    });
    
    // Clear errors on input
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const fieldError = this.parentElement.querySelector('.field-error');
            if (fieldError) {
                fieldError.remove();
            }
        });
    });
});

// Success modal close function
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        closeSuccessModal();
    }
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
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