<script setup></script>

<template>
  <div class="tabs">
    <RouterLink to="my-listings" class="tab-button">Listings</RouterLink>
    <RouterLink to="messages" class="tab-button">Messages</RouterLink>
    <RouterLink to="profile" class="tab-button">Profile</RouterLink>
    <RouterLink to="/saved" class="tab-button">Saved Listings</RouterLink>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  background-color: #e0e0e0;
  border-bottom: 1px solid #ccc;
}

.tab-button {
  padding: 15px 30px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  position: relative;
}

.tab-button:hover {
  background-color: #d0d0d0;
}

.tab-button.active {
  color: #333;
  font-weight: 500;
}

.tab-button.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #333;
}
</style>
