import { Navbar } from "./components/navbar.js";
import { HomePage } from "./pages/home.js";
import { AboutPage } from "./pages/about.js";

webix.ready(function () {
  webix.ui({
    container: "app",
    rows: [
      Navbar,
      {
        view: "multiview",
        id: "mainView",
        // height: 500,
        gravity: 1,
        cells: [HomePage, AboutPage] // Define available pages
      }
    ]
  });

  // Function to handle navigation
  window.showView = function (viewId) {
    $$("mainView").setValue(viewId);
  };

// Function to toggle dark mode
// window.toggleTheme = function (isDark) {
//   if (isDark) {
//     // document.body.classList.add("webix_dark");
//     webix.skin.set("dark");

//   } else {
//     // document.body.classList.remove("webix_dark");
//     webix.skin.set("material");
//   }
//   // webix.ui.each($$("mainView"), function (view) {
//   //   view.refresh();
//   // });
//   //webix.ui.refresh();
// };
window.toggleTheme = function (isDark) {
  const darkTheme = document.querySelector('link[href*="dark.css"]');

  if (isDark) {
    darkTheme.removeAttribute("disabled"); // Enable the dark theme
    webix.skin.set("dark");
    document.body.classList.add("dark-mode");

  } else {
    darkTheme.setAttribute("disabled", "true"); // Disable the dark theme
    webix.skin.set("material");
    document.body.classList.remove("dark-mode");
  }
  
};

 // Set default view
 showView("home");
});