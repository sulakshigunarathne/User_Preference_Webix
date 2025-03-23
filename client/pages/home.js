
//before adding responsiveness

export const HomePage = {
    id: "home",
    view: "layout",
    css: "home-container",
    rows:[
        {
            view: "template",
            height: 400, 
            css:"image-container",
            template: `
                <div class="image-container">
    
                        <h2 class="h2tag">Welcome to the <span class="app-name">Demo App!</span></h2>
                        <p class="description">The User Settings lets you customize notifications, themes, and language for a personalized experience.</p>
                        <button class="login-button" onclick="webix.message('Login Clicked!')">Log In</button>
                    
                </div>
            `
        },
        {
            cols: [
                {
                    view:"layout",
                    css: "column-layout",
                    rows: [
                        { 
                            view: "template",
                            template: "<h3>Start Building Your Profile Today</h3>", 
                            css: "profile-title",
                            height: 40
                        },
                        {
                            view: "button",
                            value: "Register", // Button text
                            css: "register-button", // CSS class for styling
                            click: function() {
                                // Add the action when the button is clicked (e.g., navigating to a registration page)
                                alert("Register button clicked!");
                            }
                        }
                    ],
                
                },
                {
                    view: "list",
                    id: "clickable-list", // Assign an ID for the list
                    css: "right-column", // CSS for the right column
                    template: "#title#", // Assuming you have a `title` field in your data
                    select: true, // Allows selecting items
                    data: [
                        { id: 1, title: "About Us" },
                        { id: 2, title: "Terms of Service" },
                        { id: 3, title: "Contact Info" }
        ],
        on: {
            onItemClick: function(id) {
                const item = this.getSelectedItem();
                alert(item.title + " clicked!");
            }
        }
                }
            ]
        }
    ]
  };


  