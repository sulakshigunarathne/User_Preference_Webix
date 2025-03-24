export const PrSettings = {
    id: "pr_settings",
    rows: [
        { 
            template: "<h2>Privacy Settings</h2>",
            autoheight: true,
            css: "settings-title"
        },

        // Profile Picture Visibility Section
        {
            template: "<h3>Profile Picture Visibility</h3>",
            autoheight: true,
            css: "settings-subtitle"
        },
        { 
            view: "segmented", 
            label: "Who can see your profile picture?", 
            name: "profile_pic_visibility", 
            options: [
                { id: "everyone", value: "Everyone" },
                { id: "friends", value: "Friends Only" },
                { id: "private", value: "Only Me" }
            ]
        },

        // Account Privacy Section
        {
            template: "<h3>Account Privacy</h3>",
            autoheight: true,
            css: "settings-subtitle"
        },
        { 
            view: "segmented", 
            label: "Who can see your profile?", 
            name: "account_privacy", 
            options: [
                { id: "public", value: "Public" },
                { id: "friends", value: "Friends Only" },
                { id: "private", value: "Only Me" }
            ]
        },

        // Data Sharing Preferences
        {
            template: "<h3>Data Sharing Preferences</h3>",
            autoheight: true,
            css: "settings-subtitle"
        },
        { 
            view: "checkbox", 
            labelRight: "Allow search engines to index my profile", 
            name: "search_engine_visibility"
        },
        { 
            view: "checkbox", 
            labelRight: "Allow third-party apps to access my data", 
            name: "third_party_access"
        },

        { 
            cols: [
                { 
                    view: "button", value: "Save Changes", css: "save-button", click: function() {
                        webix.message("Privacy settings updated!");
                    }
                }
            ]
        }
    ]
};