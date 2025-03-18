function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

// Add this to your scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    // Get all links with hash (#) references
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if the href is not just "#"
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                // Get the target element
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    // Scroll to the element with smooth behavior
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});