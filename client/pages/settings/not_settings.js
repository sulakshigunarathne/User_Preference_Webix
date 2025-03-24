export const NotSettings = {
    id: "not_settings",
    rows: [
        { 
            template: "<h2>Notification Settings</h2>",
            autoheight: true,
            css: "settings-title"
        },
        { 
            view: "form", 
            id: "notificationForm", 
            elements: [
                { view: "checkbox", label: "Email ", name: "email_notifications" },
                { view: "checkbox", label: "SMS", name: "sms_notifications" },
                { view: "checkbox", label: "Push", name: "push_notifications" },
                { view: "checkbox", label: "Newsletter Subscriptions", name: "newsletter_subscriptions" },
                { 
                    view: "combo", 
                    label: "Notification Sound", 
                    name: "notification_sound", 
                    options: [
                        { id: "default", value: "Default" },
                        { id: "chime", value: "Chime" },
                        { id: "beep", value: "Beep" },
                        { id: "silent", value: "Silent" }
                    ]
                },
                { 
                    view: "segmented", 
                    label: "Sound Mode", 
                    name: "sound_mode", 
                    options: [
                        { id: "mute", value: "Mute" },
                        { id: "keep", value: "Keep Sound" }
                    ]
                },
                { 
                    cols: [
                        { view: "button", value: "Save Changes", css: "save-button", click: function() {
                            webix.message("Notification settings updated!");
                        }}
                    ]
                }
            ]
        },
        
        { template: "<h3>Additional Settings</h3>", autoheight: true, css: "settings-subtitle" },
        
        // Text Preview Toggle
        { 
            view: "switch", 
            label: "Text preview", 
            name: "text_preview", 
            onLabel: "On", 
            offLabel: "Off" 
        },
        
        // Media Preview Toggle
        { 
            view: "switch", 
            label: "Media preview", 
            name: "media_preview", 
            onLabel: "On", 
            offLabel: "Off" 
        },
        
        { template: "<h3>Notification Tones</h3>", autoheight: true, css: "settings-subtitle" },
        
        // Message Tone Selection
        {
            cols: [
                { view: "label", label: "Messages", width: 100 },
                { view: "button", type: "icon", icon: "mdi mdi-play", width: 40, click: "playMessageTone" },
                { 
                    view: "richselect", 
                    name: "message_tone", 
                    options: ["Default", "Chime", "Beep", "Custom"], 
                    value: "Default" 
                }
            ]
        },
        
        // Group Tone Selection
        {
            cols: [
                { view: "label", label: "Groups", width: 100 },
                { view: "button", type: "icon", icon: "mdi mdi-play", width: 40, click: "playGroupTone" },
                { 
                    view: "richselect", 
                    name: "group_tone", 
                    options: ["Default", "Chime", "Beep", "Custom"], 
                    value: "Default" 
                }
            ]
        },
        
        // Mute Notifications Toggle
        { 
            view: "switch", 
            label: "Mute notifications", 
            name: "mute_notifications", 
            onLabel: "On", 
            offLabel: "Off" 
        }
    ],

    on: {
        onAfterRender: function() {
            window.playMessageTone = function() {
                console.log("Playing message tone");
                // Add actual audio playback logic here
            };

            window.playGroupTone = function() {
                console.log("Playing group tone");
                // Add actual audio playback logic here
            };
        }
    }
};
