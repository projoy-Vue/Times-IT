
<template>
  <header class="header">
    <div class="header-container">
    <!-- Logo -->
    <div class="logo">
      <a href="/">
        <!-- <img src="/path-to-logo.svg" alt="Logo" /> -->
         <h2>CodeCraftStudio</h2>
      </a>
    </div>

    <!-- Navigation Menu -->
    <nav class="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search for courses..." />
      <button><i class="fas fa-search"></i></button>
    </div>

    <!-- Call-to-Action Buttons -->
    <div class="cta-buttons">
      <button class="btn login-btn">Login</button>
      <button class="btn signup-btn">Sign Up</button>
    </div>

    <!-- Hamburger Menu for Mobile -->
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
      color: white;
}
/* Header Styling */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: linear-gradient(90deg, #007bff, #0056d2);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}



/* Logo Styling */
.logo img {
  height: 50px;
}

.logo h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 900;
}

/* Navigation Menu Styling */
.navigation ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navigation ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navigation ul li a:hover {
  color: #ffdd57;
}

/* Search Bar Styling */
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  padding: 8px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.search-bar button {
  background-color: white;
  color: #007bff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.search-bar button:hover {
  transform: scale(1.1);
}

/* Call-to-Action Buttons */
.cta-buttons {
  display: flex;
  gap: 10px;
}

.cta-buttons .btn {
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-buttons .login-btn {
  background-color: white;
  color: #007bff;
  border: 1px solid white;
}

.cta-buttons .login-btn:hover {
  background-color: #0056d2;
  color: white;
}

.cta-buttons .signup-btn {
  background-color: #ffdd57;
  color: #0056d2;
  border: none;
}

.cta-buttons .signup-btn:hover {
  background-color: #ffd633;
  color: #003d99;
}

/* Hamburger Menu */
.hamburger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger-menu .line {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .navigation,
  .search-bar,
  .cta-buttons {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }

  .mobile-menu {
    position: absolute;
    top: 70px;
    right: 20px;
    background: #007bff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .mobile-menu ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;
  }

  .mobile-menu ul li a:hover {
    color: #ffdd57;
  }
}
</style>
