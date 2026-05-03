document.addEventListener("DOMContentLoaded", function() {
    
    // --- CUSTOM FEATURE: Scroll to Top Button ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // When the user scrolls down 300px from the top, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document smoothly
    if(scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- FORM VALIDATION & ALERTS ---
    const form = document.getElementById("consultation-form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent actual submission for now
            
            const email = document.getElementById("email") ? document.getElementById("email").value : "";
            const phone = document.getElementById("phone") ? document.getElementById("phone").value : "";
            
            // Basic Email Regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Basic Phone Regex (removes non-digits and checks if at least 10 digits exist)
            const phoneDigits = phone.replace(/\D/g,'');

            if (!emailPattern.test(email)) {
                alert("Validation Error: Please enter a valid email address.");
                return;
            }

            if (phoneDigits.length < 10) {
                alert("Validation Error: Please enter a valid phone number with at least 10 digits.");
                return;
            }

            // If validation passes
            alert("Success! Your consultation request has been received. A UAI representative will contact you shortly.");
            form.reset(); 
            
            // Close the modal (assuming href="#!" structure)
            window.location.hash = "#!";
        });
    }
});
