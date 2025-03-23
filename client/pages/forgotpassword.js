export const ForgotPasswordPage = {
  id: "forgotpassword",
  css: "forgot-password-page",
  rows: [
    { gravity: 1 },
    {
      cols: [
        { gravity: 1 },
        {
          view: "form",
          id: "forgot_password_form",
          css: "forgot-password-container",
          borderless: true,
          width: Math.min(window.innerWidth * 0.8, 400),
          elements: [
            {
              view: "toolbar",
              css: "forgot-password-header",
              height: 50,
              borderless: true,
              elements: [
                {
                  view: "icon",
                  icon: "wxi-arrow-left",
                  css: "back-arrow",
                  click: function () {
                    showView("login"); // Navigate back to the login page
                  }
                },
                {
                  view: "label",
                  label: "Forgot Password",
                  css: "forgot-password-title",
                  align: "center"
                },
              ]
            },
            {
              view: "text",
              name: "email",
              css: "dark-input",
              placeholder: "Email",
              required: true,
              validate: webix.rules.isEmail
            },
            {
              view: "text",
              name: "confirm_email",
              css: "dark-input",
              placeholder: "Confirm Email",
              required: true,
              validate: function (value) {
                return value === $$("forgot_password_form").getValues().email;
              }
            },
            {
              view: "button",
              value: "Send OTP",
              css: "otp-button",
              height: 50,
              click: function () {
                let form = $$("forgot_password_form");
                let values = form.getValues();
                
                if (form.validate()) {
                  webix.message("OTP Sent to your Email");
                  
                  // Simulate OTP sending (You can replace this with an API call)
                  setTimeout(() => {
                    showView("otpverification"); // Redirect to OTP verification page
                  }, 10);
                } else {
                  webix.message({ type: "error", text: "Emails do not match or invalid email format" });
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
