export const NotificationPage = {
    id: "notification",
    view: "layout",
    css: "notification-container",
    rows: [
        {
            view: "template",
            height: 50,
            css: "section-header",
            template: "<h2>Reactions</h2>"
        },
        {
            view: "toggle",
            id: "reaction_notifications",
            label: "Show notifications for reactions to messages you send",
            labelWidth: 280,
            width: 350,
            value: 0,
            on: {
                onChange: function(newValue) {
                    // Handle toggle change
                    console.log("Reaction notifications:", newValue ? "On" : "Off");
                }
            }
        },
        {
            view: "template",
            height: 30,
            template: ""
        },
        {
            view: "template",
            height: 50,
            css: "section-header",
            template: "<h2>Status reactions</h2>"
        },
        {
            view: "toggle",
            id: "status_reactions",
            label: "Show notifications when you get likes on a status",
            labelWidth: 280,
            width: 350,
            value: 1,
            on: {
                onChange: function(newValue) {
                    // Handle toggle change
                    console.log("Status reaction notifications:", newValue ? "On" : "Off");
                }
            }
        },
        {
            view: "template",
            height: 30,
            template: ""
        },
        {
            view: "template",
            height: 50,
            css: "section-header",
            template: "<h2>Text preview</h2>"
        },
        {
            view: "toggle",
            id: "text_preview",
            label: "Show message preview text inside new message notifications",
            labelWidth: 280,
            width: 350,
            value: 0,
            on: {
                onChange: function(newValue) {
                    // Handle toggle change
                    console.log("Text preview:", newValue ? "On" : "Off");
                }
            }
        },
        {
            view: "template",
            height: 30,
            template: ""
        },
        {
            view: "template",
            height: 50,
            css: "section-header",
            template: "<h2>Media preview</h2>"
        },
        {
            view: "toggle",
            id: "media_preview",
            label: "Show media preview images inside new message notifications",
            labelWidth: 280,
            width: 350,
            value: 0,
            on: {
                onChange: function(newValue) {
                    // Handle toggle change
                    console.log("Media preview:", newValue ? "On" : "Off");
                }
            }
        },
        {
            view: "template",
            height: 30,
            template: ""
        },
        {
            view: "template",
            height: 50,
            css: "section-header",
            template: "<h2>Notification tones</h2>"
        },
        {
            view: "template",
            height: 30,
            template: "<h3>Messages</h3>",
            css: "subsection-header"
        },
        {
            cols: [
                {
                    view: "button",
                    type: "icon",
                    icon: "wxi-play",
                    width: 40,
                    click: function() {
                        // Play sound preview
                        console.log("Play message tone");
                    }
                },
                {
                    view: "richselect",
                    id: "message_tone",
                    value: "default",
                    width: 150,
                    options: [
                        { id: "default", value: "Default" },
                        { id: "tone1", value: "Tone 1" },
                        { id: "tone2", value: "Tone 2" },
                        { id: "none", value: "None" }
                    ],
                    on: {
                        onChange: function(newValue) {
                            console.log("Message tone changed to:", newValue);
                        }
                    }
                }
            ]
        },
        {
            view: "template",
            height: 30,
            template: "<h3>Groups</h3>",
            css: "subsection-header"
        },
        {
            cols: [
                {
                    view: "button",
                    type: "icon",
                    icon: "wxi-play",
                    width: 40,
                    click: function() {
                        // Play sound preview
                        console.log("Play group tone");
                    }
                },
                {
                    view: "richselect",
                    id: "group_tone",
                    value: "default",
                    width: 150,
                    options: [
                        { id: "default", value: "Default" },
                        { id: "tone1", value: "Tone 1" },
                        { id: "tone2", value: "Tone 2" },
                        { id: "none", value: "None" }
                    ],
                    on: {
                        onChange: function(newValue) {
                            console.log("Group tone changed to:", newValue);
                        }
                    }
                }
            ]
        }
    ]
};

// Add some CSS to match the dark theme in the image
webix.ready(function() {
    webix.ui.fullScreen();
    webix.html.addStyle(`
        .notification-container {
            background-color: #121212;
            color: #ffffff;
        }
        .section-header h2 {
            margin: 0;
            padding: 10px 0;
            color: #ffffff;
            font-size: 16px;
            font-weight: normal;
        }
        .subsection-header h3 {
            margin: 0;
            padding: 5px 0;
            color: #ffffff;
            font-size: 14px;
            font-weight: normal;
        }
        .webix_toggle_box.webix_toggle_on {
            background-color: #8e9cc0;
        }
        .webix_el_toggle .webix_label_right {
            color: #ffffff;
        }
        .webix_el_toggle .webix_toggle_box {
            background-color: #333333;
        }
        .webix_richselect {
            background-color: #333333;
            color: #ffffff;
        }
        .webix_inp_static {
            background-color: #333333;
            color: #ffffff;
            border-color: #444444;
        }
        .webix_button {
            background-color: #333333;
            color: #ffffff;
        }
    `);
});

// This function helps to initialize the NotificationPage in your application
export function initNotificationPage() {
    webix.ui({
        id: "app-container",
        rows: [
            {
                view: "toolbar",
                height: 50,
                elements: [
                    { view: "label", label: "Notifications Settings" }
                ]
            },
            NotificationPage
        ]
    });
}