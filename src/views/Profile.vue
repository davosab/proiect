<script setup>

</script>

<template>
  <div class="profile-container">
    <div class="header">
      <h1 class="title">My Profile</h1>
    </div>
    
    <div class="tabs">
      <RouterLink to="my-listings" class="tab-button">Listings</RouterLink>
      <button class="tab-button">Messages</button>
      <RouterLink to="profile" class="tab-button ">Profile</RouterLink>
    </div>
    
    <div class="content">
      <div class="avatar-section">
        <div class="avatar"></div>
      </div>
      
      <div class="form-container">
        <h2 class="form-title">Contact Information</h2>
        
        <form  class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="phone">Telephone Number</label>
            <input 
              type="tel" 
              id="phone" 
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="location">Location</label>
            <input 
              type="text" 
              id="location" 
              class="form-input"
            />
          </div>
          
          <div class="button-group">
            <button 
              type="button" 
              class="btn btn-cancel"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="btn btn-save"
            >
              Save
            </button>
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

.header {
  background-color: #e0e0e0;
  padding: 20px 30px;
  border-bottom: 1px solid #ccc;
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

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
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #333;
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
  
  .tabs {
    flex-direction: column;
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