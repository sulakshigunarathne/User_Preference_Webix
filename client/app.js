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
window.toggleTheme = function (isDark) {
  if (isDark) {
    // document.body.classList.add("webix_dark");
    webix.skin.set("webix_dark");

  } else {
    // document.body.classList.remove("webix_dark");
    webix.skin.set("material");
  }
  webix.ui.each($$("mainView"), function (view) {
    view.refresh();
  });
};

 // Set default view
 showView("home");
});