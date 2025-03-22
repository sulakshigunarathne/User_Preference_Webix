export const Navbar = {
  view: "toolbar",
  height: 56,
  elements: [
    { view: "button", label: "Home", width: 100, click: () => showView("home") },
    { view: "button", label: "About", width: 100, click: () => showView("about") },
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