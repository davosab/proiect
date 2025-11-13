<template>
  <div class="add-listing-container">
    <div class="header">
      <h1 class="title">Edit Listing</h1>
      <div class="header-line"></div>
    </div>

    <div class="content">
      <form class="listing-form">
        <!-- Title Section -->
        <div class="form-section">
          <label class="form-label">Title</label>
          <input type="text" class="form-input" placeholder="Enter listing title" />
        </div>

        <!-- Images Section -->
        <div class="form-section">
          <label class="form-label">Images</label>
          <div class="image-grid">
            <div class="image-slot upload-slot">
              <span class="upload-text">Upload Images</span>
              <input ref="imageInput" type="file" multiple accept="image/*" style="display: none;" />
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Details Section -->
    <div class="form-section">
      <label class="form-label">Details</label>
      <div class="details-grid">
        <input type="text" placeholder="Kilometers" class="detail-input" />
        <input type="text" placeholder="Fuel" class="detail-input" />
        <input type="text" placeholder="Gearbox" class="detail-input" />
        <input type="text" placeholder="Chassis" class="detail-input" />
        <input type="text" placeholder="Engine Size" class="detail-input" />
        <input type="text" placeholder="Horsepower" class="detail-input" />
      </div>
    </div>

    <!-- Description Section -->
    <div class="form-section">
      <label class="form-label">Description</label>
      <textarea class="description-textarea" rows="6" placeholder="Enter detailed description..."></textarea>
    </div>



    <!-- Contact Details Section -->
    <div class="form-section">
      <label class="form-label">Contact details</label>
      <div class="contact-grid">
        <input type="text" placeholder="Name" class="contact-input" />
        <input type="tel" placeholder="Number" class="contact-input" />
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="button-group">
      <button type="button" class="btn btn-cancel">
        Cancel
      </button>
      <button type="submit" class="btn btn-publish">
        Publish
      </button>
    </div>
  </div>
</template>

<style scoped>
.add-listing-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
  position: relative;
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.header-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, #4a90e2, #357abd);
}

.content {
  padding: 30px;
}

.listing-form {
  background: white;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 30px;
}

.form-section {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
  box-sizing: border-box;
}

.dropdown-container {
  position: relative;
}

.dropdown-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.dropdown-arrow {
  font-size: 18px;
  color: #999;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown-item {
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.image-slot {
  aspect-ratio: 1;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.upload-slot {
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.upload-slot:hover {
  background-color: #e0e0e0;
}

.upload-text {
  font-size: 12px;
  color: #666;
  text-align: center;
}

.empty-slot {
  background-color: #f8f8f8;
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-image-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.detail-input {
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
}

.description-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.contact-input {
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
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

.btn-publish {
  background-color: #666;
  color: white;
}

.btn-publish:hover {
  background-color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content {
    padding: 15px;
  }

  .listing-form {
    padding: 20px;
  }

  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .details-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .button-group {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>