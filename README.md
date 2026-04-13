# UAI Capstone Project

## Project Description

The UAI Capstone Project is a professional web application that serves as the front-end interface for Unified Advanced Industries' (UAI) suite of AI automation solutions. Built with modern web technologies (HTML5, CSS3, and JavaScript), this responsive website showcases three core business services: a 24/7 AI Voice Receptionist powered by advanced natural language processing, generative AI-driven sales lead workflows, and custom business automation solutions. The application is designed to demonstrate UAI's technical expertise to potential enterprise clients while providing a seamless user experience across desktop and mobile devices.

The front-end architecture prioritizes accessibility, performance, and visual impact through a sophisticated cyberpunk-inspired dark theme with luminescent cyan and neon green accents. The website features an integrated ROI calculator that allows prospective clients to quantify potential savings, animated service cards with embedded iframe-based animations, and a consultation booking system integrated with backend form processing. All styling is managed through a centralized CSS file with CSS variables for consistent theming, responsive grid layouts, and smooth animations using CSS transitions and keyframe animations.

This capstone project demonstrates full-stack web development principles including semantic HTML5 structure, advanced CSS styling with custom properties and animations, responsive design patterns, form validation and submission handling, and integration with external backend services. The website also incorporates professional design patterns such as modal dialogs, smooth page transitions, and interactive elements that enhance user engagement while maintaining clean, maintainable code architecture.

## Installation Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code, Sublime Text, etc.) – *optional, for development*
- Python 3.x or Node.js (if you want to run a local development server)
- Git (optional, for version control)

### Step-by-Step Setup

1. **Clone or Download the Project**
   ```bash
   # If using git, clone the repository
   git clone <repository-url>
   cd UAI_Website_Capstone_Project
   
   # Or simply download the project folder
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd UAI_Website_Capstone_Project
   ```

3. **Start a Local Development Server**
   
   **Option A: Using Python (Python 3.x)**
   ```bash
   python -m http.server 8000
   ```
   
   **Option B: Using Python 2.x**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Option C: Using Node.js (with `http-server`)**
   ```bash
   # Install http-server globally (first time only)
   npm install -g http-server
   
   # Start the server
   http-server
   ```
   
   **Option D: Using Node.js (with `live-server`)**
   ```bash
   # Install live-server globally (first time only)
   npm install -g live-server
   
   # Start the server with auto-reload
   live-server
   ```

4. **Access the Application**
   Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```
   (or the port specified by your chosen server)

### Environment Variables (Optional for Backend Integration)

If you plan to integrate this front-end with UAI's backend services (Twilio voice integration, ElevenLabs API, or other microservices), create a `.env` file in the project root directory:

```bash
# Example .env file structure (do NOT commit this file to version control)
BACKEND_API_URL=http://localhost:3000
TWILIO_ACCOUNT_SID=your_twilio_sid_here
TWILIO_AUTH_TOKEN=your_twilio_token_here
ELEVENLABS_API_KEY=your_elevenlabs_key_here
```

**Note:** The current front-end deployment routes consultation form submissions to an external form handler at `webdevbasics.net/scripts/demo.php`. For production use with UAI's proprietary backend, replace this endpoint in the service pages with your secured API gateway.

## Usage Instructions

### Navigating the Website

1. **Home Page (index.html)**
   - **Header Navigation:** Use the top navigation bar to quickly jump between Home, Services, About Us, and Book a Consultation
   - **Hero Section:** Features the main value proposition and "Explore Our Services" call-to-action
   - **Welcome Overview:** Introduces UAI's business mission and expertise
   - **ROI Calculator:** An interactive tool for prospective clients to calculate potential monthly and annual revenue recovery
     - Adjust the "Missed calls per week" slider (5-50 calls)
     - Adjust the "Average service value" slider ($100-$1,000)
     - View real-time calculations for estimated revenue loss and potential recovery
     - Click "Get a Custom Quote" to book a consultation
     - **Alternative:** Call the AI voice receptionist directly at (844) 996-2626

2. **Services Page (services.html)**
   - Browse three core service offerings displayed in an interactive grid layout
   - **24/7 AI Voice Receptionist:** Learn about intelligent call routing, NLP capabilities, system integration, and 24/7 availability
   - **Generative Sales Lead Workflows:** Explore automated lead generation, prospect qualification, and personalized outreach
   - **Custom Business Automations:** Discover solutions for scheduling, payroll, and backend task automation
   - Click any service card to open the consultation modal and request more information

3. **About Us Page (about.html)**
   - **Commercial Impact Section:** Understand UAI's client portfolio and industry expertise (healthcare IT, multi-location services, etc.)
   - **Founder Bio:** Learn about Demetrius McCants, CEO and Founder, and his background in DoD/AFRL technologies
   - **Professional Credentials:** Review experience in cross-domain architecture, Byzantine failures, and cryptology
   - **Direct Contact:** Phone and email for immediate outreach
   - Click the founder's profile to visit his LinkedIn profile

4. **Consultation Form Modal**
   - Accessible from any page via the "Book a Consultation" button or CTA links
   - Submit your full name, email, company name, and a description of your workflows/requirements
   - Form data is processed and forwarded for follow-up by the UAI sales team

### Key Interactive Features to Test

- **Responsive Design:** Resize your browser window or use mobile device emulation (DevTools) to verify the layout adapts gracefully
- **Dark Theme Animations:** Observe the subtle background grid animation and glowing accent effects
- **Smooth Hover Effects:** Hover over navigation links, service cards, and buttons to see transitions and visual feedback
- **Modal Interaction:** Open the consultation form modal multiple times to verify it closes and reopens correctly
- **Form Validation:** Attempt to submit the consultation form with missing fields to verify validation
- **Animated Iframes:** Confirm that logo and service animation iframes load correctly (may require internet connection)
- **Accessibility:** Use keyboard navigation (Tab) to verify all interactive elements are reachable and properly focused

---

**For questions or technical support, contact:**
- **Email:** djmccants23@gmail.com
- **Phone:** (404) 345-9984
- **AI Voice Receptionist:** (844) 996-2626
