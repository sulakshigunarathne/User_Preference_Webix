// export const AccSettings = {
//     id: "acc_settings2",
//     responsive: true,
//     type: "clean",
//     rows: [
//         // Header with mobile toggle menu
//         {
//             height: 60,
//             cols: [
//                 {
//                     template: "<h2 class='section_header'>Account Settings</h2>",
//                     css: "header_section"
//                 },
//                 {
//                     view: "icon", 
//                     icon: "wxi-menu",
//                     id: "mobile_menu_toggle",
//                     hidden: true, // Hidden by default, shown only on mobile
//                     click: function() {
//                         const sideMenu = $$("settings_side_menu");
//                         if (sideMenu.isVisible())
//                             sideMenu.hide();
//                         else
//                             sideMenu.show();
//                     }
//                 }
//             ]
//         },

//         // Main content with side menu and settings sections
//         {
//             cols: [
//                 // Side Menu - will be hidden on mobile by default
//                 {
//                     id: "settings_side_menu",
//                     view: "list",
//                     width: 200,
//                     css: "settings_menu",
//                     select: true,
//                     data: [
//                         { id: "profile", value: "Profile" },
//                         { id: "personal", value: "Personal Details" },
//                         { id: "password", value: "Change Password" }
//                     ],
//                     on: {
//                         onAfterSelect: function(id) {
//                             // Scroll to the selected section
//                             const contentView = $$("settings_content");
//                             const item = $$(id + "Section");
//                             if (item && contentView) {
//                                 contentView.scrollTo(0, item.$view.offsetTop - 60);
//                             }
                            
//                             // Hide menu on mobile after selection
//                             if (window.innerWidth <= 768) {
//                                 $$("settings_side_menu").hide();
//                             }
//                         }
//                     }
//                 },

//                 // Main Content Container
//                 {
//                     view: "scrollview",
//                     id: "settings_content",
//                     scroll: "y",
//                     body: {
//                         id: "settings_forms_container",
//                         type: "clean",
//                         rows: [
//                             // Profile Section
//                             {
//                                 id: "profileSection",
//                                 view: "form",
//                                 css: "card_section",
//                                 padding: 20,
//                                 elements: [
//                                     {
//                                         view: "template",
//                                         template: "<h3 class='section_subheader'>Profile Information</h3>",
//                                         height: 40,
//                                         css: "subheader"
//                                     },
//                                     {
//                                         responsive: "profile_layout",
//                                         cols: [
//                                             // Profile Picture Column
//                                             {
//                                                 id: "profile_pic_col",
//                                                 gravity: 0.3,
//                                                 minWidth: 200,
//                                                 maxWidth: 300,
//                                                 rows: [
//                                                     {
//                                                         id: "profile_image_container",
//                                                         template: function() {
//                                                             let savedImage = localStorage.getItem("profile_image");
//                                                             let imageUrl = savedImage ? savedImage : "https://dummyimage.com/150"; // Load saved image or default one
//                                                             return `<div style="text-align:center;">
//                                                                 <img id="profile-img" src="${imageUrl}" 
//                                                                 style="width:120px; height:120px; border-radius:50%; border:2px solid #ccc; object-fit:cover;">
//                                                             </div>`;
//                                                                 },
//                                                     height: 140
//                                                     },
//                                                     {
//                                                         cols: [
//                                                             {
//                                                                 view: "uploader",
//                                                                 id: "profile_uploader",
//                                                                 value: "Upload Photo",
//                                                                 accept: "image/*",
//                                                                 multiple: false,
//                                                                 autosend: false,
//                                                                 css: "webix_primary",
//                                                                 on: {
//                                                                     onBeforeFileAdd: function(file) {
//                                                                         const reader = new FileReader();
//                                                                         reader.onload = function(e) {
//                                                                             const imageData = e.target.result;
//                                                                             const img = document.getElementById("profile-img");
//                                                                             if (img) {
//                                                                                 img.src = imageData;
//                                                                                 $$("profile_image_container").refresh();
                                                                                
//                                                                                 // Store image data in localStorage
//                                                                                 localStorage.setItem("profile_image", imageData);
//                                                                             }
//                                                                         };
//                                                                         reader.readAsDataURL(file.file);
//                                                                         return false;
//                                                                     }
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     {
//                                                         cols: [
//                                                             {
//                                                                 view: "button",
//                                                                 value: "Remove",
//                                                                 css: "webix_danger",
//                                                                 click: function() {
//                                                                     const img = document.getElementById("profile-img");
//                                                                     if (img) {
//                                                                         img.src = "https://dummyimage.com/150";
//                                                                         $$("profile_image_container").refresh();
//                                                                         localStorage.removeItem("profile_image");
//                                                                     }
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 ]
//                                             },
//                                             // Profile Form Column
//                                             {
//                                                 gravity: 0.7,
//                                                 rows: [
//                                                     { 
//                                                         template: "<div class='form_label'>Full Name</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         name: "full_name", 
//                                                         placeholder: "Enter your name", 
//                                                         required: true,
//                                                         height: 40,
//                                                         bottomPadding: 15,
//                                                         value: localStorage.getItem("profile_full_name") || ""
//                                                     },
                                                    
//                                                     { 
//                                                         template: "<div class='form_label'>Email</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         name: "email", 
//                                                         placeholder: "Enter your email", 
//                                                         disabled: true,
//                                                         height: 40,
//                                                         bottomPadding: 15,
//                                                         value: localStorage.getItem("profile_email") || "user@example.com"
//                                                     },
                                                    
//                                                     { 
//                                                         template: "<div class='form_label'>Phone Number</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         name: "phone", 
//                                                         placeholder: "Enter your phone number", 
//                                                         required: true,
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         padding: { top: 10 },
//                                         cols: [
//                                             {},
//                                             { 
//                                                 view: "button", 
//                                                 value: "Save Profile", 
//                                                 css: "webix_primary", 
//                                                 width: 150,
//                                                 click: function() {
//                                                     if (!$$("profileSection").validate()) {
//                                                         webix.message({ type: "error", text: "Please fill in all required fields." });
//                                                         return;
//                                                     }
                                                    
//                                                     // Save profile data
//                                                     saveProfileData("profile", $$("profileSection").getValues());
//                                                     webix.message("Profile updated!");
//                                                 }
//                                             }
//                                         ]
//                                     }
//                                 ],
//                                 rules: {
//                                     full_name: webix.rules.isNotEmpty,
//                                     phone: function(value) { return /^[0-9]{10}$/.test(value); }
//                                 }
//                             },

//                             // Personal Details Section
//                             {
//                                 id: "personalSection",
//                                 view: "form",
//                                 css: "card_section",
//                                 padding: 20,
//                                 elements: [
//                                     {
//                                         view: "template",
//                                         template: "<h3 class='section_subheader'>Personal Details</h3>",
//                                         height: 40,
//                                         css: "subheader"
//                                     },
//                                     {
//                                         responsive: "personal_details_layout",
//                                         cols: [
//                                             // Column 1
//                                             {
//                                                 gravity: 1,
//                                                 minWidth: 250,
//                                                 rows: [
//                                                     {
//                                                         template: "<div class='form_label'>Address</div>", 
//                                                         height: 30,
//                                                         css: "label_above"
//                                                     },
//                                                     {
//                                                         view: "textarea",
//                                                         name: "address",
//                                                         placeholder: "Enter your full address",
//                                                         height: 80,
//                                                         bottomPadding: 15
//                                                     },
                                                    
//                                                     {
//                                                         template: "<div class='form_label'>Marital Status</div>", 
//                                                         height: 30,
//                                                         css: "label_above"
//                                                     },
//                                                     {
//                                                         view: "richselect",
//                                                         name: "marital_status",
//                                                         placeholder: "Select your marital status",
//                                                         options: [
//                                                             { id: "single", value: "Single" },
//                                                             { id: "married", value: "Married" },
//                                                             { id: "divorced", value: "Divorced" },
//                                                             { id: "widowed", value: "Widowed" },
//                                                             { id: "other", value: "Other" }
//                                                         ],
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             },
//                                             // Column 2
//                                             {
//                                                 gravity: 1,
//                                                 minWidth: 250,
//                                                 rows: [
//                                                     {
//                                                         template: "<div class='form_label'>Gender</div>", 
//                                                         height: 30,
//                                                         css: "label_above"
//                                                     },
//                                                     {
//                                                         view: "radio",
//                                                         name: "gender",
//                                                         options: [
//                                                             { id: "male", value: "Male" },
//                                                             { id: "female", value: "Female" },
//                                                             { id: "other", value: "Other" }
//                                                         ],
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     },
                                                    
//                                                     {
//                                                         template: "<div class='form_label'>Date of Birth</div>", 
//                                                         height: 30,
//                                                         css: "label_above"
//                                                     },
//                                                     {
//                                                         view: "datepicker",
//                                                         name: "date_of_birth",
//                                                         format: "%d/%m/%Y",
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     },
                                                    
//                                                     {
//                                                         template: "<div class='form_label'>Occupation</div>", 
//                                                         height: 30,
//                                                         css: "label_above"
//                                                     },
//                                                     {
//                                                         view: "text",
//                                                         name: "occupation",
//                                                         placeholder: "Enter your occupation",
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         padding: { top: 10 },
//                                         cols: [
//                                             {},
//                                             { 
//                                                 view: "button", 
//                                                 value: "Save Personal Details", 
//                                                 css: "webix_primary", 
//                                                 width: 180,
//                                                 click: function() {
//                                                     let form = $$("personalSection");
//                                                     if (!form.validate()) {
//                                                         webix.message({ type: "error", text: "Please check your personal details." });
//                                                         return;
//                                                     }
                                                    
//                                                     // Save personal details
//                                                     saveProfileData("personal", form.getValues());
//                                                     webix.message("Personal details saved successfully!");
//                                                 }
//                                             }
//                                         ]
//                                     }
//                                 ]
//                             },

//                             // Password Section
//                             {
//                                 id: "passwordSection",
//                                 view: "form", 
//                                 css: "card_section",
//                                 padding: 20,
//                                 elements: [
//                                     {
//                                         view: "template",
//                                         template: "<h3 class='section_subheader'>Change Password</h3>",
//                                         height: 40,
//                                         css: "subheader"
//                                     },
//                                     {
//                                         responsive: "password_layout",
//                                         cols: [
//                                             // Column 1
//                                             {
//                                                 gravity: 1,
//                                                 minWidth: 250,
//                                                 rows: [
//                                                     { 
//                                                         template: "<div class='form_label'>Current Password</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         type: "password", 
//                                                         name: "current_password", 
//                                                         required: true,
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             },
//                                             // Column 2
//                                             {
//                                                 gravity: 1,
//                                                 minWidth: 250,
//                                                 rows: [
//                                                     { 
//                                                         template: "<div class='form_label'>New Password</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         type: "password", 
//                                                         name: "new_password", 
//                                                         required: true,
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             },
//                                             // Column 3
//                                             {
//                                                 gravity: 1,
//                                                 minWidth: 250,
//                                                 rows: [
//                                                     { 
//                                                         template: "<div class='form_label'>Confirm Password</div>", 
//                                                         height: 30,
//                                                         css: "label_above" 
//                                                     },
//                                                     { 
//                                                         view: "text", 
//                                                         type: "password", 
//                                                         name: "confirm_password", 
//                                                         required: true,
//                                                         height: 40,
//                                                         bottomPadding: 15
//                                                     }
//                                                 ]
//                                             }
//                                         ]
//                                     },
//                                     {
//                                         padding: { top: 10 },
//                                         cols: [
//                                             {},
//                                             { 
//                                                 view: "button", 
//                                                 value: "Update Password", 
//                                                 css: "webix_primary", 
//                                                 width: 150,
//                                                 click: function() {
//                                                     let form = $$("passwordSection");
//                                                     let values = form.getValues();

//                                                     if (!form.validate()) {
//                                                         webix.message({ type: "error", text: "Please fill in all password fields." });
//                                                         return;
//                                                     }

//                                                     if (values.new_password !== values.confirm_password) {
//                                                         webix.message({ type: "error", text: "Passwords do not match!" });
//                                                         return;
//                                                     }

//                                                     webix.message("Password updated successfully!");
//                                                     form.clear();
//                                                 }
//                                             }
//                                         ]
//                                     }
//                                 ],
//                                 rules: {
//                                     current_password: webix.rules.isNotEmpty,
//                                     new_password: function(value) { return value.length >= 6; },
//                                     confirm_password: webix.rules.isNotEmpty
//                                 }
//                             },
                            
//                             // Save All Changes Button
//                             {
//                                 padding: { top: 20, bottom: 20 },
//                                 cols: [
//                                     {},
//                                     {
//                                         view: "button",
//                                         value: "Save All Changes",
//                                         css: "webix_primary webix_large",
//                                         width: 200,
//                                         height: 50,
//                                         click: function() {
//                                             // Validate all forms
//                                             const profileValid = $$("profileSection").validate();
//                                             const personalValid = $$("personalSection").validate();
                                            
//                                             if (!profileValid || !personalValid) {
//                                                 webix.message({ type: "error", text: "Please check all required fields." });
//                                                 return;
//                                             }
                                            
//                                             // Save all profile data
//                                             saveProfileData("profile", $$("profileSection").getValues());
//                                             saveProfileData("personal", $$("personalSection").getValues());
                                            
//                                             webix.message({
//                                                 type: "success",
//                                                 text: "All changes saved successfully!",
//                                                 expire: 3000,
//                                                 callback: function() {
//                                                     // Navigate to profile view
//                                                     navigateToProfileView();
//                                                 }
//                                             });
//                                         }
//                                     },
//                                     {}
//                                 ]
//                             }
//                         ]
//                     }
//                 }
//             ]
//         }
//     ],
    
//     // Responsive breakpoints configuration
//     responsive_config: {
//         profile_layout: {
//             small: { cols: ["#0"] }, // Just stack the profile image and form fields
//             medium: { cols: ["#0", "#1"] } // Side by side on larger screens
//         },
//         personal_details_layout: {
//             small: { cols: ["#0"] }, // Stack all fields in single column
//             medium: { cols: ["#0", "#1"] } // Two columns side by side
//         },
//         password_layout: {
//             small: { cols: ["#0"] }, // Stack all fields in single column
//             medium: { cols: ["#0", "#1"] }, // Two columns
//             large: { cols: ["#0", "#1", "#2"] } // Three columns
//         }
//     },
    
//     // Initialize layout for different screen sizes
//     on: {
//         onViewShow: function() {
//             // Function to handle responsive behavior
//             const handleResponsive = function() {
//                 const isMobile = window.innerWidth <= 768;
                
//                 // Handle mobile menu toggle visibility
//                 const menuToggle = $$("mobile_menu_toggle");
//                 if (menuToggle) {
//                     if (isMobile) {
//                         menuToggle.show();
//                     } else {
//                         menuToggle.hide();
//                         const sideMenu = $$("settings_side_menu");
//                         if (sideMenu && !sideMenu.isVisible()) {
//                             sideMenu.show();
//                         }
//                     }
//                 }
//             };
            
//             // Call once on init
//             handleResponsive();
            
//             // Set up window resize event
//             if (!window.responsiveHandlerSet) {
//                 window.addEventListener("resize", handleResponsive);
//                 window.responsiveHandlerSet = true;
//             }
            
//             // Load saved data if available
//             loadSavedData();
//         }
//     }
// };

// // Save profile data to localStorage
// export function saveProfileData(section, data) {
//     localStorage.setItem(section, JSON.stringify(data));
// }

// // Load saved data from localStorage
// export function loadSavedData() {
//     // Load profile data
//     const profileData = localStorage.getItem("profile");
//     if (profileData && $$("profileSection")) {
//         $$("profileSection").setValues(JSON.parse(profileData));
//     }
    
//     // Load personal data
//     const personalData = localStorage.getItem("personal");
//     if (personalData && $$("personalSection")) {
//         $$("personalSection").setValues(JSON.parse(personalData));
//     }
    
//     // Load profile image
//     const profileImage = localStorage.getItem("profile_image");
//     if (profileImage) {
//         const img = document.getElementById("profile-img");
//         if (img) {
//             img.src = profileImage;
//             $$("profile_image_container").refresh();
//         }
//     }
// }

// // Navigate to profile view
// export function navigateToProfileView() {
//     $$("acc_settings").hide();
//     $$("profile_view").show();
// }

// pages/settings/acc_settings.js
import DataValidation, { ValidationError } from '../../utils/profileDatavalidation.js';

/**
 * Save user details to localStorage
 * @param {Object} data - User data to save
 * @returns {Object} Save operation result
 */
export function saveUserDetailsToStorage(data) {
    try {
        // Validate the entire profile
        const validatedData = DataValidation.validateFullProfile(data);

        // Prepare data for storage
        const userDetailsToSave = {
            profile: validatedData.profile,
            personal: validatedData.personal || {},
            security: {
                passwordChanged: !!validatedData.new_password
            }
        };

        // Save to localStorage
        localStorage.setItem('userDetails', JSON.stringify(userDetailsToSave));
        
        return { 
            success: true, 
            message: 'User details saved successfully',
            data: userDetailsToSave
        };
    } catch (error) {
        console.error('Error saving user details:', error);
        return { 
            success: false, 
            message: error instanceof ValidationError 
                ? error.message 
                : 'Failed to save user details',
            error: error.message
        };
    }
}

/**
 * Load user details from localStorage
 * @returns {Object|null} Loaded user details or null
 */
export function loadUserDetailsFromStorage() {
    try {
        const savedData = localStorage.getItem('userDetails');
        return savedData ? JSON.parse(savedData) : null;
    } catch (error) {
        console.error('Error loading user details:', error);
        return null;
    }
}

// Account Settings Configuration
export const AccSettings = {
    id: "acc_settings2",
    responsive: true,
    type: "clean",
    rows: [
        // Header Row
        {
            height: 60,
            cols: [
                {
                    template: "<h2 class='section_header'>Account Settings</h2>",
                    css: "header_section"
                },
                {
                    view: "icon", 
                    icon: "wxi-menu",
                    id: "mobile_menu_toggle",
                    hidden: true,
                    click: function() {
                        const sideMenu = $$("settings_side_menu");
                        sideMenu.isVisible() ? sideMenu.hide() : sideMenu.show();
                    }
                }
            ]
        },
        
        // Main Content
        {
            cols: [
                // Side Menu
                {
                    id: "settings_side_menu",
                    view: "list",
                    width: 200,
                    css: "settings_menu",
                    select: true,
                    data: [
                        { id: "profile", value: "Profile" },
                        { id: "personal", value: "Personal Details" },
                        { id: "password", value: "Change Password" }
                    ],
                    on: {
                        onAfterSelect: function(id) {
                            const contentView = $$("settings_content");
                            const item = $$(id + "Section");
                            if (item && contentView) {
                                contentView.scrollTo(0, item.$view.offsetTop - 60);
                            }
                            
                            // Hide menu on mobile after selection
                            if (window.innerWidth <= 768) {
                                $$("settings_side_menu").hide();
                            }
                        }
                    }
                },
                
                // Main Content Container
                {
                    view: "scrollview",
                    id: "settings_content",
                    scroll: "y",
                    body: {
                        id: "settings_forms_container",
                        type: "clean",
                        rows: [ // Profile Section
         {
                                                            id: "profileSection",
                                                            view: "form",
                                                            css: "card_section",
                                                            padding: 20,
                                                            elements: [
                                                                {
                                                                    view: "template",
                                                                    template: "<h3 class='section_subheader'>Profile Information</h3>",
                                                                    height: 40,
                                                                    css: "subheader"
                                                                },
                                                                {
                                                                    responsive: "profile_layout",
                                                                    cols: [
                                                                        // Profile Picture Column
                                                                        {
                                                                            id: "profile_pic_col",
                                                                            gravity: 0.3,
                                                                            minWidth: 200,
                                                                            maxWidth: 300,
                                                                            rows: [
                                                                                {
                                                                                    id: "profile_image_container",
                                                                                    template: function() {
                                                                                        let savedImage = localStorage.getItem("profile_image");
                                                                                        let imageUrl = savedImage ? savedImage : "https://dummyimage.com/150"; // Load saved image or default one
                                                                                        return `<div style="text-align:center;">
                                                                                            <img id="profile-img" src="${imageUrl}" 
                                                                                            style="width:120px; height:120px; border-radius:50%; border:2px solid #ccc; object-fit:cover;">
                                                                                        </div>`;
                                                                                            },
                                                                                height: 140
                                                                                },
                                                                                {
                                                                                    cols: [
                                                                                        {
                                                                                            view: "uploader",
                                                                                            id: "profile_uploader",
                                                                                            value: "Upload Photo",
                                                                                            accept: "image/*",
                                                                                            multiple: false,
                                                                                            autosend: false,
                                                                                            css: "webix_primary",
                                                                                            on: {
                                                                                                onBeforeFileAdd: function(file) {
                                                                                                    const reader = new FileReader();
                                                                                                    reader.onload = function(e) {
                                                                                                        const imageData = e.target.result;
                                                                                                        const img = document.getElementById("profile-img");
                                                                                                        if (img) {
                                                                                                            img.src = imageData;
                                                                                                            $$("profile_image_container").refresh();
                                                                                                            
                                                                                                            // Store image data in localStorage
                                                                                                            localStorage.setItem("profile_image", imageData);
                                                                                                        }
                                                                                                    };
                                                                                                    reader.readAsDataURL(file.file);
                                                                                                    return false;
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    cols: [
                                                                                        {
                                                                                            view: "button",
                                                                                            value: "Remove",
                                                                                            css: "webix_danger",
                                                                                            click: function() {
                                                                                                const img = document.getElementById("profile-img");
                                                                                                if (img) {
                                                                                                    img.src = "https://dummyimage.com/150";
                                                                                                    $$("profile_image_container").refresh();
                                                                                                    localStorage.removeItem("profile_image");
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        // Profile Form Column
                                                                        {
                                                                            gravity: 0.7,
                                                                            rows: [
                                                                                { 
                                                                                    template: "<div class='form_label'>Full Name</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    name: "full_name", 
                                                                                    placeholder: "Enter your name", 
                                                                                    required: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15,
                                                                                    value: localStorage.getItem("profile_full_name") || ""
                                                                                },
                                                                                
                                                                                { 
                                                                                    template: "<div class='form_label'>Email</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    name: "email", 
                                                                                    placeholder: "Enter your email", 
                                                                                    disabled: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15,
                                                                                    value: localStorage.getItem("profile_email") || "user@example.com"
                                                                                },
                                                                                
                                                                                { 
                                                                                    template: "<div class='form_label'>Phone Number</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    name: "phone", 
                                                                                    placeholder: "Enter your phone number", 
                                                                                    required: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    padding: { top: 10 },
                                                                    cols: [
                                                                        {},
                                                                        { 
                                                                            view: "button", 
                                                                            value: "Save Profile", 
                                                                            css: "webix_primary", 
                                                                            width: 150,
                                                                            click: function() {
                                                                                if (!$$("profileSection").validate()) {
                                                                                    webix.message({ type: "error", text: "Please fill in all required fields." });
                                                                                    return;
                                                                                }
                                                                                
                                                                                // Save profile data
                                                                                saveProfileData("profile", $$("profileSection").getValues());
                                                                                webix.message("Profile updated!");
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            rules: {
                                                                full_name: webix.rules.isNotEmpty,
                                                                phone: function(value) { return /^[0-9]{10}$/.test(value); }
                                                            }
                                                        },
                            
                                                        // Personal Details Section
                                                        {
                                                            id: "personalSection",
                                                            view: "form",
                                                            css: "card_section",
                                                            padding: 20,
                                                            elements: [
                                                                {
                                                                    view: "template",
                                                                    template: "<h3 class='section_subheader'>Personal Details</h3>",
                                                                    height: 40,
                                                                    css: "subheader"
                                                                },
                                                                {
                                                                    responsive: "personal_details_layout",
                                                                    cols: [
                                                                        // Column 1
                                                                        {
                                                                            gravity: 1,
                                                                            minWidth: 250,
                                                                            rows: [
                                                                                {
                                                                                    template: "<div class='form_label'>Address</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above"
                                                                                },
                                                                                {
                                                                                    view: "textarea",
                                                                                    name: "address",
                                                                                    placeholder: "Enter your full address",
                                                                                    height: 80,
                                                                                    bottomPadding: 15
                                                                                },
                                                                                
                                                                                {
                                                                                    template: "<div class='form_label'>Marital Status</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above"
                                                                                },
                                                                                {
                                                                                    view: "richselect",
                                                                                    name: "marital_status",
                                                                                    placeholder: "Select your marital status",
                                                                                    options: [
                                                                                        { id: "single", value: "Single" },
                                                                                        { id: "married", value: "Married" },
                                                                                        { id: "divorced", value: "Divorced" },
                                                                                        { id: "widowed", value: "Widowed" },
                                                                                        { id: "other", value: "Other" }
                                                                                    ],
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        },
                                                                        // Column 2
                                                                        {
                                                                            gravity: 1,
                                                                            minWidth: 250,
                                                                            rows: [
                                                                                {
                                                                                    template: "<div class='form_label'>Gender</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above"
                                                                                },
                                                                                {
                                                                                    view: "radio",
                                                                                    name: "gender",
                                                                                    options: [
                                                                                        { id: "male", value: "Male" },
                                                                                        { id: "female", value: "Female" },
                                                                                        { id: "other", value: "Other" }
                                                                                    ],
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                },
                                                                                
                                                                                {
                                                                                    template: "<div class='form_label'>Date of Birth</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above"
                                                                                },
                                                                                {
                                                                                    view: "datepicker",
                                                                                    name: "date_of_birth",
                                                                                    format: "%d/%m/%Y",
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                },
                                                                                
                                                                                {
                                                                                    template: "<div class='form_label'>Occupation</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above"
                                                                                },
                                                                                {
                                                                                    view: "text",
                                                                                    name: "occupation",
                                                                                    placeholder: "Enter your occupation",
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    padding: { top: 10 },
                                                                    cols: [
                                                                        {},
                                                                        { 
                                                                            view: "button", 
                                                                            value: "Save Personal Details", 
                                                                            css: "webix_primary", 
                                                                            width: 180,
                                                                            click: function() {
                                                                                let form = $$("personalSection");
                                                                                if (!form.validate()) {
                                                                                    webix.message({ type: "error", text: "Please check your personal details." });
                                                                                    return;
                                                                                }
                                                                                
                                                                                // Save personal details
                                                                                saveProfileData("personal", form.getValues());
                                                                                webix.message("Personal details saved successfully!");
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                            
                                                        // Password Section
                                                        {
                                                            id: "passwordSection",
                                                            view: "form", 
                                                            css: "card_section",
                                                            padding: 20,
                                                            elements: [
                                                                {
                                                                    view: "template",
                                                                    template: "<h3 class='section_subheader'>Change Password</h3>",
                                                                    height: 40,
                                                                    css: "subheader"
                                                                },
                                                                {
                                                                    responsive: "password_layout",
                                                                    cols: [
                                                                        // Column 1
                                                                        {
                                                                            gravity: 1,
                                                                            minWidth: 250,
                                                                            rows: [
                                                                                { 
                                                                                    template: "<div class='form_label'>Current Password</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    type: "password", 
                                                                                    name: "current_password", 
                                                                                    required: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        },
                                                                        // Column 2
                                                                        {
                                                                            gravity: 1,
                                                                            minWidth: 250,
                                                                            rows: [
                                                                                { 
                                                                                    template: "<div class='form_label'>New Password</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    type: "password", 
                                                                                    name: "new_password", 
                                                                                    required: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        },
                                                                        // Column 3
                                                                        {
                                                                            gravity: 1,
                                                                            minWidth: 250,
                                                                            rows: [
                                                                                { 
                                                                                    template: "<div class='form_label'>Confirm Password</div>", 
                                                                                    height: 30,
                                                                                    css: "label_above" 
                                                                                },
                                                                                { 
                                                                                    view: "text", 
                                                                                    type: "password", 
                                                                                    name: "confirm_password", 
                                                                                    required: true,
                                                                                    height: 40,
                                                                                    bottomPadding: 15
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    padding: { top: 10 },
                                                                    cols: [
                                                                        {},
                                                                        { 
                                                                            view: "button", 
                                                                            value: "Update Password", 
                                                                            css: "webix_primary", 
                                                                            width: 150,
                                                                            click: function() {
                                                                                let form = $$("passwordSection");
                                                                                let values = form.getValues();
                            
                                                                                if (!form.validate()) {
                                                                                    webix.message({ type: "error", text: "Please fill in all password fields." });
                                                                                    return;
                                                                                }
                            
                                                                                if (values.new_password !== values.confirm_password) {
                                                                                    webix.message({ type: "error", text: "Passwords do not match!" });
                                                                                    return;
                                                                                }
                            
                                                                                webix.message("Password updated successfully!");
                                                                                form.clear();
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            rules: {
                                                                current_password: webix.rules.isNotEmpty,
                                                                new_password: function(value) { return value.length >= 6; },
                                                                confirm_password: webix.rules.isNotEmpty
                                                            }
                                                        },
                            // Save All Changes Button
                            {
                                padding: { top: 20, bottom: 20 },
                                cols: [
                                    {},
                                    {
                                        view: "button",
                                        value: "Save All Changes",
                                        css: "webix_primary webix_large",
                                        width: 200,
                                        height: 50,
                                        click: function() {
                                            try {
                                                // Collect data from all sections
                                                const profileData = $$("profileSection").getValues();
                                                const personalData = $$("personalSection").getValues();
                                                const passwordData = $$("passwordSection").getValues();

                                                // Combine data for validation and saving
                                                const combinedData = {
                                                    ...profileData,
                                                    personal: personalData,
                                                    new_password: passwordData.new_password
                                                };

                                                // Save user details
                                                const saveResult = saveUserDetailsToStorage(combinedData);

                                                if (saveResult.success) {
                                                    webix.message({
                                                        type: "success",
                                                        text: saveResult.message,
                                                        expire: 3000
                                                    });
                                                } else {
                                                    webix.message({
                                                        type: "error",
                                                        text: saveResult.message,
                                                        expire: 3000
                                                    });
                                                }
                                            } catch (error) {
                                                webix.message({
                                                    type: "error",
                                                    text: error.message || "An unexpected error occurred",
                                                    expire: 3000
                                                });
                                            }
                                        }
                                    },
                                    {}
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ],
    
    // Responsive and Keyboard Navigation Configuration
    on: {
        onViewShow: function() {
            // Responsive handling
            const handleResponsive = function() {
                const isMobile = window.innerWidth <= 768;
                const menuToggle = $$("mobile_menu_toggle");
                
                if (menuToggle) {
                    isMobile ? menuToggle.show() : menuToggle.hide();
                }
            };
            
            // Keyboard Navigation
            this.attachEvent("onKeyPress", function(key, e) {
                const activeSection = webix.UIManager.getFocus();
                
                switch(key) {
                    case 9:  // Tab key
                        e.preventDefault();
                        webix.UIManager.nextInput(activeSection);
                        break;
                    case 27: // Escape key
                        if (activeSection && activeSection.clear) {
                            activeSection.clear();
                        }
                        break;
                    case 13: // Enter key
                        if (activeSection && activeSection.validate) {
                            if (activeSection.validate()) {
                                // Implement save logic for the current section
                                const sectionData = activeSection.getValues();
                                console.log(`Saving ${activeSection.config.id} data:`, sectionData);
                            }
                        }
                        break;
                }
            });
            
            // Initial responsive check
            handleResponsive();
            
            // Add resize listener
            window.addEventListener("resize", handleResponsive);

            // Load saved data if available
            const savedData = loadUserDetailsFromStorage();
            if (savedData) {
                // Populate forms with saved data
                if (savedData.profile) {
                    $$("profileSection").setValues(savedData.profile);
                }
                if (savedData.personal) {
                    $$("personalSection").setValues(savedData.personal);
                }
            }
        }
    }
};

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Uncaught error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});