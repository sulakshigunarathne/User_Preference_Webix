
export const HomePage = {
    id: "home",
    type: "space",
    view: "layout",
    css: "home-container",
    rows: [
        // Hero Section with Welcome Message
        {
            view: "template",
            height: 400,
            css: "image-container",
            template: `
                <div class="image-container">
                    <h2 class="h2tag">Welcome to the <span class="app-name">Demo App!</span></h2>
                    <p class="description">The User Settings lets you customize notifications, themes, and language for a personalized experience.</p>
                    <button class="login-button" onclick="showView('login')">Log In</button>
                </div>
            `
        },

        // Responsive Section with Two Columns
        {
            type: "space",
            responsive: "home",
            cols: [
                // Left Column: Profile Call-to-Action
                {
                    view: "layout",
                    // css: "left-column",
                    gravity: 1, // Makes it adapt to screen width
                    rows: [
                        {
                            view: "template",
                            template: "<h3 style='text-align: left;'>Start Building Your Profile Today</h3>",
                            
                            // css: "profile-title",
                        },
                        {
                            view: "button",
                            value: "Register",
                            css: "register-button1",
                            align: "left",
                            click: function () {
                                webix.message("Register button clicked!");
                                showView('register'); // Navigate to registration page
                            }
                        }
                    ]
                },

                // Right Column: About Us & Contact
                {
                    view: "scrollview",
                    gravity: 2, // Makes it take more space than the left
                    id: "info-section",
                    // css: "right-column",
                    body: {
                        rows: [
                            {
                                template: "<h2>About Us</h2><p>We are dedicated to providing the best user experience with personalized settings and seamless navigation.</p>",
                                autoheight: true,
                                // css: "info-text"
                            },
                            {
                                cols: [
                                    { template: `<i class="fas fa-phone fa-2x"></i>`, autoheight: true, css: "contact-icon" },
                                    { template: `<i class="fas fa-envelope fa-2x"></i>`, autoheight: true, css: "contact-icon" },
                                    { template: `<i class="fab fa-linkedin fa-2x"></i>`, autoheight: true, css: "contact-icon" }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ]
};
