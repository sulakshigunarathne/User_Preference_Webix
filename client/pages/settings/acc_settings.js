export const AccSettings = {
    id: "acc_settings",
    rows: [
        { 
            template: "<h2>Account Settings</h2>",
            autoheight: true,
            css: "settings-title"
        },

        // Profile Picture Section
        {
            template: `
                <div class="profile-picture-container">
                    <div class="profile-picture">
                        <img id="profile-img" src="https://via.placeholder.com/150" alt="Profile Picture">
                        <div class="edit-overlay">
                            <button id="edit-btn">
                                <i class="fas fa-pencil-alt"></i> Edit
                            </button>
                            <div class="dropdown-menu">
                                <input type="file" id="file-upload" accept="image/*" hidden>
                                <button onclick="uploadPhoto()">Upload a photo...</button>
                                <button onclick="removePhoto()">Remove photo</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            autoheight: true,
            css: "profile-picture-section"
        },

        // Profile Information
        { view: "form", id: "profileForm", elements: [
            { view: "text", label: "Full Name", name: "full_name", placeholder: "Enter your name" },
            { view: "text", label: "Email", name: "email", placeholder: "Enter your email", disabled: true },
            { view: "text", label: "Phone Number", name: "phone", placeholder: "Enter your phone number" },
            { 
                cols: [
                    { view: "button", value: "Save Changes", css: "save-button", click: function() {
                        webix.message("Profile updated!");
                    }},
                ]
            }
        ]},

        // Personal Information Section
        {
            template: "<h3>Personal Information</h3>",
            autoheight: true,
            css: "settings-subtitle"
        },
        { view: "form", id: "personalInfoForm", elements: [
            { 
                view: "segmented", 
                label: "Gender", 
                name: "gender", 
                options: [
                    { id: "male", value: "Male" },
                    { id: "female", value: "Female" },
                    { id: "other", value: "Other" }
                ] 
            },
            { 
                view: "datepicker", 
                label: "Birthday", 
                name: "birthday", 
                format: "%Y-%m-%d",
                icon: "wxi-calendar" // Calendar icon for better UI
            },
            { 
                view: "segmented", 
                label: "Marital Status", 
                name: "marital_status", 
                options: [
                    { id: "single", value: "Single" },
                    { id: "married", value: "Married" },
                    { id: "other", value: "Other" }
                ]
            },
            { 
                cols: [
                    { view: "button", value: "Save Changes", css: "save-button", click: function() {
                        webix.message("Personal information updated!");
                    }},
                ]
            }
        ]},

        // Change Password Section
        { template: "<h3>Change Password</h3>", autoheight: true, css: "settings-subtitle" },
        { view: "form", id: "passwordForm", elements: [
            { view: "text", type: "password", label: "Current Password", name: "current_password" },
            { view: "text", type: "password", label: "New Password", name: "new_password" },
            { view: "text", type: "password", label: "Confirm Password", name: "confirm_password" },
            { 
                cols: [
                    { view: "button", value: "Update Password", css: "update-button", click: function() {
                        webix.message("Password updated!");
                    }},
                ]
            }
        ]}
    ]
};

// JavaScript Functions for Profile Picture Actions
window.uploadPhoto = function () {
    document.getElementById("file-upload").click();
    document.getElementById("file-upload").onchange = function (event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profile-img").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
};

window.removePhoto = function () {
    document.getElementById("profile-img").src = "https://via.placeholder.com/150";
};
