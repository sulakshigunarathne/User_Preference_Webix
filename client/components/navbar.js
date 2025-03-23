//before adding responsiveness

export const Navbar = {
  view: "toolbar",
  height: 56,
  css: "navContainer",
  elements: [
    { view: "button", label: "HOME", width: 100, click: () => showView("home") },
    { view: "button", label: "LOG IN", width: 100, click: () => showView("login") },
    { view: "button", label: "REGISTER", width: 100, click: () => showView("register") },
    { view: "button", label: "NOTIFICATIONS", width: 130, click: () => showView("notifications") },
    { view: "button", label: "PRIVACY", width: 100, click: () => showView("profile") },
    { view: "button", label: "SETTINGS", width: 100, click: () => showView("settings") },
    {},
    { view: "icon", icon: "mdi mdi-bell", badge: 3 },
    { view: "icon", icon: "mdi mdi-cog" },
    {
      view: "switch",
      // label: "Dark Mode",
      id: "themeSwitch",
      width: 120,
      value: 0,
      on: {
        onChange: function (value) {
          toggleTheme(value);
        }
      }
    }
  ]
};

