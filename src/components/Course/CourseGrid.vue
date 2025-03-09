<template>
  <section class="course-grid">
    <!-- Filter Section -->
    <div class="filters">
      <div class="filter-group">
        <label for="category">Category:</label>
        <select id="category" v-model="selectedCategory" @change="filterByCategory">
          <option value="All">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label for="sort">Sort By:</label>
        <select id="sort" v-model="selectedSort" @change="sortCourses">
          <option value="title">Title</option>
          <option value="fee">Fee</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="sortOrder">Order:</label>
        <select id="sortOrder" v-model="sortOrder" @change="sortCourses">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>

    <!-- Courses Grid -->
    <transition-group name="fade" tag="div" class="courses">

      <div v-for="course in paginatedCourses" :key="course.id" class="course-card">
        <lazy-image v-lazy="`/images/${course.image}`" :alt="course.title" class="course-image" />
        <div class="course-content">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <p class="course-meta">
            <span><strong>Duration:</strong> {{ course.duration }}</span>
            <span><strong>Fee:</strong> ${{ course.fee }}</span>
          </p>
          <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }" class="btn-view-details">
            View Details
          </router-link>
        </div>
      </div>
    </transition-group>

    <!-- Pagination Section -->
    <div class="pagination">
      <button class="btn-pagination" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="btn-pagination" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </section>
</template>


<script>

  import { mapGetters, mapActions } from "vuex";

  export default {
    data() {
      return {
        selectedCategory: "All",
        selectedSort: "title",
        sortOrder: "asc"
      };
    },
    computed: {
      ...mapGetters("courses", ["categories", "paginatedCourses", "totalPages"]),
      currentPage() {
        return this.$store.state.courses.filters.currentPage;
      }
    },
    methods: {
      ...mapActions("courses", ["updateCategory", "updateSort", "updatePage"]),
      filterByCategory() {
        this.updateCategory(this.selectedCategory);
      },
      sortCourses() {
        this.updateSort({
          sort: this.selectedSort,
          sortOrder: this.sortOrder
        });
      },
      prevPage() {
        this.updatePage(this.currentPage - 1);
      },
      nextPage() {
        this.updatePage(this.currentPage + 1);
      },
      viewCourseDetails(id) {
        this.$router.push(`/courses/${id}`);
      }
    }
  };
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.course-grid {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.filter-group select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #59acd3;
  border-radius: 4px;
}

.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.course-content {
  padding: 1rem;
}

.course-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.course-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
}

.course-meta {
  font-size: 0.85rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.btn-view-details {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-view-details:hover {
  background-color: #0056b3;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-pagination {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-pagination:hover {
  background-color: #0056b3;
}

.btn-pagination:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
