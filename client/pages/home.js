export const HomePage = {
    id: "home",
    // template: `
    //   <div style="height: 500px; display: flex; align-items: center; justify-content: center;">
    //     <h2>Welcome to the Home Page</h2>
    //   </div>
    // `
    rows:[
        {
            view: "template",
            height: 400, // Adjust height for proper spacing
            template: `
                <div class="image-container">
                    <div class="overlay-text">
                        <h2>Welcome to the <span class="app-name">Demo App</span></h2>
                        <p class="description">The User Settings lets you customize notifications, themes, and language for a personalized experience.</p>
                        <a href="#" class="login-link">Log In</a>
                    </div>
                </div>
            `
        },
        {
            cols: [
                {
                    rows: [
                        { 
                            view: "template",
                            template: "<h3>Start Building Your Profile Today</h3>", 
                            css: "profile-title",
                            height: 40
                        },
                        { 
                            view: "template",
                            template: "<p>Take control of your information with ease and security!</p>", 
                            css: "profile-text",
                            height: 60
                        },
                        
                    ],
                    css: "left-column",
                },
                {
                    view: "template",
                    css: "right-column",
                    template: `
                        <div class="footer-links">
                            <a href="#">About</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Contact Info</a>
                        </div>
                    `,
                }
            ]
        }
    ]
  };