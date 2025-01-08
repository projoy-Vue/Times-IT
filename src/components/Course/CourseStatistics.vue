<template>
    <section class="course-statistics">
      <h2 class="title">Course Statistics</h2>
  
      <div v-if="loading" class="loading">
        <span class="loader"></span> Loading statistics...
      </div>
  
      <div v-else class="stats-grid">
        <div class="stat-card" v-for="(value, title) in stats" :key="title">
          <div class="stat-icon">
            <i :class="getIconClass(title)"></i>
          </div>
          <h3 class="stat-title">{{ title }}</h3>
          <p class="stat-value" :style="getStatStyle(title)">
            {{ title === 'Average Rating' ? value + ' / 5' : value }}
          </p>
          <div v-if="title === 'Average Rating'" class="progress-bar">
            <div :style="{ width: (value / 5) * 100 + '%' }"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        stats: {
          "Students Enrolled": 0,
          "Average Rating": 0,
          "Average Completion Time": '0 hours',
        },
      };
    },
    mounted() {
      // Simulate fetching statistics from an API
      setTimeout(() => {
        this.loading = false;
        this.stats = {
          "Students Enrolled": 100,
          "Average Rating": 4.5,
          "Average Completion Time": '2 hours',
        };
      }, 2000);
    },
    methods: {
      getIconClass(statName) {
        switch (statName) {
          case "Students Enrolled":
            return "fa fa-users";
          case "Average Rating":
            return "fa fa-star";
          case "Average Completion Time":
            return "fa fa-clock";
          default:
            return "fa fa-info-circle";
        }
      },
      getStatStyle(statName) {
        if (statName === "Average Rating") {
          return { color: this.stats["Average Rating"] >= 4 ? '#4caf50' : '#ff9800' };
        }
        return {};
      },
    },
  };
  </script>
  
  <style scoped>
  .course-statistics {
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
  
  .title {
    font-size: 1.8rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .stats-grid {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .stat-card {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 30%;
    min-width: 250px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .stat-card:hover {
    transform: scale(1.05);
  }
  
  .stat-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .stat-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 5px;
    height: 10px;
    width: 100%;
    overflow: hidden;
  }
  
  .progress-bar > div {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.5s ease;
  }
  
  .loading {
    font-size: 1rem;
    color: #888;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    .stats-grid {
      flex-direction: column;
      align-items: center;
    }
  
    .stat-card {
      width: 80%;
      margin-bottom: 20px;
    }
  }
  </style>
  
  