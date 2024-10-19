---

# Profile Section with Editable Form and Image Upload

This project is a simple profile section where users can view their profile information, edit it via a form, and upload a profile picture. The design is built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap 4.5.2**. The user can edit various fields like name, email, role, availability, age, location, and years of experience, which are displayed in the profile section. A profile picture can also be uploaded.

## Features

1. **View Profile**:
   - Displays user profile details such as Name, Role, Availability, Age, Location, Years of Experience, and Email.
   - Profile picture displayed on the left side.
   
2. **Edit Profile**:
   - An `Edit` button allows users to modify their profile details.
   - Clicking the button reveals a form where users can update their information.
   - After submitting the form, the updated data is displayed in the profile section.

3. **Upload Profile Picture**:
   - Users can upload a profile picture using the "Upload Image" button.
   - The image is displayed immediately after being uploaded.

4. **Resume Button**:
   - A "Resume" button is present next to the "Edit" button, which could be linked to a user's resume in the future.

## File Structure

```plaintext
.
├── index.html           # Main HTML file for profile section layout
├── script.js            # JavaScript functionality for form handling and image upload
└── default-avatar.png    # Default profile image placeholder
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in a web browser.

## How to Use

1. **Viewing Profile**: 
   - The profile section is displayed by default, showing pre-filled profile details and a default profile picture.
   
2. **Editing Profile**: 
   - Click the "Edit" button to reveal a form where you can modify your profile information.
   - Fill in the form and click "Save" to apply changes. The updated data will appear on the profile section.

3. **Uploading Profile Picture**:
   - Click "Upload Image" to select a new profile picture.
   - The selected image will be displayed immediately as the new profile picture.

## Code Explanation

### `index.html`

- This file contains the structure and layout of the profile section.
- It uses **Bootstrap** for responsive layout and styling.
- A form appears for editing when the user clicks on the "Edit" button.
- The profile image is displayed along with other profile details, such as name, role, availability, age, and email.

### `script.js`

- Handles form submission and profile updates.
- Includes logic for displaying the profile form and updating the displayed information after the form is submitted.
- Implements the profile image upload feature.

### CSS Styling

- The profile section is wrapped in a **border** with padding and shadow for better visual separation.
- Bootstrap classes are used to ensure a responsive layout and proper styling for the form and buttons.

## Requirements

- **Web Browser**: Chrome, Firefox, Safari, or any modern web browser.
- **No additional dependencies** are required.

## Example Screenshot

![Profile Section Example](fajar.jpg)

## Future Improvements

- Add validation for profile fields (e.g., email format, age constraints).
- Link the "Resume" button to an actual PDF or online resume.
- Store profile data in **local storage** or a **backend database** for persistence.

---
