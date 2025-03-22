export const AboutPage = {
    id: "about",
    rows: [
        {
            view: "template",
            template: `
                <div style="height: 500px; display: flex; align-items: center; justify-content: center;">
                    <h2>Welcome to the About Page</h2>
                </div>
            `
        },
        { 
            view: "button", 
            value: "Click Me", 
            css:"test-btn",
            click: function () {
              webix.message("Button Clicked!");
            }
          }
    ]
//     template: `
//     <div style="height: 500px; display: flex; align-items: center; justify-content: center;">
//       <h2>Welcome to the About Page</h2>
//     </div>
//   `
  };