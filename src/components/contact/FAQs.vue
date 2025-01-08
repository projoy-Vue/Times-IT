<template>
    <section class="faqs-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Find answers to the most common questions about our academy and courses.</p>
        <div class="faqs">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq"
            :class="{ active: activeIndex === index }"
          >
            <div class="faq-question" @click="toggleFAQ(index)">
              <h3>{{ faq.question }}</h3>
              <span class="icon" v-html="activeIndex === index ? '-' : '+'"></span>
            </div>
            <div class="faq-answer" v-if="activeIndex === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FAQs",
    data() {
      return {
        activeIndex: null,
        faqs: [
          {
            question: "What is the Academy's mission?",
            answer:
              "Our mission is to provide high-quality education and skills training to help students achieve their professional goals.",
          },
          {
            question: "Are all courses offered offline?",
            answer:
              "Yes, all our courses are conducted offline at our state-of-the-art campus to provide hands-on learning experiences.",
          },
          {
            question: "How can I enroll in a course?",
            answer:
              "You can enroll by visiting our campus or contacting us through our website’s contact form or email.",
          },
          {
            question: "What types of courses do you offer?",
            answer:
              "We offer a variety of courses including programming, graphic design, cybersecurity, data science, and more.",
          },
          {
            question: "What is the refund policy for courses?",
            answer:
              "Refunds are available up to 7 days after the start of the course, provided you have a valid reason and supporting documents.",
          },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* FAQs Section Styles */
  .faqs-section {
    padding: 4rem 1rem;
    background-color: #f9f9f9;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .faqs {
    text-align: left;
  }
  
  .faq {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
    transition: box-shadow 0.3s ease;
  }
  
  .faq.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ddd;
  }
  
  .faq-question h3 {
    margin: 0;
    color: #333;
  }
  
  .faq-question .icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
    transition: transform 0.3s ease;
  }
  
  .faq-answer {
    padding: 1rem;
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
  
  .faq-answer p {
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
  
    .section-subtitle {
      font-size: 1rem;
    }
  
    .faq-question {
      font-size: 1rem;
    }
  
    .faq-answer {
      font-size: 0.9rem;
    }
  }
  </style>
  