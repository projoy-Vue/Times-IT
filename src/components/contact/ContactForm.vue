<template>
    <section class="contact-form">
      <div class="container">
        <h2 class="section-title">Send Us a Message</h2>
        <p class="section-subtitle">
          Have questions? Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <form @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
    data() {
      return {
        form: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission (e.g., send data to API)
        alert("Your message has been sent!");
        // Clear the form fields
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Contact Form Styles */
  .contact-form {
    background-color: #fff;
    padding: 4rem 1rem;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
  }
  
  input:focus,
  textarea:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  textarea {
    resize: vertical;
  }
  
  .btn-submit {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .section-subtitle {
      font-size: 1rem;
    }
  }
  </style>
  