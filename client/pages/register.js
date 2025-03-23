// export const SignupPage = {
//     id: "register",
//     css: "signup-page",
//     rows: [
//         { gravity: 1 },
//         {
//             cols: [
//                 { gravity: 1 },
//                 {
//                     view: "form",
//                     id: "signup_form",
//                     css: "signup-container",
//                     borderless: true,
//                     width: Math.min(window.innerWidth * 0.8, 400),
//                     elements: [
//                         {
//                             view: "toolbar",
//                             css: "signup-header",
//                             height: 50,
//                             borderless: true,
//                             elements: [
//                                 {
//                                     view: "icon",
//                                     icon: "wxi-arrow-left",
//                                     css: "back-arrow",
//                                     click: function () {
//                                         showView("home");
//                                     }
//                                 },
//                                 {
//                                     view: "label",
//                                     label: "Sign Up",
//                                     css: "signup-title",
//                                     align: "center"
//                                 },
//                             ]
//                         },
//                         {
//                             view: "text",
//                             name: "first_name",
//                             css: "dark-input",
//                             placeholder: "First Name",
//                             required: true
//                         },
//                         {
//                             view: "text",
//                             name: "last_name",
//                             css: "dark-input",
//                             placeholder: "Last Name",
//                             required: true
//                         },
//                         {
//                             view: "text",
//                             name: "email",
//                             css: "dark-input",
//                             placeholder: "Email",
//                             required: true,
//                             validate: webix.rules.isEmail
//                         },
//                         {
//                             view: "text",
//                             type: "password",
//                             name: "password",
//                             css: "dark-input",
//                             placeholder: "Password",
//                             required: true,
//                             validate: function (value) {
//                                 return value.length >= 6;
//                             }
//                         },
//                         {
//                             view: "button",
//                             value: "Sign Up",
//                             css: "signup-button",
//                             height: 50,
//                             click: function () {
//                                 if ($$("signup_form").validate()) {
//                                     webix.message("Account created successfully");
//                                     showView("login"); // Redirect to login page
//                                 } else {
//                                     webix.message({ type: "error", text: "Please enter valid details" });
//                                 }
//                             }
//                         },
//                         { height: 15 },
//                         {
//                             view: "template",
//                             css: "login-container",
//                             template: "<div class='login-text'>Already have an account? <a href='#' class='login-link'>Log in</a></div>",
//                             height: 40,
//                             borderless: true,
//                             onClick: {
//                                 "login-link": function () {
//                                     showView("login");
//                                 }
//                             }
//                         }
//                     ],
//                     rules: {
//                         "first_name": webix.rules.isNotEmpty,
//                         "last_name": webix.rules.isNotEmpty,
//                         "email": webix.rules.isEmail,
//                         "password": function (value) { return value.length >= 6; }
//                     }
//                 },
//                 { gravity: 1 }
//             ]
//         },
//         { gravity: 1 }
//     ]
// };
import { updateProfile } from "../utils/updateprofile.js";

export const SignupPage = {
    id: "signup",
    css: "signup-page",
    rows: [
        { gravity: 1 },
        {
            cols: [
                { gravity: 1 },
                {
                    view: "form",
                    id: "signup_form",
                    css: "signup-container",
                    borderless: true,
                    width: Math.min(window.innerWidth * 0.8, 400),
                    elements: [
                        {
                            view: "toolbar",
                            css: "signup-header",
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
                                    label: "Sign Up",
                                    css: "signup-title",
                                    align: "center"
                                },
                            ]
                        },
                        {
                            view: "text",
                            name: "first_name",
                            css: "dark-input",
                            placeholder: "First Name",
                            required: true
                        },
                        {
                            view: "text",
                            name: "last_name",
                            css: "dark-input",
                            placeholder: "Last Name",
                            required: true
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
                            type: "password",
                            name: "password",
                            id: "password_input",
                            css: "dark-input",
                            placeholder: "Password",
                            required: true,
                            validate: function (value) {
                                return value.length >= 6;
                            },
                            on: {
                                onTimedKeyPress: function () {
                                    const value = this.getValue();
                                    if (value.length < 6) {
                                        $$("password_error").setHTML("<span style='color: red;'>Input at least 6 character password</span>");
                                    } else {
                                        $$("password_error").setHTML("");
                                    }
                                }
                            }
                        },
                        {
                            view: "template",
                            id: "password_error",
                            css: "password-error",
                            borderless: true,
                            height: 20,
                            template: ""
                        },
                        {
                            view: "button",
                            value: "Sign Up",
                            css: "signup-button",
                            height: 50,
                            click: function () {
                                if ($$("signup_form").validate()) {
                                    const values = $$("signup_form").getValues();
                                    const fullName = values.first_name + " " + values.last_name;
                                    const userProfile = {
                                        fullName: fullName,
                                        email: values.email,
                                        password: values.password // In practice, hash this password for security
                                    };

                                    localStorage.setItem("userProfile", JSON.stringify(userProfile));

                                    // Save profile data
                                    updateProfile(userProfile);
                                    webix.message("Account created successfully");
                                    showView("profile"); // Redirect to profile page
                                } else {
                                    webix.message({ type: "error", text: "Please enter valid details" });
                                }
                            }
                        },
                        { height: 15 },
                        {
                            view: "template",
                            css: "login-container",
                            template: "<div class='login-text'>Already have an account? <a href='#' class='login-link'>Log in</a></div>",
                            height: 40,
                            borderless: true,
                            onClick: {
                                "login-link": function () {
                                    showView("login");
                                }
                            }
                        }
                    ],
                    rules: {
                        "first_name": webix.rules.isNotEmpty,
                        "last_name": webix.rules.isNotEmpty,
                        "email": webix.rules.isEmail,
                        "password": function (value) { return value.length >= 6; }
                    }
                },
                { gravity: 1 }
            ]
        },
        { gravity: 1 }
    ]
};
