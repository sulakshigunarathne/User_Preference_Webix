//before adding responsiveness

// import { isLogin } from "../app";
let isLogin = JSON.parse(localStorage.getItem("loggedUser")) || false;

// const a = localStorage.getItem("loggedUser");

// // Ensure proper boolean conversion
// if (a === "true") {  
//   isLogin = true;
// } else {
//   isLogin = false;
// }


export const Navbar = {
  id: "navbar",
  view: "toolbar",
  height: 56,
  css: "navContainer",
  elements: [
    { view: "button", label: "HOME", width: 100, click: () => showView("home") },
    { view: "button", label: "LOG IN", width: 100, click: () => showView("login"), hidden: !isLogin ? false : true },
    { view: "button", label: "SIGNUP", width: 100, click: () => showView("signup"), hidden: !isLogin ? false : true },
    { view: "button", label: "NOTIFICATIONS", width: 130, click: () => showView("notifications"), hidden: isLogin ? false : true },
    { view: "button", label: "PROFILE", width: 100, click: () => showView("profile"), hidden: isLogin ? false : true },
    { view: "button", label: "SETTINGS", width: 100, click: () => showView("settings"), hidden: isLogin ? false : true },
    {},
    { view: "icon", icon: "mdi mdi-bell", badge: 3 },
    { view: "icon", icon: "mdi mdi-cog" },
    {
      view: "switch",
      id: "themeSwitch",
      width: 120,
      value: 0,
      on: {
        onChange: function (value) {
          toggleTheme(value);
        }
      }
    },
    { 
      view: "button", label: "LOGOUT", width: 100, 
      click: () => {
        localStorage.setItem("loggedUser", "false");
        location.reload();
      }, 
      hidden: isLogin ? false : true 
    },
    {
      view: "template",
      height: 100,
      width:100,
      // css:"image-container",
      // template: `
      //     <div class="image-container">

      //             <h2 class="h2tag">Welcome to the <span class="app-name">Demo App!</span></h2>
      //             <p class="description">The User Settings lets you customize notifications, themes, and language for a personalized experience.</p>
      //             <button class="login-button" onclick="webix.message('Login Clicked!')">Log In</button>
              
      //     </div>
      // `
      template: `<img src="../assets/backgroundimg.jpg" class="photo-img" style="width:100px; height:100px; border-radius: 10px;" />`,
      hidden: isLogin ? false : true,
      on: {
        onClick: function () {
          showView("profile");
        }
      }
  },
  ]
};
