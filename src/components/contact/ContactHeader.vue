<template>
    <header class="contact-header">
      <div class="container">
        <h1 class="title">Contact Us</h1>
        <p class="subtitle">
          We're here to help and answer any questions you might have. 
          We look forward to hearing from you.
        </p>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "ContactHeader",
  };
  </script>
  
  <style scoped>
  /* Contact Header Styles */
  .contact-header {
    margin-top: 60px;
    background: linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url("https://picsum.photos/536/354") center/cover no-repeat;
    color: #fff;
    text-align: center;
    padding: 5rem 1rem;
  }
  
  .contact-header .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .contact-header .title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .contact-header .subtitle {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    .contact-header {
      padding: 3rem 1rem;
    }
  
    .contact-header .title {
      font-size: 2.5rem;
    }
  
    .contact-header .subtitle {
      font-size: 1rem;
    }
  }
  </style>
  