<template>
    <section class="subscription-plans">
      <h2 class="section-title">Choose Your Plan</h2>
      <p class="section-description">
        Flexible subscription plans to suit your learning goals.
      </p>
      <div class="plans-container">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="plan-card"
          :class="{ highlighted: plan.isPopular }"
        >
          <h3 class="plan-title">{{ plan.name }}</h3>
          <p class="plan-price">
            <span class="currency">$</span>{{ plan.price }}
            <span class="duration">/month</span>
          </p>
          <ul class="plan-features">
            <li v-for="(feature, idx) in plan.features" :key="idx">
              {{ feature }}
            </li>
          </ul>
          <button class="subscribe-button">
            {{ plan.isPopular ? "Get Started" : "Subscribe Now" }}
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SubscriptionPlans",
    data() {
      return {
        plans: [
          {
            name: "Basic",
            price: 9.99,
            features: ["Access to all free courses", "Community Support"],
            isPopular: false,
          },
          {
            name: "Standard",
            price: 19.99,
            features: [
              "Access to all courses",
              "Priority Support",
              "Certificate of Completion",
            ],
            isPopular: true,
          },
          {
            name: "Premium",
            price: 29.99,
            features: [
              "Access to all courses",
              "1-on-1 Mentorship",
              "Exclusive Webinars",
              "Certificate of Completion",
            ],
            isPopular: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .subscription-plans {
    padding: 2rem;
    text-align: center;
    background-color: #f9f9f9;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .section-description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
  }
  .plans-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .plan-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .plan-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .plan-card.highlighted {
    border: 2px solid #007bff;
    background: #eef7ff;
  }
  .plan-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  .plan-price {
    font-size: 2rem;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 1rem;
  }
  .plan-price .currency {
    font-size: 1.2rem;
  }
  .plan-price .duration {
    font-size: 1rem;
    color: #555;
  }
  .plan-features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  .plan-features li {
    font-size: 1rem;
    color: #555;
    margin: 0.5rem 0;
  }
  .subscribe-button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .subscribe-button:hover {
    background: #0056b3;
  }
  @media (max-width: 768px) {
    .plans-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  