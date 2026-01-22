<script setup>
import Header from "@/components/Header.vue"
import MenuTabs from "@/components/MenuTabs.vue"
import { draftFirstName, draftLastName, updateUserInfo } from "@/userProfile"
</script>

<template>
  <div class="profile-container">
    <Header title="My Profile" />
    <MenuTabs />

    <div class="content">
      <div class="avatar-section">
        <div class="avatar"></div>
      </div>

      <div class="form-container">
        <h2 class="form-title">Contact Information</h2>

        <form class="contact-form" @submit.prevent="updateUserInfo">
          <div class="form-group">
            <label for="fname">First Name</label>
            <input v-model="draftFirstName" type="text" id="fname" class="form-input" />
          </div>

          <div class="form-group">
            <label for="lname">Last name</label>
            <input v-model="draftLastName" type="text" id="lname" class="form-input" />
          </div>

          <div class="form-group">
            <label for="phone">Telephone Number</label>
            <input type="tel" id="phone" class="form-input" />
          </div>

          <div class="form-group">
            <label for="location">Location</label>
            <input type="text" id="location" class="form-input" />
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-cancel">Cancel</button>
            <button type="submit" class="btn btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.avatar-section {
  display: flex;
  justify-content: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #999;
}

.form-container {
  width: 100%;
  max-width: 600px;
  background: white;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 30px;
}

.form-title {
  margin: 0 0 30px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

.form-input {
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #666;
  background-color: white;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-cancel {
  background-color: #999;
  color: white;
}

.btn-cancel:hover {
  background-color: #777;
}

.btn-save {
  background-color: #666;
  color: white;
}

.btn-save:hover {
  background-color: #555;
}

/* Responsive design */
@media (max-width: 768px) {
  .content {
    padding: 20px;
  }

  .form-container {
    padding: 20px;
  }

  .tab-button {
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .tab-button.active::after {
    display: none;
  }
}
</style>
