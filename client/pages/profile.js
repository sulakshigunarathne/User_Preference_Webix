// const profileStore = {
//     data: {
//         fullName: "****************",
//         email: "**********@gmail.com",
//         profession: "**********",
//         imageUrl: ""
//     },
    
//     // Update profile data
//     updateProfile: function(newData) {
//         for (let key in newData) {
//             if (this.data.hasOwnProperty(key)) {
//                 this.data[key] = newData[key];
//             }
//         }
//         this.updateUI();
//     },
    
//     // Reset profile data
//     resetProfile: function() {
//         this.data = {
//             fullName: "Profile deleted",
//             email: "",
//             profession: "",
//             imageUrl: ""
//         };
//         this.updateUI();
//     },
    
//     // Update UI elements with current data
//     updateUI: function() {
//         if ($$("fullNameValue")) {
//             $$("fullNameValue").setHTML(this.data.fullName);
//         }
//         if ($$("emailValue")) {
//             $$("emailValue").setHTML(this.data.email);
//         }
//         if ($$("professionValue")) {
//             $$("professionValue").setHTML(this.data.profession);
//         }
//         if ($$("profilePhotoContainer")) {
//             $$("profilePhotoContainer").setValues({ imageUrl: this.data.imageUrl });
//             $$("profilePhotoContainer").refresh();
//         }
//     }
// };

// // Global functions for profile management
// function showProfileEditPopup() {
//     $$("editProfileForm").setValues({
//         fullName: profileStore.data.fullName === "****************" ? "" : profileStore.data.fullName,
//         email: profileStore.data.email === "**********@gmail.com" ? "" : profileStore.data.email,
//         profession: profileStore.data.profession === "**********" ? "" : profileStore.data.profession
//     });
    
//     $$("profileEditPopup").show();
// }

// function saveProfileChanges() {
//     const values = $$("editProfileForm").getValues();
//     profileStore.updateProfile(values);
//     $$("profileEditPopup").hide();
// }

// function removeProfile() {
//     profileStore.resetProfile();
//     $$("profileEditPopup").hide();
// }

// function editProfilePhoto() {
//     $$("photoEditPopup").show();
// }

// function updateProfilePhoto(imageUrl) {
//     profileStore.updateProfile({ imageUrl: imageUrl });
// }

// function removeProfilePhoto() {
//     profileStore.updateProfile({ imageUrl: "" });
// }

// // Main Profile Page Component
// export const ProfilePage = {
//     id: "profile",
//     view: "layout",
//     rows: [
//         {
//             view: "template",
//             height: 50,
//             template: "<h1>Profile</h1>"
//         },
//         {
//             cols: [
//                 // Left column - Profile information and module suggestions
//                 {
//                     width: 500,
//                     rows: [
//                         // Profile photo with edit button
//                         {
//                             view: "template",
//                             id: "profilePhotoContainer",
//                             height: 150,
//                             template: function(obj) {
//                                 return `
//                                     <div class='photo-circle'>
//                                         ${obj.imageUrl ? 
//                                             `<img src='${obj.imageUrl}' class='profile-image'>` : 
//                                             `<div class='placeholder-icon'></div>`
//                                         }
//                                         <div class='photo-edit-button' onclick='window.editProfilePhoto()'>
//                                             <i class='fas fa-pencil-alt'></i>
//                                         </div>
//                                     </div>
//                                 `;
//                             },
//                             data: { imageUrl: "" }
//                         },
//                         // Profile information
//                         {
//                             view: "form",
//                             id: "profileInfo",
//                             elements: [
//                                 { view: "template", height: 30, template: "Full name" },
//                                 { 
//                                     view: "template", 
//                                     height: 40, 
//                                     id: "fullNameValue",
//                                     template: "****************"
//                                 },
//                                 { view: "template", height: 30, template: "Email" },
//                                 { 
//                                     view: "template", 
//                                     height: 40, 
//                                     id: "emailValue",
//                                     template: "**********@gmail.com"
//                                 },
//                                 { view: "template", height: 30, template: "Profession" },
//                                 { 
//                                     view: "template", 
//                                     height: 40, 
//                                     id: "professionValue",
//                                     template: "**********"
//                                 },
//                                 {
//                                     view: "button",
//                                     value: "Edit Profile",
//                                     click: function() {
//                                         window.showProfileEditPopup();
//                                     }
//                                 }
//                             ]
//                         },
//                         // Progress-Based Module Suggestions
//                         {
//                             view: "template",
//                             height: 50,
//                             template: "<h2>Progress-Based Module Suggestions</h2>"
//                         },
//                         {
//                             cols: [
//                                 {
//                                     view: "button",
//                                     value: "Non-Verbal Communication & Body Language",
//                                     width: 350,
//                                     click: function() {
//                                         // Module navigation logic here
//                                     }
//                                 },
//                                 {
//                                     view: "button",
//                                     value: ">>",
//                                     width: 50
//                                 }
//                             ],
//                             height: 50
//                         },
//                         {
//                             cols: [
//                                 {
//                                     view: "button",
//                                     value: "Crisis Management & Adaptability",
//                                     width: 350,
//                                     click: function() {
//                                         // Module navigation logic here
//                                     }
//                                 },
//                                 {
//                                     view: "button",
//                                     value: ">>",
//                                     width: 50
//                                 }
//                             ],
//                             height: 50
//                         }
//                     ]
//                 },
//                 // Right column - Soft Skill Journey
//                 {
//                     rows: [
//                         {
//                             view: "template",
//                             height: 300,
//                             template: "<div class='journey-image'></div>"
//                         },
//                         {
//                             view: "template",
//                             height: 50,
//                             template: "<h2>Soft Skill Journey</h2>"
//                         },
//                         {
//                             view: "accordion",
//                             multi: true,
//                             rows: [
//                                 {
//                                     header: "Communication",
//                                     body: {
//                                         view: "template",
//                                         height: 30,
//                                         template: "<div class='progress-container'><div class='progress-bar' style='width:75%'>75%</div></div>"
//                                     }
//                                 },
//                                 {
//                                     header: "Leadership",
//                                     body: {
//                                         view: "template",
//                                         height: 30,
//                                         template: "<div class='progress-container'><div class='progress-bar' style='width:55%'>55%</div></div>"
//                                     }
//                                 },
//                                 {
//                                     header: "Team Working",
//                                     body: {
//                                         view: "template",
//                                         height: 30,
//                                         template: "<div class='progress-container'><div class='progress-bar' style='width:90%'>90%</div></div>"
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     // Initialize when the view is shown
//     on: {
//         onViewShow: function() {
//             profileStore.updateUI();
//         }
//     }
// };

// // Initialize the popups and global functions when the module is loaded
// // This will run once when the module is imported
// (function() {
//     // Create the popups
//     webix.ui({
//         view: "popup",
//         id: "profileEditPopup",
//         width: 400,
//         position: "center",
//         body: {
//             view: "form",
//             id: "editProfileForm",
//             elements: [
//                 { view: "text", label: "Full Name", name: "fullName", required: true },
//                 { view: "text", label: "Email", name: "email", required: true },
//                 { view: "text", label: "Profession", name: "profession", required: true },
//                 {
//                     cols: [
//                         { 
//                             view: "button", 
//                             value: "Save",
//                             click: function() {
//                                 if ($$("editProfileForm").validate()) {
//                                     saveProfileChanges();
//                                 }
//                             }
//                         },
//                         { 
//                             view: "button", 
//                             value: "Cancel",
//                             click: function() {
//                                 $$("profileEditPopup").hide();
//                             }
//                         },
//                         { 
//                             view: "button", 
//                             value: "Remove Profile",
//                             click: function() {
//                                 webix.confirm({
//                                     title: "Delete Profile",
//                                     text: "Are you sure you want to delete your profile?",
//                                     callback: function(result) {
//                                         if (result) {
//                                             removeProfile();
//                                         }
//                                     }
//                                 });
//                             }
//                         }
//                     ]
//                 }
//             ]
//         }
//     });

//     webix.ui({
//         view: "popup",
//         id: "photoEditPopup",
//         width: 300,
//         position: "center",
//         body: {
//             rows: [
//                 {
//                     view: "template",
//                     template: "<h3>Profile Photo</h3>",
//                     height: 40
//                 },
//                 {
//                     view: "uploader",
//                     id: "profilePhotoUploader",
//                     value: "Upload New Photo",
//                     accept: "image/*",
//                     autosend: false,
//                     multiple: false,
//                     on: {
//                         onBeforeFileAdd: function(item) {
//                             // Preview image before uploading
//                             var reader = new FileReader();
//                             reader.onload = function(event) {
//                                 updateProfilePhoto(event.target.result);
//                                 $$("photoEditPopup").hide();
//                             };
//                             reader.readAsDataURL(item.file);
//                             return false; // Prevent actual upload for this example
//                         }
//                     }
//                 },
//                 {
//                     view: "button",
//                     value: "Remove Current Photo",
//                     click: function() {
//                         removeProfilePhoto();
//                         $$("photoEditPopup").hide();
//                     }
//                 },
//                 {
//                     view: "button",
//                     value: "Cancel",
//                     click: function() {
//                         $$("photoEditPopup").hide();
//                     }
//                 }
//             ]
//         }
//     });

//     // Make the functions available globally
//     window.showProfileEditPopup = showProfileEditPopup;
//     window.editProfilePhoto = editProfilePhoto;
//     window.saveProfileChanges = saveProfileChanges;
//     window.removeProfile = removeProfile;
//     window.updateProfilePhoto = updateProfilePhoto;
//     window.removeProfilePhoto = removeProfilePhoto;
// })();


const profileStore = {
    data: {
        fullName: "****************",
        email: "**********@gmail.com",
        profession: "",
        imageUrl: "",
        password: "" // Store password securely
    },
    
    // Update profile data
    updateProfile: function(newData) {
        for (let key in newData) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = newData[key];
            }
        }
        this.updateUI();
    },
    
    // Reset profile data
    resetProfile: function() {
        this.data = {
            fullName: "",
            email: "",
            profession: "",
            imageUrl: "",
            password: "" // Clear password on profile reset
        };
        this.updateUI();
    },
    
    // Update UI elements with current data
    updateUI: function() {
        if ($$("fullNameValue")) {
            $$("fullNameValue").setHTML(this.data.fullName);
        }
        if ($$("emailValue")) {
            $$("emailValue").setHTML(this.data.email);
        }
        if ($$("professionValue")) {
            $$("professionValue").setHTML(this.data.profession);
        }
        if ($$("profilePhotoContainer")) {
            $$("profilePhotoContainer").setValues({ imageUrl: this.data.imageUrl });
            $$("profilePhotoContainer").refresh();
        }
        },
        setProfileImage: function(imageUrl) {
            this.data.imageUrl = imageUrl;
            this.updateUI();
        }  
};

// Main Profile Page Component
export const ProfilePage = {
    id: "profile",
    view: "layout",
    rows: [
        {
            view: "template",
            height: 50,
            template: "<h1>Profile</h1>"
        },
        {
            cols: [
                {
                    
                    rows: [
                        {
                            view: "template",
                            id: "profilePhotoContainer",
                            height: 150,
                            template: function(obj) {
                                return `
                                    <div class='photo-circle' onclick='window.triggerImageUpload()'>
                                        ${obj.imageUrl ? 
                                            `<img src='${obj.imageUrl}' class='profile-image'>` : 
                                            `<div class='placeholder-icon'>Click to upload</div>` 
                                        }
                                    </div>
                                    <input type='file' id='imageUploadInput' style='display: none;' accept='image/*' onchange='window.handleImageUpload(event)' />
                                `;
                            },
                            data: { imageUrl: "" }
                        },
                        {
                            view: "form",
                            id: "profileInfo",
                            elements: [
                                { view: "template", height: 30, template: "Full name" },
                                { 
                                    view: "template", 
                                    height: 40, 
                                    id: "fullNameValue",
                                    template: "****************"
                                },
                                { view: "template", height: 30, template: "Email" },
                                { 
                                    view: "template", 
                                    height: 40, 
                                    id: "emailValue",
                                    template: "**********@gmail.com"
                                },
                                { view: "template", height: 30, template: "Profession" },
                                { 
                                    view: "template", 
                                    height: 40, 
                                    id: "professionValue",
                                    template: "**********"
                                },
                                {
                                    view: "button",
                                    value: "Edit Profile",
                                    click: function() {
                                        window.showProfileEditPopup();
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    on: {
        onViewShow: function() {
            profileStore.updateUI();
        }
    }
};
