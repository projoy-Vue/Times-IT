# IT Academy Website

Welcome to the **IT Academy Website** project! This website is designed for an online IT learning platform offering various technology courses, training programs, and resources for students. It features smooth navigation, responsive design, and a clear course structure, providing an engaging user experience.

## Features

- **Responsive Design**: Fully responsive layout, ensuring compatibility with desktop, tablet, and mobile devices.
- **Course Catalog**: A comprehensive catalog of courses with detailed information on each course.
- **Course Enrollment**: Users can view, enroll in, and track their course progress.
- **User Profiles**: Personalized user profiles that allow users to manage their enrolled courses, progress, and settings.
- **Key Metrics**: Course statistics such as number of students enrolled, average rating, and completion time.
- **Smooth Transitions**: Enhanced page transitions and smooth scrolling for an interactive experience.

## Technologies Used

- **Frontend**:
  - **Vue.js**: Core framework for building the user interface.
  - **Vue Router**: For page navigation and handling routes.
  - **Vuex**: State management to handle global data (like courses and user info).
  - **HTML5, CSS3, SCSS**: For structure and styling the website.
  - **JavaScript**: For dynamic functionality and interactions.
  
- **Design**:
  - Custom design featuring a modern and clean user interface.
  - Responsive layout using Flexbox and Grid for adaptable views.
  - Smooth scrolling and page transition animations for an immersive experience.

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/projoy-Vue/Times-IT.git
cd IT

```
2. Install Dependencies
Ensure you have Node.js and npm installed. Install the required dependencies with the following command:

bash
Copy code
npm install
3. Run the Project
Start the development server to run the project locally.

bash
Copy code
npm run serve
The website should now be available at http://localhost:8080.

Project Structure
php
Copy code
.
├── public/                  # Public assets like images, fonts, etc.
│   ├── index.html           # HTML template
│   └── ...
├── src/                     # Source files
│   ├── assets/              # Images, fonts, styles
│   ├── components/          # Reusable components (Header, Footer, etc.)
│   ├── views/               # Pages (Home, CourseDetails, Profile, etc.)
│   ├── store/               # Vuex store for global state management
│   ├── router/              # Vue Router for page routing
│   ├── App.vue              # Main App component
│   └── main.js              # Vue app entry point
├── .gitignore               # Git ignore file
├── package.json             # Project metadata and dependencies
└── README.md                # This file
```
Key Pages and Components
Home Page: Overview of the academy, featured courses, and key statistics.
Course Details Page: Detailed view of each course including features, curriculum, and enrollment options.
User Profile Page: Users can manage their profile, view enrolled courses, and track their progress.
Footer: Includes contact information, social links, and policy information.
Vuex Store Structure
We use Vuex to manage the global state. Here are the key modules:

auth Module
Handles user authentication, including login, sign-up, and user session management.

courses Module
Manages course data, including course listing, selected course details, and enrollment status.

profile Module
Stores user profile data, including user-specific information and course progress.

Styling and Layout
SCSS: A modular approach to styling with separate files for components and global styles.
Responsive Design: The layout uses Flexbox and Grid for a flexible, responsive design.
Animations: Smooth page transitions and interactive scroll effects for a better user experience.
Smooth Scroll Implementation
The website includes a smooth scrolling feature for anchor links, making navigation between sections seamless.

Example of Smooth Scroll:
javascript
`
mounted() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', this.scrollToSection);
  });
},

methods: {
  scrollToSection(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  },
}

Contributing
We welcome contributions to this project! If you want to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or fix.
Make your changes and ensure that tests pass.
Submit a pull request with a description of your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for checking out the IT Academy Website project! We hope you enjoy using and contributing to it. If you have any questions or need help, feel free to reach out to the team.
