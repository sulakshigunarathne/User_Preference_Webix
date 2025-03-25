import { authenticateUser } from "../utils/dataService.js";
import { isMobile } from "../utils/isMobile.js";

export const LoginPage = {
  id: "login",
  responsive: true,
  type: "space",
  cols: [
    {
      gravity: 1,
      hidden: isMobile(),
    },
    {
      view: "form",
      id: "login_form",
      borderless: true,
      // width: 300,
      // minWidth: 300, // Ensure form is at least 300px wide
      maxWidth: 400, // Limit form width to 400px
      responsiveCell: false, // Prevent form from being hidden or moved
      elements: [
        {
          view: "toolbar",
          height: 50,
          borderless: true,
          elements: [
            {
              view: "icon",
              icon: "wxi-arrow-left",
              click: function () {
                showView("home");
              },
            },
            {
              view: "label",
              label: "Log in / Sign in",
              align: "center",
            },
          ],
        },
        {
          view: "text",
          name: "email",
          placeholder: "Email",
          required: true,
          validate: webix.rules.isEmail,
          invalidMessage: "Please enter a valid email address",
        },
        {
          view: "text",
          type: "password",
          name: "password",
          placeholder: "Password",
          required: true,
          invalidMessage: "Password cannot be empty",
        },
        {
          view: "template",
          template: "<a href='#' class='forgot-password'>Forgot Password?</a>",
          height: 40,
          borderless: true,
          onClick: {
            "forgot-password": function () {
              showView("forgotpassword");
            },
          },
        },
        {
          view: "button",
          value: "Log in",
          height: 50,
          click: async function () {
            const form = $$("login_form");

            if (!form.validate()) {
              webix.message({
                type: "error",
                text: "Please enter valid details.",
              });
              return;
            }

            const values = form.getValues();
            try {
              const user = await authenticateUser(
                values.email,
                values.password
              );

              if (user === null) {
                // User does not exist
                // webix.modalbox({
                //   title: "Not Registered",
                //   text: "You are not registered. Want to create an account?",
                //   buttons: ["Cancel", "Sign Up"],
                //   callback: function (result) {
                //     console.log("Modal result:", result);
                //     if (result === 1) {
                //       setTimeout(() => {
                //         window.showView("signup");  // Trigger the navigation to signup page
                //     }, 10);  // Small delay to ensure modal transition is complete
                //     }
                //   },
                // });
                webix.modalbox({
                  title: "Not Registered",
                  text: "You are not registered. Redirecting to Sign Up page...",
                  buttons: ["OK"],
                  callback: function (result) {
                      // Once the modal box is dismissed, navigate to the signup page
                      window.showView("signup");
                  }
              });
                
              } else if (user === "invalid_password") {
                // Incorrect password
                webix.message({
                  type: "error",
                  text: "Invalid email/password.",
                });
              } else {
                // Successful login
                webix.message({ type: "success", text: "Login successful!" });
                sessionStorage.setItem("currentLoggedin", JSON.stringify({ email: user.email, password: user.password }));
                localStorage.setItem("loggedUser", JSON.stringify(user));

                showView("home");
                location.reload();
              }
            } catch (error) {
              console.error("Login Error:", error);
              webix.message({
                type: "error",
                text: "Login failed. Try again later.",
              });
            }
          },
        },
        { height: 15 },
        {
          view: "template",
          template:
            "<div class='signup-text'>Create an Account. <a href='#' class='signup-link'>Sign up</a></div>",
          height: 40,
          borderless: true,
          onClick: {
            "signup-link": function () {
              showView("signup");
            },
          },
        },
      ],
    },
    {
      gravity: 1,
      hidden: isMobile(),
    },
  ],
};
