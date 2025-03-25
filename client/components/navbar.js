// let isLogin = JSON.parse(localStorage.getItem("loggedUser")) || false;


// export const Navbar = {
//   id: "navbar",
//   view: "toolbar",
//   height: 56,
//   css: "navContainer",
//   elements: [
//     { view: "button", label: "HOME", width: 100, click: () => showView("home") },
//     { view: "button", label: "LOG IN", width: 100, click: () => showView("login"), hidden: !isLogin ? false : true },
//     { view: "button", label: "SIGNUP", width: 100, click: () => showView("signup"), hidden: !isLogin ? false : true },
//     { view: "button", label: "NOTIFICATIONS", width: 130, click: () => showView("acc_settings2"), hidden: isLogin ? false : true },
//     { view: "button", label: "PROFILE", width: 100, click: () => showView("profile"), hidden: isLogin ? false : true },
//     { view: "button", label: "SETTINGS", width: 100, click: () => showView("settings"), hidden: isLogin ? false : true },
//     {},
//     { view: "icon", icon: "mdi mdi-bell", badge: 3 },
//     { view: "icon", icon: "mdi mdi-cog" },
//     {
//       view: "switch",
//       id: "themeSwitch",
//       width: 120,
//       value: 0,
//       on: {
//         onChange: function (value) {
//           toggleTheme(value);
//         }
//       }
//     },
//     { 
//       view: "button", label: "LOGOUT", width: 100, 
//       click: () => {
//         localStorage.setItem("loggedUser", "false");
//         location.reload();
//       }, 
//       hidden: isLogin ? false : true 
//     },
//     {
//       view: "template",
//       height: 100,
//       width:100,
//       template: `<img src="../assets/backgroundimg.jpg" class="photo-img" style="width:100px; height:100px; border-radius: 10px;" />`,
//       hidden: isLogin ? false : true,
//       on: {
//         onClick: function () {
//           showView("profile");
//         }
//       }
//   },
//   ]
// };
let isLogin = JSON.parse(localStorage.getItem("loggedUser")) || false;

export const Navbar = {
  id: "navbar",
  view: "toolbar",
  height: 56,
  css: "navContainer",
  responsive: true,
  cols: [
    // Home Icon
    { 
      view: "icon", 
      icon: "mdi mdi-home", 
      click: () => showView("home"),
      width: 40
    },
    
    // Spacer for alignment
    { 
      view: "spacer", 
      fillspace: true 
    },
    
    // Right-aligned items (Settings, Theme Switch, Logout, Profile)
    {
      cols: [
        { 
          view: "icon", 
          icon: "mdi mdi-cog", 
          click: () => showView("settings"), 
          hidden: !isLogin,
          width: 40,
          css: "rightAlign",
          hidden: !isLogin
        },
        {
          view: "switch",
          id: "themeSwitch",
          width: 100,
          value: 0,
          on: {
            onChange: function (value) {
              toggleTheme(value);
            }
          },
          hidden: !isLogin,
          css: "rightAlign",
          onLabel: "<span class='webix_icon fas fa-sun'></span>",
          offLabel: "<span class='webix_icon fas fa-moon'></span>"
        },
        { 
          view: "button", 
          label: "LOGOUT", 
          width: 100, 
          click: () => {
            localStorage.setItem("loggedUser", "false");
            location.reload();
          }, 
          hidden: !isLogin,
          css: "rightAlign",
          responsive: {
            "screen-xxs": { width: 80, height: 32 },  // Smaller size for very small screens
            "screen-s": { width: 100, height: 40 },   // Slightly larger on small screens
            "screen-m": { width: 150, height: 56 }    // Default size for larger screens
        }
        },
        {
          view: "icon", 
          icon: "mdi mdi-account-circle", 
          width: 40, 
          hidden: !isLogin,
          click: () => showView("profile"),
          css: "rightAlign"
        }
      ],
    },
    
    // When not logged in
    {
      cols: [
        { 
          view: "button", 
          label: "LOG IN", 
          width: 100, 
          click: () => showView("login"), 
          hidden: isLogin,
          css: "reduceSpacing"
        },
        {
          view: "button", 
          label: "SIGNUP", 
          width: 100, 
          click: () => showView("signup"), 
          hidden: isLogin,
          css: "reduceSpacing"
        },
        {
          view: "switch",
          id: "themeSwitchPublic",
          width: 100,
          value: 0,
          onLabel: "<span class='webix_icon fas fa-sun'></span>",
          offLabel: "<span class='webix_icon fas fa-moon'></span>",
          on: {
            onChange: function (value) {
              toggleTheme(value);
            }
          },
          hidden: isLogin,
          css: "reduceSpacing"
        }
      ],
      responsive: "hide"
    }
  ]
};

// CSS styles for alignment
// webix.ui({
//   css: {
//     "rightAlign": {
//       "margin-left": "auto",
//       "display": "flex",
//       "align-items": "center"
//     },
//     "reduceSpacing": {
//       "margin-right": "5px"
//     }
//   }
// });

// Responsive Navbar Configuration

// webix.ready(function() {
//   // Ensure localStorage handling is safe
//   let isLogin = false;
//   try {
//     isLogin = JSON.parse(localStorage.getItem("loggedUser") || "false");
//   } catch (error) {
//     console.warn("Error parsing login state:", error);
//   }

//   // Safe function to create hamburger menu popup
//   function createHamburgerMenu(isLoggedIn) {
//     return {
//       view: "popup",
//       id: "hamburgerMenu",
//       width: 250,
//       body: {
//         view: "list",
//         data: isLoggedIn ? [
//           { id: "home", value: "Home", icon: "mdi mdi-home" },
//           { id: "settings", value: "Settings", icon: "mdi mdi-cog" },
//           { id: "profile", value: "Profile", icon: "mdi mdi-account-circle" },
//           { id: "logout", value: "Logout", icon: "mdi mdi-logout" }
//         ] : [
//           { id: "home", value: "Home", icon: "mdi mdi-home" },
//           { id: "login", value: "Log In", icon: "mdi mdi-login" },
//           { id: "signup", value: "Sign Up", icon: "mdi mdi-account-plus" }
//         ],
//         template: "<span class='webix_icon #icon#'></span> #value#",
//         on: {
//           onItemClick: function(id) {
//             $$("hamburgerMenu").hide();
            
//             switch(id) {
//               case "home": 
//                 if (typeof showView === 'function') showView("home"); 
//                 break;
//               case "settings": 
//                 if (typeof showView === 'function') showView("settings"); 
//                 break;
//               case "profile": 
//                 if (typeof showView === 'function') showView("profile"); 
//                 break;
//               case "logout": 
//                 localStorage.setItem("loggedUser", "false");
//                 location.reload();
//                 break;
//               case "login": 
//                 if (typeof showView === 'function') showView("login"); 
//                 break;
//               case "signup": 
//                 if (typeof showView === 'function') showView("signup"); 
//                 break;
//             }
//           }
//         }
//       }
//     };
//   }

//   // Navbar Configuration
//   const Navbar = {
//     id: "navbar",
//     view: "toolbar",
//     height: 56,
//     css: "navContainer",
//     responsive: true,
//     cols: [
//       // Home Icon
//       { 
//         view: "icon", 
//         icon: "mdi mdi-home", 
//         click: () => {
//           if (typeof showView === 'function') showView("home");
//         },
//         width: 40,
//         responsive: "hide"
//       },
      
//       // Spacer for alignment
//       { 
//         view: "spacer", 
//         fillspace: true 
//       },
      
//       // Hamburger Menu Button (initially hidden)
//       {
//         view: "icon",
//         icon: "mdi mdi-menu",
//         id: "hamburgerButton",
//         width: 40,
//         hidden: true,
//         click: function() {
//           $$("hamburgerMenu").show({ 
//             x: this.getNode().offsetLeft,
//             y: this.getNode().offsetTop + this.getNode().offsetHeight 
//           });
//         },
//         responsive: "hide"
//       },
      
//       // Right-aligned items for logged-in state
//       {
//         cols: [
//           { 
//             view: "icon", 
//             icon: "mdi mdi-cog", 
//             click: () => {
//               if (typeof showView === 'function') showView("settings");
//             }, 
//             hidden: !isLogin,
//             width: 40,
//             css: "rightAlign",
//             responsive: "hide"
//           },
//           {
//             view: "switch",
//             id: "themeSwitch",
//             width: 100,
//             value: 0,
//             on: {
//               onChange: function (value) {
//                 if (typeof toggleTheme === 'function') toggleTheme(value);
//               }
//             },
//             hidden: !isLogin,
//             css: "rightAlign",
//             onLabel: "<span class='webix_icon fas fa-sun'></span>",
//             offLabel: "<span class='webix_icon fas fa-moon'></span>",
//             responsive: "hide"
//           },
//           { 
//             view: "button", 
//             label: "LOGOUT", 
//             width: 100, 
//             click: () => {
//               localStorage.setItem("loggedUser", "false");
//               location.reload();
//             }, 
//             hidden: !isLogin,
//             css: "rightAlign",
//             responsive: "hide"
//           },
//           {
//             view: "icon", 
//             icon: "mdi mdi-account-circle", 
//             width: 40, 
//             hidden: !isLogin,
//             click: () => {
//               if (typeof showView === 'function') showView("profile");
//             },
//             css: "rightAlign",
//             responsive: "hide"
//           }
//         ],
//         responsive: "hide"
//       },
      
//       // Login/Signup buttons for logged-out state
//       {
//         cols: [
//           { 
//             view: "button", 
//             label: "LOG IN", 
//             width: 100, 
//             click: () => {
//               if (typeof showView === 'function') showView("login");
//             }, 
//             hidden: isLogin,
//             css: "reduceSpacing",
//             responsive: "hide"
//           },
//           {
//             view: "button", 
//             label: "SIGNUP", 
//             width: 100, 
//             click: () => {
//               if (typeof showView === 'function') showView("signup");
//             }, 
//             hidden: isLogin,
//             css: "reduceSpacing",
//             responsive: "hide"
//           },
//           {
//             view: "switch",
//             id: "themeSwitchPublic",
//             width: 100,
//             value: 0,
//             onLabel: "Dark",
//             offLabel: "Light",
//             on: {
//               onChange: function (value) {
//                 if (typeof toggleTheme === 'function') toggleTheme(value);
//               }
//             },
//             hidden: isLogin,
//             css: "reduceSpacing",
//             responsive: "hide"
//           }
//         ],
//         responsive: "hide"
//       }
//     ]
//   };

//   // Responsive logic
//   function adjustNavbar() {
//     const navbar = $$("navbar");
//     if (!navbar) {
//       console.warn("Navbar not found");
//       return;
//     }

//     const navbarWidth = navbar.getNode().offsetWidth;
//     const navbarElements = navbar.getChildViews();
    
//     // Calculate total width of all elements
//     let totalWidth = 0;
//     navbarElements.forEach(element => {
//       if (!element.config.hidden) {
//         totalWidth += element.config.width || element.getNode().offsetWidth;
//       }
//     });
    
//     // If elements don't fit, show hamburger, hide other elements
//     if (totalWidth > navbarWidth) {
//       $$("hamburgerButton").show();
      
//       // Hide other right-hand components
//       navbarElements.forEach(element => {
//         if (element.config.id !== "hamburgerButton" && 
//             element.config.responsive === "hide") {
//           element.hide();
//         }
//       });
//     } else {
//       $$("hamburgerButton").hide();
      
//       // Show all components based on login state
//       navbarElements.forEach(element => {
//         if (element.config.responsive === "hide") {
//           if (element.config.hidden !== undefined) {
//             element.config.hidden = !isLogin;
//           }
//           element.show();
//         }
//       });
//     }
//   }

//   // CSS styles for alignment
//   webix.ui({
//     css: {
//       "rightAlign": {
//         "margin-left": "auto",
//         "display": "flex",
//         "align-items": "center"
//       },
//       "reduceSpacing": {
//         "margin-right": "5px"
//       }
//     }
//   });

//   // Initialize hamburger menu popup
//   webix.ui(createHamburgerMenu(isLogin));

//   // Initialize navbar
//   webix.ui(Navbar);

//   // Add resize event listener
//   webix.event(window, "resize", adjustNavbar);

//   // Call on initial load
//   adjustNavbar();
// });

// // Export for potential module usage
// export const NavbarConfig = Navbar;