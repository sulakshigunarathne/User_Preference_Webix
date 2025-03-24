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
          css: "rightAlign"
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
          css: "rightAlign"
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
          css: "rightAlign"
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
      responsive: "hide"
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
webix.ui({
  css: {
    "rightAlign": {
      "margin-left": "auto",
      "display": "flex",
      "align-items": "center"
    },
    "reduceSpacing": {
      "margin-right": "5px"
    }
  }
});
