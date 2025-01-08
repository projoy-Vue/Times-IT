<template>
    <section class="resources-download">
      <!-- Heading -->
      <h2 class="section-title">Download Resources</h2>
  
      <!-- Search Bar -->
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search for resources..."
          v-model="searchQuery"
          @input="filterResources"
        />
      </div>
  
      <!-- Filters -->
      <div class="filters">
        <button
          v-for="type in resourceTypes"
          :key="type"
          :class="{ active: selectedType === type }"
          @click="filterByType(type)"
        >
          {{ type }}
        </button>
      </div>
  
      <!-- Resource Cards -->
      <div class="resource-grid">
        <div
          v-for="resource in filteredResources"
          :key="resource.id"
          class="resource-card"
        >
          <div class="card-header">
            <h3>{{ resource.title }}</h3>
            <span class="file-type">{{ resource.type }}</span>
          </div>
          <p class="description">{{ resource.description }}</p>
          <a
            :href="resource.downloadLink"
            target="_blank"
            class="download-btn"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    data() {
      return {
        searchQuery: "",
      };
    },
    computed: {
      ...mapGetters("resources", [
        "filteredResources",
        "resourceTypes",
        "selectedType",
      ]),
    },
    methods: {
      ...mapActions("resources", ["filterResources", "filterByType"]),
    },
    created() {
      this.filterResources(""); // Initialize with all resources
    },
  };
  </script>
  
  <style scoped>
  .resources-download {
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .search-bar input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .filters {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .filters button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #ddd;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .filters button.active {
    background-color: #007bff;
    color: white;
  }
  
  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .resource-card {
    padding: 1rem;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-header h3 {
    font-size: 1.25rem;
  }
  
  .file-type {
    font-size: 0.9rem;
    color: #777;
  }
  
  .description {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #555;
  }
  
  .download-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
  }
  
  .download-btn:hover {
    background-color: #0056b3;
  }
  </style>
  