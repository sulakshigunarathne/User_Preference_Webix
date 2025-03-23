// export const LoginPage = {
//     id: "login",
//     css: "login-page",
//     rows: [
//       { gravity: 1 },
//       {
//         cols: [
//           { gravity: 1 },
          
//           {
//             view: "form",
//             id: "login_form",
//             css: "login-container",
//             borderless: true,
//             width: Math.min(window.innerWidth * 0.8, 400),
//             elements: [
//               {
//                 // Header with back button and title
//                 view: "toolbar",
//                 css: "login-header",
//                 height: 50,
//                 borderless: true,
//                 elements: [
//                   {
//                     view: "icon", 
//                     icon: "wxi-arrow-left",
//                     css: "back-arrow",
//                     click: function() {
//                       showView("home");
//                     }
//                   },
//                   {
//                     view: "label", 
//                     label: "Log in / Sign up", 
//                     css: "login-title",
//                     align: "center"
//                   },
                  
//                 ]
//               },
              
//               {
//                 view: "label",
//                 label: "Email",
//                 css: "field-label"
//               },
//               {
//                 view: "text",
//                 name: "email",
//                 css: "dark-input",
//                 placeholder: "Enter your Email",
                
//               },
//                // Spacing
//               {
//                 view: "label",
//                 label: "Password",
//                 css: "field-label"
//               },
//               {
//                 view: "text",
//                 type: "password",
//                 name: "password",
//                 css: "dark-input",
//                 placeholder: "Enter your Password",
//                 height: 45
//               },
//               {
//                 view: "template",
//                 css: "forgot-password-container",
//                 template: "<a href='#' class='forgot-password'>Forgot Password?</a>",
//                 height: 40,
//                 borderless: true
//               },
//               {
//                 view: "button",
//                 value: "Log in",
//                 css: "login-button",
//                 height: 50,
//                 click: function() {
//                   if ($$("login_form").validate()) {
//                     // Handle login
//                     webix.message("Login successful");
//                     showView("home");
//                   }
//                 }
//               },
//               { height: 15 }, // Spacing
//               {
//                 view: "template",
//                 css: "signup-container",
//                 template: "<div class='signup-text'>Create a Account. <a href='#' class='signup-link'>Sign up</a></div>",
//                 height: 40,
//                 borderless: true,
//                 onClick: {
//                   "signup-link": function() {
//                     // Handle signup
//                     webix.message("Redirecting to signup");
//                   }
//                 }
//               }
//             ]
//           },
//           { gravity: 1 } // Right margin (flexible)
//         ]
//       },
//       { gravity: 1 } // Bottom spacing (flexible)
//     ]
//   };

export const LoginPage = {
  id: "login",
  css: "login-page",
  rows: [
    { gravity: 1 },
    {
      cols: [
        { gravity: 1 },
        {
          view: "form",
          id: "login_form",
          css: "login-container",
          borderless: true,
          width: Math.min(window.innerWidth * 0.8, 400),
          elements: [
            {
              view: "toolbar",
              css: "login-header",
              height: 50,
              borderless: true,
              elements: [
                {
                  view: "icon",
                  icon: "wxi-arrow-left",
                  css: "back-arrow",
                  click: function () {
                    showView("home");
                  }
                },
                {
                  view: "label",
                  label: "Log in / Sign up",
                  css: "login-title",
                  align: "center"
                },
              ]
            },
            {
              view: "text",
              name: "email",
              css: "dark-input",
              placeholder: "Email",
            },
            {
              view: "text",
              type: "password",
              name: "password",
              css: "dark-input",
              placeholder: "Password",
            },
            {
              view: "template",
              css: "forgot-password-container",
              template: "<a href='#' class='forgot-password'>Forgot Password?</a>",
              height: 40,
              borderless: true,
              onClick: {
                "forgot-password": function () {
                  showView("forgotpassword"); // Redirect to signup page
                }
              }

            },
            {
              view: "button",
              value: "Log in",
              css: "login-button",
              height: 50,
              click: function () {
                if ($$("login_form").validate()) {
                  webix.message("Login successful");
                  showView("home");
                }
              }
            },
            { height: 15 },
            {
              view: "template",
              css: "signup-container",
              template: "<div class='signup-text'>Create an Account. <a href='#' class='signup-link'>Sign up</a></div>",
              height: 40,
              borderless: true,
              onClick: {
                "signup-link": function () {
                  showView("register"); // Redirect to signup page
                }
              }
            }
          ]
        },
        { gravity: 1 }
      ]
    },
    { gravity: 1 }
  ]
};
