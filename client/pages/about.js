// // export const AccSettings = {
// //     id: "acc_settings2",
// //     responsive: true,
// //     type: "clean",
// //     rows: [
// //         // Header with mobile toggle menu
// //         {
// //             height: 60,
// //             cols: [
// //                 {
// //                     template: "<h2 class='section_header'>Account Settings</h2>",
// //                     css: "header_section"
// //                 },
// //                 {
// //                     view: "icon", 
// //                     icon: "wxi-menu",
// //                     id: "mobile_menu_toggle",
// //                     hidden: true, // Hidden by default, shown only on mobile
// //                     click: function() {
// //                         const sideMenu = $$("settings_side_menu");
// //                         if (sideMenu.isVisible())
// //                             sideMenu.hide();
// //                         else
// //                             sideMenu.show();
// //                     }
// //                 }
// //             ]
// //         },

// //         // Main content with side menu and settings sections
// //         {
// //             cols: [
// //                 // Side Menu - will be hidden on mobile by default
// //                 {
// //                     id: "settings_side_menu",
// //                     view: "list",
// //                     width: 200,
// //                     css: "settings_menu",
// //                     select: true,
// //                     data: [
// //                         { id: "profile", value: "Profile" },
// //                         { id: "personal", value: "Personal Details" },
// //                         { id: "password", value: "Change Password" }
// //                     ],
// //                     on: {
// //                         onAfterSelect: function(id) {
// //                             // Scroll to the selected section
// //                             const contentView = $$("settings_content");
// //                             const item = $$(id + "Section");
// //                             if (item && contentView) {
// //                                 contentView.scrollTo(0, item.$view.offsetTop - 60);
// //                             }
                            
// //                             // Hide menu on mobile after selection
// //                             if (window.innerWidth <= 768) {
// //                                 $$("settings_side_menu").hide();
// //                             }
// //                         }
// //                     }
// //                 },

// //                 // Main Content Container
// //                 {
// //                     view: "scrollview",
// //                     id: "settings_content",
// //                     scroll: "y",
// //                     body: {
// //                         id: "settings_forms_container",
// //                         type: "clean",
// //                         rows: [
// //                             // Profile Section
// //                             {
// //                                 id: "profileSection",
// //                                 view: "form",
// //                                 css: "card_section",
// //                                 padding: 20,
// //                                 elements: [
// //                                     {
// //                                         view: "template",
// //                                         template: "<h3 class='section_subheader'>Profile Information</h3>",
// //                                         height: 40,
// //                                         css: "subheader"
// //                                     },
// //                                     {
// //                                         responsive: "profile_layout",
// //                                         cols: [
// //                                             // Profile Picture Column
// //                                             {
// //                                                 id: "profile_pic_col",
// //                                                 gravity: 0.3,
// //                                                 minWidth: 200,
// //                                                 maxWidth: 300,
// //                                                 rows: [
// //                                                     {
// //                                                         id: "profile_image_container",
// //                                                         template: function() {
// //                                                             let savedImage = localStorage.getItem("profile_image");
// //                                                             let imageUrl = savedImage ? savedImage : "https://dummyimage.com/150"; // Load saved image or default one
// //                                                             return `<div style="text-align:center;">
// //                                                                 <img id="profile-img" src="${imageUrl}" 
// //                                                                 style="width:120px; height:120px; border-radius:50%; border:2px solid #ccc; object-fit:cover;">
// //                                                             </div>`;
// //                                                                 },
// //                                                     height: 140
// //                                                     },
// //                                                     {
// //                                                         cols: [
// //                                                             {
// //                                                                 view: "uploader",
// //                                                                 id: "profile_uploader",
// //                                                                 value: "Upload Photo",
// //                                                                 accept: "image/*",
// //                                                                 multiple: false,
// //                                                                 autosend: false,
// //                                                                 css: "webix_primary",
// //                                                                 on: {
// //                                                                     onBeforeFileAdd: function(file) {
// //                                                                         const reader = new FileReader();
// //                                                                         reader.onload = function(e) {
// //                                                                             const imageData = e.target.result;
// //                                                                             const img = document.getElementById("profile-img");
// //                                                                             if (img) {
// //                                                                                 img.src = imageData;
// //                                                                                 $$("profile_image_container").refresh();
                                                                                
// //                                                                                 // Store image data in localStorage
// //                                                                                 localStorage.setItem("profile_image", imageData);
// //                                                                             }
// //                                                                         };
// //                                                                         reader.readAsDataURL(file.file);
// //                                                                         return false;
// //                                                                     }
// //                                                                 }
// //                                                             }
// //                                                         ]
// //                                                     },
// //                                                     {
// //                                                         cols: [
// //                                                             {
// //                                                                 view: "button",
// //                                                                 value: "Remove",
// //                                                                 css: "webix_danger",
// //                                                                 click: function() {
// //                                                                     const img = document.getElementById("profile-img");
// //                                                                     if (img) {
// //                                                                         img.src = "https://dummyimage.com/150";
// //                                                                         $$("profile_image_container").refresh();
// //                                                                         localStorage.removeItem("profile_image");
// //                                                                     }
// //                                                                 }
// //                                                             }
// //                                                         ]
// //                                                     }
// //                                                 ]
// //                                             },
// //                                             // Profile Form Column
// //                                             {
// //                                                 gravity: 0.7,
// //                                                 rows: [
// //                                                     { 
// //                                                         template: "<div class='form_label'>Full Name</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         name: "full_name", 
// //                                                         placeholder: "Enter your name", 
// //                                                         required: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15,
// //                                                         value: localStorage.getItem("profile_full_name") || ""
// //                                                     },
                                                    
// //                                                     { 
// //                                                         template: "<div class='form_label'>Email</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         name: "email", 
// //                                                         placeholder: "Enter your email", 
// //                                                         disabled: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15,
// //                                                         value: localStorage.getItem("profile_email") || "user@example.com"
// //                                                     },
                                                    
// //                                                     { 
// //                                                         template: "<div class='form_label'>Phone Number</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         name: "phone", 
// //                                                         placeholder: "Enter your phone number", 
// //                                                         required: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             }
// //                                         ]
// //                                     },
// //                                     {
// //                                         padding: { top: 10 },
// //                                         cols: [
// //                                             {},
// //                                             { 
// //                                                 view: "button", 
// //                                                 value: "Save Profile", 
// //                                                 css: "webix_primary", 
// //                                                 width: 150,
// //                                                 click: function() {
// //                                                     if (!$$("profileSection").validate()) {
// //                                                         webix.message({ type: "error", text: "Please fill in all required fields." });
// //                                                         return;
// //                                                     }
                                                    
// //                                                     // Save profile data
// //                                                     saveProfileData("profile", $$("profileSection").getValues());
// //                                                     webix.message("Profile updated!");
// //                                                 }
// //                                             }
// //                                         ]
// //                                     }
// //                                 ],
// //                                 rules: {
// //                                     full_name: webix.rules.isNotEmpty,
// //                                     phone: function(value) { return /^[0-9]{10}$/.test(value); }
// //                                 }
// //                             },

// //                             // Personal Details Section
// //                             {
// //                                 id: "personalSection",
// //                                 view: "form",
// //                                 css: "card_section",
// //                                 padding: 20,
// //                                 elements: [
// //                                     {
// //                                         view: "template",
// //                                         template: "<h3 class='section_subheader'>Personal Details</h3>",
// //                                         height: 40,
// //                                         css: "subheader"
// //                                     },
// //                                     {
// //                                         responsive: "personal_details_layout",
// //                                         cols: [
// //                                             // Column 1
// //                                             {
// //                                                 gravity: 1,
// //                                                 minWidth: 250,
// //                                                 rows: [
// //                                                     {
// //                                                         template: "<div class='form_label'>Address</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above"
// //                                                     },
// //                                                     {
// //                                                         view: "textarea",
// //                                                         name: "address",
// //                                                         placeholder: "Enter your full address",
// //                                                         height: 80,
// //                                                         bottomPadding: 15
// //                                                     },
                                                    
// //                                                     {
// //                                                         template: "<div class='form_label'>Marital Status</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above"
// //                                                     },
// //                                                     {
// //                                                         view: "richselect",
// //                                                         name: "marital_status",
// //                                                         placeholder: "Select your marital status",
// //                                                         options: [
// //                                                             { id: "single", value: "Single" },
// //                                                             { id: "married", value: "Married" },
// //                                                             { id: "divorced", value: "Divorced" },
// //                                                             { id: "widowed", value: "Widowed" },
// //                                                             { id: "other", value: "Other" }
// //                                                         ],
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             },
// //                                             // Column 2
// //                                             {
// //                                                 gravity: 1,
// //                                                 minWidth: 250,
// //                                                 rows: [
// //                                                     {
// //                                                         template: "<div class='form_label'>Gender</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above"
// //                                                     },
// //                                                     {
// //                                                         view: "radio",
// //                                                         name: "gender",
// //                                                         options: [
// //                                                             { id: "male", value: "Male" },
// //                                                             { id: "female", value: "Female" },
// //                                                             { id: "other", value: "Other" }
// //                                                         ],
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     },
                                                    
// //                                                     {
// //                                                         template: "<div class='form_label'>Date of Birth</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above"
// //                                                     },
// //                                                     {
// //                                                         view: "datepicker",
// //                                                         name: "date_of_birth",
// //                                                         format: "%d/%m/%Y",
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     },
                                                    
// //                                                     {
// //                                                         template: "<div class='form_label'>Occupation</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above"
// //                                                     },
// //                                                     {
// //                                                         view: "text",
// //                                                         name: "occupation",
// //                                                         placeholder: "Enter your occupation",
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             }
// //                                         ]
// //                                     },
// //                                     {
// //                                         padding: { top: 10 },
// //                                         cols: [
// //                                             {},
// //                                             { 
// //                                                 view: "button", 
// //                                                 value: "Save Personal Details", 
// //                                                 css: "webix_primary", 
// //                                                 width: 180,
// //                                                 click: function() {
// //                                                     let form = $$("personalSection");
// //                                                     if (!form.validate()) {
// //                                                         webix.message({ type: "error", text: "Please check your personal details." });
// //                                                         return;
// //                                                     }
                                                    
// //                                                     // Save personal details
// //                                                     saveProfileData("personal", form.getValues());
// //                                                     webix.message("Personal details saved successfully!");
// //                                                 }
// //                                             }
// //                                         ]
// //                                     }
// //                                 ]
// //                             },

// //                             // Password Section
// //                             {
// //                                 id: "passwordSection",
// //                                 view: "form", 
// //                                 css: "card_section",
// //                                 padding: 20,
// //                                 elements: [
// //                                     {
// //                                         view: "template",
// //                                         template: "<h3 class='section_subheader'>Change Password</h3>",
// //                                         height: 40,
// //                                         css: "subheader"
// //                                     },
// //                                     {
// //                                         responsive: "password_layout",
// //                                         cols: [
// //                                             // Column 1
// //                                             {
// //                                                 gravity: 1,
// //                                                 minWidth: 250,
// //                                                 rows: [
// //                                                     { 
// //                                                         template: "<div class='form_label'>Current Password</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         type: "password", 
// //                                                         name: "current_password", 
// //                                                         required: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             },
// //                                             // Column 2
// //                                             {
// //                                                 gravity: 1,
// //                                                 minWidth: 250,
// //                                                 rows: [
// //                                                     { 
// //                                                         template: "<div class='form_label'>New Password</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         type: "password", 
// //                                                         name: "new_password", 
// //                                                         required: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             },
// //                                             // Column 3
// //                                             {
// //                                                 gravity: 1,
// //                                                 minWidth: 250,
// //                                                 rows: [
// //                                                     { 
// //                                                         template: "<div class='form_label'>Confirm Password</div>", 
// //                                                         height: 30,
// //                                                         css: "label_above" 
// //                                                     },
// //                                                     { 
// //                                                         view: "text", 
// //                                                         type: "password", 
// //                                                         name: "confirm_password", 
// //                                                         required: true,
// //                                                         height: 40,
// //                                                         bottomPadding: 15
// //                                                     }
// //                                                 ]
// //                                             }
// //                                         ]
// //                                     },
// //                                     {
// //                                         padding: { top: 10 },
// //                                         cols: [
// //                                             {},
// //                                             { 
// //                                                 view: "button", 
// //                                                 value: "Update Password", 
// //                                                 css: "webix_primary", 
// //                                                 width: 150,
// //                                                 click: function() {
// //                                                     let form = $$("passwordSection");
// //                                                     let values = form.getValues();

// //                                                     if (!form.validate()) {
// //                                                         webix.message({ type: "error", text: "Please fill in all password fields." });
// //                                                         return;
// //                                                     }

// //                                                     if (values.new_password !== values.confirm_password) {
// //                                                         webix.message({ type: "error", text: "Passwords do not match!" });
// //                                                         return;
// //                                                     }

// //                                                     webix.message("Password updated successfully!");
// //                                                     form.clear();
// //                                                 }
// //                                             }
// //                                         ]
// //                                     }
// //                                 ],
// //                                 rules: {
// //                                     current_password: webix.rules.isNotEmpty,
// //                                     new_password: function(value) { return value.length >= 6; },
// //                                     confirm_password: webix.rules.isNotEmpty
// //                                 }
// //                             },
                            
// //                             // Save All Changes Button
// //                             {
// //                                 padding: { top: 20, bottom: 20 },
// //                                 cols: [
// //                                     {},
// //                                     {
// //                                         view: "button",
// //                                         value: "Save All Changes",
// //                                         css: "webix_primary webix_large",
// //                                         width: 200,
// //                                         height: 50,
// //                                         click: function() {
// //                                             // Validate all forms
// //                                             const profileValid = $$("profileSection").validate();
// //                                             const personalValid = $$("personalSection").validate();
                                            
// //                                             if (!profileValid || !personalValid) {
// //                                                 webix.message({ type: "error", text: "Please check all required fields." });
// //                                                 return;
// //                                             }
                                            
// //                                             // Save all profile data
// //                                             saveProfileData("profile", $$("profileSection").getValues());
// //                                             saveProfileData("personal", $$("personalSection").getValues());
                                            
// //                                             webix.message({
// //                                                 type: "success",
// //                                                 text: "All changes saved successfully!",
// //                                                 expire: 3000,
// //                                                 callback: function() {
// //                                                     // Navigate to profile view
// //                                                     navigateToProfileView();
// //                                                 }
// //                                             });
// //                                         }
// //                                     },
// //                                     {}
// //                                 ]
// //                             }
// //                         ]
// //                     }
// //                 }
// //             ]
// //         }
// //     ],
    
// //     // Responsive breakpoints configuration
// //     responsive_config: {
// //         profile_layout: {
// //             small: { cols: ["#0"] }, // Just stack the profile image and form fields
// //             medium: { cols: ["#0", "#1"] } // Side by side on larger screens
// //         },
// //         personal_details_layout: {
// //             small: { cols: ["#0"] }, // Stack all fields in single column
// //             medium: { cols: ["#0", "#1"] } // Two columns side by side
// //         },
// //         password_layout: {
// //             small: { cols: ["#0"] }, // Stack all fields in single column
// //             medium: { cols: ["#0", "#1"] }, // Two columns
// //             large: { cols: ["#0", "#1", "#2"] } // Three columns
// //         }
// //     },
    
// //     // Initialize layout for different screen sizes
// //     on: {
// //         onViewShow: function() {
// //             // Function to handle responsive behavior
// //             const handleResponsive = function() {
// //                 const isMobile = window.innerWidth <= 768;
                
// //                 // Handle mobile menu toggle visibility
// //                 const menuToggle = $$("mobile_menu_toggle");
// //                 if (menuToggle) {
// //                     if (isMobile) {
// //                         menuToggle.show();
// //                     } else {
// //                         menuToggle.hide();
// //                         const sideMenu = $$("settings_side_menu");
// //                         if (sideMenu && !sideMenu.isVisible()) {
// //                             sideMenu.show();
// //                         }
// //                     }
// //                 }
// //             };
            
// //             // Call once on init
// //             handleResponsive();
            
// //             // Set up window resize event
// //             if (!window.responsiveHandlerSet) {
// //                 window.addEventListener("resize", handleResponsive);
// //                 window.responsiveHandlerSet = true;
// //             }
            
// //             // Load saved data if available
// //             loadSavedData();
// //         }
// //     }
// // };

// // // Save profile data to localStorage
// // export function saveProfileData(section, data) {
// //     localStorage.setItem(section, JSON.stringify(data));
// // }

// // // Load saved data from localStorage
// // export function loadSavedData() {
// //     // Load profile data
// //     const profileData = localStorage.getItem("profile");
// //     if (profileData && $$("profileSection")) {
// //         $$("profileSection").setValues(JSON.parse(profileData));
// //     }
    
// //     // Load personal data
// //     const personalData = localStorage.getItem("personal");
// //     if (personalData && $$("personalSection")) {
// //         $$("personalSection").setValues(JSON.parse(personalData));
// //     }
    
// //     // Load profile image
// //     const profileImage = localStorage.getItem("profile_image");
// //     if (profileImage) {
// //         const img = document.getElementById("profile-img");
// //         if (img) {
// //             img.src = profileImage;
// //             $$("profile_image_container").refresh();
// //         }
// //     }
// // }

// // // Navigate to profile view
// // export function navigateToProfileView() {
// //     $$("acc_settings").hide();
// //     $$("profile_view").show();
// // }



// // import { authenticateUser,updateUserProfile } from "../utils/dataService.js";
// // import { isMobile } from "../utils/isMobile.js";

// // export const LoginPage = {
// //   id: "login",
// //   responsive: true,
// //   type: "space",
// //   cols: [
// //     {
// //       gravity: 1,
// //       hidden: isMobile(),
// //     },
// //     {
// //       view: "form",
// //       id: "login_form",
// //       borderless: true,
// //       width: 300,
// //       minWidth: 300, // Ensure form is at least 300px wide
// //       maxWidth: 400, // Limit form width to 400px
// //       responsiveCell: false, // Prevent form from being hidden or moved
// //       elements: [
// //         {
// //           view: "toolbar",
// //           height: 50,
// //           borderless: true,
// //           elements: [
// //             {
// //               view: "icon",
// //               icon: "wxi-arrow-left",
// //               click: function () {
// //                 showView("home");
// //               },
// //             },
// //             {
// //               view: "label",
// //               label: "Log in / Sign in",
// //               align: "center",
// //             },
// //           ],
// //         },
// //         {
// //           view: "text",
// //           name: "email",
// //           placeholder: "Email",
// //           required: true,
// //           validate: webix.rules.isEmail,
// //           invalidMessage: "Please enter a valid email address",
// //         },
// //         {
// //           view: "text",
// //           type: "password",
// //           name: "password",
// //           placeholder: "Password",
// //           required: true,
// //           invalidMessage: "Password cannot be empty",
// //         },
// //         {
// //           view: "template",
// //           template: "<a href='#' class='forgot-password'>Forgot Password?</a>",
// //           height: 40,
// //           borderless: true,
// //           onClick: {
// //             "forgot-password": function () {
// //               showView("forgotpassword");
// //             },
// //           },
// //         },
// //         {
// //           view: "button",
// //           value: "Log in",
// //           height: 50,
// //           click: async function () {
// //             const form = $$("login_form");

// //             if (!form.validate()) {
// //               webix.message({ type: "error", text: "Please enter valid details." });
// //               return;
// //             }

// //             const values = form.getValues();
// //             try {
// //               const user = await authenticateUser(values.email, values.password);

// //               if (user) {
// //                 webix.message({ type: "success", text: "Login successful!" });
// //                 sessionStorage.setItem("currentloggedin", user.email);
                
// //                 showView("home");
// //                 location.reload();
// //               } else {
// //                 webix.modalbox({
// //                   title: "Not Registered",
// //                   text: "You are not registered. Want to create an account?",
// //                   buttons: ["Cancel", "Sign Up"],
// //                   callback: function (result) {
// //                     if (result === 1) {
// //                       webix.ui(SignUpPage);
// //                     }
// //                   },
// //                 });
// //               }
// //             } catch (error) {
// //               console.error("Login Error:", error);
// //               webix.message({ type: "error", text: "Login failed. Try again later." });
// //             }
// //           },
// //         },
// //         { height: 15 },
// //         {
// //           view: "template",
// //           template: "<div class='signup-text'>Create an Account. <a href='#' class='signup-link'>Sign up</a></div>",
// //           height: 40,
// //           borderless: true,
// //           onClick: {
// //             "signup-link": function () {
// //               showView("signup");
// //             },
// //           },
// //         },
// //       ],
// //     },
// //     {
// //       gravity: 1,
// //       hidden: isMobile(),
// //     },
// //   ],
// // };
// import DataValidation, {
//     ValidationError,
//   } from "../../utils/profileDatavalidation.js";
//   import { getUsers } from "../../utils/dataService.js";
  
//   async function fetchUserDetailsByEmail(email) {
//     try {
//       const users = await getUsers();
//       const user = users.find((user) => user.email === email);
  
//       if (!user) {
//         //throw new Error(User with email ${email} not found);
//         return null;
//       }
  
//       return {
//         fullName: user.fullName,
//         email: user.email,
//         password: user.password,
//       };
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       return null;
//     }
//   }
  
//   async function populateUserFormFields() {
//     const storedData = sessionStorage.getItem("currentLoggedin");
//     const userEmail = storedData ? JSON.parse(storedData).email : null;
  
//     if (!userEmail) {
//       console.log("No logged-in user found");
//       return;
//     }
  
//     try {
//       const userData = await fetchUserDetailsByEmail(userEmail);
  
//       if (userData && $$("profileSection")) {
//         // Update the form with fetched user data using setValues on the form
//         $$("profileSection").setValues({
//           full_name: userData.fullName || "",
//           email: userData.email || "",
//         });
  
//         // Set password if the password section exists
//         if ($$("passwordSection")) {
//           $$("passwordSection").setValues({
//             current_password: userData.password || "",
//           });
//         }
//         console.log("User form fields populated successfully");
//       } else {
//         console.log("Failed to load user details");
//       }
//     } catch (error) {
//       console.log("Error populating form fields:", error);
//     }
//   }
  
//   // Account Settings Configuration
//   export const AccSettings = {
//     id: "acc_settings",
//     responsive: true,
//     type: "clean",
//     rows: [
//       // Header Row
//       {
//         height: 60,
//         cols: [
//           {
//             template: "<h2 class='section_header'>Account Settings</h2>",
//             css: "header_section",
//           },
//         ],
//       },
  
//       // Main Content
//       {
//         cols: [
//           // Main Content Container
//           {
//             view: "scrollview",
//             id: "settings_content",
//             scroll: "y",
//             body: {
//               id: "settings_forms_container",
//               type: "clean",
//               rows: [
//                 // Profile Section
//                 {
//                   id: "profileSection",
//                   view: "form",
//                   css: "card_section",
//                   padding: 20,
//                   elements: [
//                     {
//                       view: "template",
//                       template:
//                         "<h3 class='section_subheader'>Profile Information</h3>",
//                       height: 40,
//                       css: "subheader",
//                     },
//                     {
//                       responsive: "profile_layout",
//                       cols: [
//                         // Profile Picture Column
//                         {
//                           id: "profile_pic_col",
//                           gravity: 0.3,
//                           minWidth: 200,
//                           maxWidth: 300,
//                           rows: [
//                             {
//                               id: "profile_image_container",
//                               template: function () {
//                                 let savedImage =
//                                   localStorage.getItem("profile_image");
//                                 let imageUrl = savedImage
//                                   ? savedImage
//                                   : "https://dummyimage.com/150"; // Load saved image or default one
//                                 return `<div style="text-align:center;">
//                                                                                               <img id="profile-img" src="${imageUrl}" 
//                                                                                               style="width:120px; height:120px; border-radius:50%; border:2px solid #ccc; object-fit:cover;">
//                                                                                           </div>`;
//                               },
//                               height: 140,
//                             },
//                             {
//                               cols: [
//                                 {
//                                   view: "uploader",
//                                   id: "profile_uploader",
//                                   value: "Upload Photo",
//                                   accept: "image/*",
//                                   multiple: false,
//                                   autosend: false,
//                                   css: "webix_primary",
//                                   on: {
//                                     onBeforeFileAdd: function (file) {
//                                       const allowedTypes = [
//                                         "image/png",
//                                         "image/jpeg",
//                                         "image/jpg",
//                                         "image/gif",
//                                       ];
  
//                                       if (
//                                         !allowedTypes.includes(file.file.type)
//                                       ) {
//                                         webix.message({
//                                           type: "error",
//                                           text: "Only image files (PNG, JPEG, JPG, GIF) are allowed!",
//                                         });
//                                         return false;
//                                       }
//                                       const reader = new FileReader();
//                                       reader.onload = function (e) {
//                                         const imageData = e.target.result;
//                                         const img =
//                                           document.getElementById("profile-img");
//                                         if (img) {
//                                           img.src = imageData;
//                                           $$("profile_image_container").refresh();
  
//                                           // Store image data in localStorage
//                                           localStorage.setItem(
//                                             "profile_image",
//                                             imageData
//                                           );
//                                         }
//                                       };
//                                       reader.readAsDataURL(file.file);
//                                       return false;
//                                     },
//                                   },
//                                 },
//                               ],
//                             },
//                             {
//                               cols: [
//                                 {
//                                   view: "button",
//                                   value: "Remove",
//                                   css: "webix_danger",
//                                   click: function () {
//                                     const img =
//                                       document.getElementById("profile-img");
//                                     if (img) {
//                                       img.src = "https://dummyimage.com/150";
//                                       $$("profile_image_container").refresh();
//                                       localStorage.removeItem("profile_image");
//                                     }
//                                   },
//                                 },
//                               ],
//                             },
//                           ],
//                         },
//                         // Profile Form Column
//                         {
//                           gravity: 0.7,
//                           rows: [
//                             {
//                               template: "<div class='form_label'>Full Name</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               name: "full_name",
//                               placeholder: "Enter your name",
//                               required: true,
//                               height: 40,
//                               bottomPadding: 15,
//                               value: "",
//                             },
  
//                             {
//                               template: "<div class='form_label'>Email</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               name: "email",
//                               disabled: true,
//                               height: 40,
//                               bottomPadding: 15,
                          
//                             },
  
//                             {
//                               template:
//                                 "<div class='form_label'>Phone Number</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               name: "phone",
//                               placeholder: "Enter your phone number",
//                               required: true,
//                               height: 40,
//                               bottomPadding: 15,
//                               on: {
//                                   onBlur: function () {
//                                     const phoneNumber = this.getValue();
//                                     const phoneRegex = /^\d{10}$/; // Validates exactly 10-digit numbers
                              
//                                     if (!phoneRegex.test(phoneNumber)) {
//                                       webix.message({
//                                         type: "error",
//                                         text: "Invalid phone number! Must be 10 digits.",
//                                       });
                              
//                                       this.setValue(""); // Clear input if invalid
//                                     }
//                                   },
//                                 },
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                     {
//                       padding: { top: 10 },
//                       cols: [
//                         {},
//                         {
//                           view: "button",
//                           value: "Save Profile",
//                           css: "webix_primary",
//                           width: 150,
//                           click: function () {
//                             if (!$$("profileSection").validate()) {
//                               webix.message({
//                                 type: "error",
//                                 text: "Please fill in all required fields.",
//                               });
//                               return;
//                             }
  
//                             // Save profile data
//                             saveProfileData(
//                               "profile",
//                               $$("profileSection").getValues()
//                             );
//                             webix.message("Profile updated!");
//                           },
//                         },
//                       ],
//                     },
//                   ],
//                   rules: {
//                     full_name: webix.rules.isNotEmpty,
//                     phone: function (value) {
//                       return /^[0-9]{10}$/.test(value);
//                     },
//                   },
//                 },
  
//                 // Personal Details Section
//                 {
//                   id: "personalSection",
//                   view: "form",
//                   css: "card_section",
//                   padding: 20,
//                   elements: [
//                     {
//                       view: "template",
//                       template:
//                         "<h3 class='section_subheader'>Personal Details</h3>",
//                       height: 40,
//                       css: "subheader",
//                     },
//                     {
//                       id:"personal_details_layout",
//                       responsive: "personal_details_layout",
//                       cols: [
//                         // Column 1
//                         {
//                           gravity: 1,
//                           minWidth: 250,
//                           rows: [
//                             {
//                               template: "<div class='form_label'>Address</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "textarea",
//                               name: "address",
//                               placeholder: "Enter your full address",
//                               height: 80,
//                               bottomPadding: 15,
//                             },
//                             {
//                               template: "<div class='form_label'>Gender</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "radio",
//                               name: "gender",
//                               options: [
//                                 { id: "male", value: "Male" },
//                                 { id: "female", value: "Female" },
//                                 { id: "other", value: "Other" },
//                               ],
//                               height: 40,
//                               bottomPadding: 15,
//                             },
  
//                             {
//                               template:
//                                 "<div class='form_label'>Marital Status</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "richselect",
//                               name: "marital_status",
//                               placeholder: "Select your marital status",
//                               options: [
//                                 { id: "single", value: "Single" },
//                                 { id: "married", value: "Married" },
//                                 { id: "divorced", value: "Divorced" },
//                                 { id: "widowed", value: "Widowed" },
//                                 { id: "other", value: "Other" },
//                               ],
//                               height: 40,
//                               bottomPadding: 15,
//                             },
//                           ],
//                         },
//                         // Column 2
//                         {
//                           gravity: 1,
//                           minWidth: 250,
//                           rows: [
//                             {
//                               template:
//                                 "<div class='form_label'>Date of Birth</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "datepicker",
//                               name: "date_of_birth",
//                               format: "%d/%m/%Y",
//                               height: 40,
//                               bottomPadding: 15,
//                             },
  
//                             {
//                               template:
//                                 "<div class='form_label'>Occupation</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               name: "occupation",
//                               placeholder: "Enter your occupation",
//                               height: 40,
//                               bottomPadding: 15,
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                     // Save Personal Details Button
//                     {
//                       padding: { top: 10 },
//                       cols: [
//                         {},
//                         {
//                           view: "button",
//                           value: "Save Personal Details",
//                           css: "webix_primary",
//                           width: 180,
//                           click: function () {
//                             let form = $$("personalSection");
//                             if (!form.validate()) {
//                               webix.message({
//                                 type: "error",
//                                 text: "Please check your personal details.",
//                               });
//                               return;
//                             }
  
//                             // Save personal details
//                             saveProfileData("personal", form.getValues());
//                             webix.message("Personal details saved successfully!");
//                           },
//                         },
//                       ],
//                     },
//                   ],
//                 },
  
//                 // Password Section
//                 {
//                   id: "passwordSection",
//                   view: "form",
//                   css: "card_section",
//                   padding: 20,
//                   elements: [
//                     {
//                       view: "template",
//                       template:
//                         "<h3 class='section_subheader'>Change Password</h3>",
//                       height: 40,
//                       css: "subheader",
//                     },
//                     {
//                       responsive: "password_layout",
//                       cols: [
//                         // Column 1
//                         {
//                           gravity: 1,
//                           minWidth: 250,
//                           rows: [
//                             {
//                               template:
//                                 "<div class='form_label'>Current Password</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               type: "password",
//                               name: "current_password",
//                               required: true,
//                               height: 40,
//                               bottomPadding: 15,
//                             },
//                           ],
//                         },
//                         // Column 2
//                         {
//                           gravity: 1,
//                           minWidth: 250,
//                           rows: [
//                             {
//                               template:
//                                 "<div class='form_label'>New Password</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               type: "password",
//                               name: "new_password",
//                               required: true,
//                               height: 40,
//                               bottomPadding: 15,
//                             },
//                           ],
//                         },
//                         // Column 3
//                         {
//                           gravity: 1,
//                           minWidth: 250,
//                           rows: [
//                             {
//                               template:
//                                 "<div class='form_label'>Confirm Password</div>",
//                               height: 30,
//                               css: "label_above",
//                             },
//                             {
//                               view: "text",
//                               type: "password",
//                               name: "confirm_password",
//                               required: true,
//                               height: 40,
//                               bottomPadding: 15,
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                     {
//                       padding: { top: 10 },
//                       cols: [
//                         {},
//                         {
//                           view: "button",
//                           value: "Update Password",
//                           css: "webix_primary",
//                           width: 150,
//                           click: function () {
//                             let form = $$("passwordSection");
//                             let values = form.getValues();
  
//                             if (!form.validate()) {
//                               webix.message({
//                                 type: "error",
//                                 text: "Please fill in all password fields.",
//                               });
//                               return;
//                             }
  
//                             if (values.new_password !== values.confirm_password) {
//                               webix.message({
//                                 type: "error",
//                                 text: "Passwords do not match!",
//                               });
//                               return;
//                             }
  
//                             webix.message("Password updated successfully!");
//                             form.clear();
//                           },
//                         },
//                       ],
//                     },
//                   ],
//                   rules: {
//                     current_password: webix.rules.isNotEmpty,
//                     new_password: function (value) {
//                       return value.length >= 6;
//                     },
//                     confirm_password: webix.rules.isNotEmpty,
//                   },
//                 },
//                 // Save All Changes Button
//                 {
//                   padding: { top: 20, bottom: 20 },
//                   cols: [
//                     {},
//                     {
//                       view: "button",
//                       value: "Save All Changes",
//                       css: "webix_primary webix_large",
//                       width: 200,
//                       height: 50,
//                       click: function () {
//                         try {
//                           // Collect data from all sections
//                           const profileData = $$("profileSection").getValues();
//                           const personalData = $$("personalSection").getValues();
//                           const passwordData = $$("passwordSection").getValues();
  
//                           // Combine data for validation and saving
//                           const combinedData = {
//                             ...profileData,
//                             personal: personalData,
//                             new_password: passwordData.new_password,
//                           };
  
//                           // Save user details
//                           const saveResult =
//                             saveUserDetailsToStorage(combinedData);
  
//                           if (saveResult.success) {
//                             webix.message({
//                               type: "success",
//                               text: saveResult.message,
//                               expire: 3000,
//                             });
//                           } else {
//                             webix.message({
//                               type: "error",
//                               text: saveResult.message,
//                               expire: 3000,
//                             });
//                           }
//                         } catch (error) {
//                           webix.message({
//                             type: "error",
//                             text: error.message || "An unexpected error occurred",
//                             expire: 3000,
//                           });
//                         }
//                       },
//                     },
//                     {},
//                   ],
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     ],
  
//     // Responsive and Keyboard Navigation Configuration
//     on: {
//       onViewShow: function () {
//         // Responsive handling
//         const handleResponsive = function () {
//           const isMobile = window.innerWidth <= 768;
//           const menuToggle = $$("mobile_menu_toggle");
  
//           console.log("Window width:", window.innerWidth);
//           console.log("Is mobile:", isMobile);
//           console.log("Menu toggle exists:", !!menuToggle);
  
//           if (menuToggle) {
//             console.log("Setting visibility:", isMobile);
//             isMobile ? menuToggle.show() : menuToggle.hide();
//           } else {
//             console.error("mobile_menu_toggle element not found");
//           }
//         };
  
//         // Keyboard Navigation
//         this.attachEvent("onKeyPress", function (key, e) {
//           const activeSection = webix.UIManager.getFocus();
  
//           switch (key) {
//             case 9: // Tab key
//               e.preventDefault();
//               webix.UIManager.nextInput(activeSection);
//               break;
//             case 27: // Escape key
//               if (activeSection && activeSection.clear) {
//                 activeSection.clear();
//               }
//               break;
//             case 13: // Enter key
//               if (activeSection && activeSection.validate) {
//                 if (activeSection.validate()) {
//                   // Implement save logic for the current section
//                   const sectionData = activeSection.getValues();
//                   console.log(
//                     Saving ${activeSection.config.id} data:,
//                     sectionData
//                   );
//                 }
//               }
//               break;
//           }
//         });
  
//         // Initial responsive check
//         handleResponsive();
  
//         // Add resize listener
//         window.addEventListener("resize", handleResponsive);
  
//         // Call populateUserFormFields to fetch and populate user data from users.json
//         populateUserFormFields();
//       },
//     },
//   };
  
//   // Global error handling
//   window.addEventListener("error", (event) => {
//     console.error("Uncaught error:", event.error);
//   });
  
//   window.addEventListener("unhandledrejection", (event) => {
//     console.error("Unhandled promise rejection:", event.reason);
//   });