export const NotSettings = {
    id: "not_settings",
    adaptivity: true,
    type: "clean",
    
    rows: [
        { 
            template: "<h2 tabindex='0' class='settings-title'>Notification Settings</h2>",
            autoheight: true,
            css: "settings-title"
        },
        { 
            view: "form", 
            id: "notificationForm",
            scroll: true,
            elementsConfig: {
                labelPosition: "left"
            },
            elements: [
                {
                    view: "fieldset",
                    label: "Alert Preferences",
                    body: {
                        paddingY: 10,
                        rows: [
                            {
                                view: "checkbox", 
                                label: "Email", 
                                name: "email_notifications",
                                labelWidth: 150,
                                tooltip: "Receive notifications via email",
                                tabFocus: true
                            },
                            {
                                view: "checkbox", 
                                label: "SMS", 
                                name: "sms_notifications",
                                labelWidth: 150,
                                tooltip: "Receive notifications via text message",
                                tabFocus: true
                            },
                            { 
                                view: "checkbox", 
                                label: "Push Notifications", 
                                name: "push_notifications", 
                                labelWidth: 150,
                                tooltip: "Receive push notifications on your device",
                                tabFocus: true
                            },
                            { 
                                view: "checkbox", 
                                label: "Newsletter", 
                                name: "newsletter_subscriptions", 
                                labelWidth: 150,
                                tooltip: "Receive newsletter emails",
                                tabFocus: true
                            }
                        ]
                    }
                },
                
                {
                    view: "fieldset",
                    label: "Sound Settings",
                    body: {
                        paddingY: 10,
                        rows: [
                            { 
                                view: "combo", 
                                label: "Notification Sound", 
                                name: "notification_sound", 
                                labelWidth: 150,
                                options: [
                                    { id: "default", value: "Default" },
                                    { id: "chime", value: "Chime" },
                                    { id: "beep", value: "Beep" },
                                    { id: "silent", value: "Silent" }
                                ],
                                tabFocus: true,
                                tooltip: "Choose your notification sound"
                            },
                            { 
                                view: "segmented", 
                                label: "Sound Mode", 
                                name: "sound_mode", 
                                labelWidth: 150,
                                options: [
                                    { id: "mute", value: "Mute" },
                                    { id: "keep", value: "Keep Sound" }
                                ],
                                tabFocus: true,
                                tooltip: "Configure sound mode"
                            }
                        ]
                    }
                },
                
                {
                    view: "fieldset",
                    label: "Preview Settings",
                    body: {
                        paddingY: 10,
                        rows: [
                            { 
                                view: "switch", 
                                label: "Text Preview", 
                                name: "text_preview", 
                                labelWidth: 150,
                                onLabel: "On", 
                                offLabel: "Off",
                                tabFocus: true,
                                tooltip: "Show text previews in notifications" 
                            },
                            { 
                                view: "switch", 
                                label: "Media Preview", 
                                name: "media_preview", 
                                labelWidth: 150,
                                onLabel: "On", 
                                offLabel: "Off",
                                tabFocus: true,
                                tooltip: "Show media previews in notifications" 
                            },
                            { 
                                view: "switch", 
                                label: "Mute All Notifications", 
                                name: "mute_notifications", 
                                labelWidth: 150,
                                onLabel: "On", 
                                offLabel: "Off",
                                tabFocus: true,
                                tooltip: "Temporarily silence all notifications"
                            }
                        ]
                    }
                },
                
                {
                    view: "fieldset",
                    label: "Notification Tones",
                    body: {
                        paddingY: 10,
                        rows: [
                            {
                                id: "message_tone_row",
                                height: 40,
                                cols: [
                                    { view: "label", label: "Messages", width: 100, css: "tone-label" },
                                    { 
                                        view: "button", 
                                        type: "icon", 
                                        icon: "mdi mdi-play", 
                                        width: 40, 
                                        click: "playMessageTone",
                                        tabFocus: true,
                                        tooltip: "Play message tone sample",
                                        hotkey: "alt+1",
                                        css: "play-button"
                                    },
                                    { 
                                        view: "richselect", 
                                        name: "message_tone", 
                                        options: ["Default", "Chime", "Beep", "Custom"], 
                                        value: "Default",
                                        tabFocus: true,
                                        css: "tone-select" 
                                    }
                                ]
                            },
                            {
                                id: "group_tone_row",
                                height: 40,
                                cols: [
                                    { view: "label", label: "Groups", width: 100, css: "tone-label" },
                                    { 
                                        view: "button", 
                                        type: "icon", 
                                        icon: "mdi mdi-play", 
                                        width: 40, 
                                        click: "playGroupTone",
                                        tabFocus: true,
                                        tooltip: "Play group tone sample",
                                        hotkey: "alt+2",
                                        css: "play-button"
                                    },
                                    { 
                                        view: "richselect", 
                                        name: "group_tone", 
                                        options: ["Default", "Chime", "Beep", "Custom"], 
                                        value: "Default",
                                        tabFocus: true,
                                        css: "tone-select"
                                    }
                                ]
                            }
                        ]
                    }
                },
                
                {
                    margin: 20,
                    cols: [
                        {},
                        { 
                            view: "button", 
                            id: "reset_button",
                            value: "Reset to Default", 
                            width: 150,
                            css: "reset-button",
                            tabFocus: true,
                            tooltip: "Reset all settings to default values",
                            hotkey: "alt+r",
                            click: function() {
                                const form = $$("notificationForm");
                                if (form) {
                                    form.clear();
                                    form.setValues({
                                        notification_sound: "default",
                                        sound_mode: "keep",
                                        message_tone: "Default",
                                        group_tone: "Default"
                                    });
                                    webix.message("Settings reset to default");
                                }
                            }
                        },
                        { width: 10 },
                        { 
                            view: "button", 
                            id: "save_button",
                            value: "Save Changes", 
                            width: 150,
                            css: "webix_primary save-button",
                            tabFocus: true,
                            tooltip: "Save your notification settings",
                            hotkey: "alt+s",
                            click: function() {
                                const form = $$("notificationForm");
                                if (form) {
                                    const values = form.getValues();
                                    // You would typically save these values to your backend here
                                    console.log("Saving settings:", values);
                                    webix.message({ type: "success", text: "Notification settings updated!" });
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],

    on: {
        onViewResize: function() {
            // Adjust layout for different screen sizes
            this.adjust();
            
            // Apply responsive adjustments
            applyResponsiveLayout();
        },
        
        onAfterRender: function() {
            // Initialize responsiveness
            initializeResponsiveness();
            
            // Set up keyboard navigation
            if (webix.UIManager) {
                webix.UIManager.addHotKey("tab", function(view) {
                    const next = webix.UIManager.getNext(view);
                    if (next) webix.UIManager.setFocus(next);
                });
                
                webix.UIManager.addHotKey("shift+tab", function(view) {
                    const prev = webix.UIManager.getPrev(view);
                    if (prev) webix.UIManager.setFocus(prev);
                });
                
                webix.UIManager.addHotKey("enter", function(view) {
                    if (view && view.config && view.config.view === "button") {
                        view.callEvent("onItemClick", []);
                    } else if (view && view.config && 
                              (view.config.view === "checkbox" || view.config.view === "switch")) {
                        view.setValue(!view.getValue());
                    }
                });
                
                // Focus the first element for keyboard navigation
                const form = $$("notificationForm");
                if (form && form.getChildViews().length > 0) {
                    webix.UIManager.setFocus(form.getChildViews()[0]);
                }
            }
            
            // Sound playback functions
            window.playMessageTone = function() {
                console.log("Playing message tone");
                const form = $$("notificationForm");
                if (!form) return;
                
                const tone = form.getValues().message_tone;
                webix.message(`Playing ${tone} message tone`);
                
                try {
                    const audio = new Audio(`/sounds/${tone.toLowerCase()}.mp3`);
                    audio.play().catch(e => console.error("Error playing sound:", e));
                } catch (e) {
                    console.error("Error with audio playback:", e);
                }
            };

            window.playGroupTone = function() {
                console.log("Playing group tone");
                const form = $$("notificationForm");
                if (!form) return;
                
                const tone = form.getValues().group_tone;
                webix.message(`Playing ${tone} group tone`);
                
                try {
                    const audio = new Audio(`/sounds/${tone.toLowerCase()}.mp3`);
                    audio.play().catch(e => console.error("Error playing sound:", e));
                } catch (e) {
                    console.error("Error with audio playback:", e);
                }
            };
        }
    }
};

// Function to initialize responsiveness
function initializeResponsiveness() {
    // Add window resize event listener
    window.addEventListener('resize', applyResponsiveLayout);
    
    // Initial call to set the correct layout
    applyResponsiveLayout();
    
    // Add custom CSS
    addResponsiveStyles();
}

// Function to apply responsive layout based on screen width
function applyResponsiveLayout() {
    const width = window.innerWidth;
    
    // References to elements that need to be adjusted
    const messageToneRow = $$("message_tone_row");
    const groupToneRow = $$("group_tone_row");
    const saveButton = $$("save_button");
    const resetButton = $$("reset_button");
    const form = $$("notificationForm");
    
    if (width <= 767) {
        // Mobile view adjustments
        console.log("Applying mobile layout");
        
        // Convert tone rows to vertical layout
        if (messageToneRow) {
            messageToneRow.define("cols", []);
            messageToneRow.define("rows", [
                { view: "label", label: "Messages", height: 30, css: "tone-label" },
                { 
                    cols: [
                        { 
                            view: "button", 
                            type: "icon", 
                            icon: "mdi mdi-play", 
                            width: 40, 
                            click: "playMessageTone",
                            css: "play-button"
                        },
                        { 
                            view: "richselect", 
                            name: "message_tone", 
                            options: ["Default", "Chime", "Beep", "Custom"], 
                            value: "Default",
                            css: "tone-select" 
                        }
                    ]
                }
            ]);
            messageToneRow.define("height", 80);
            messageToneRow.refresh();
        }
        
        if (groupToneRow) {
            groupToneRow.define("cols", []);
            groupToneRow.define("rows", [
                { view: "label", label: "Groups", height: 30, css: "tone-label" },
                { 
                    cols: [
                        { 
                            view: "button", 
                            type: "icon", 
                            icon: "mdi mdi-play", 
                            width: 40, 
                            click: "playGroupTone",
                            css: "play-button"
                        },
                        { 
                            view: "richselect", 
                            name: "group_tone", 
                            options: ["Default", "Chime", "Beep", "Custom"], 
                            value: "Default",
                            css: "tone-select" 
                        }
                    ]
                }
            ]);
            groupToneRow.define("height", 80);
            groupToneRow.refresh();
        }
        
        // Stack buttons vertically
        if (resetButton && saveButton) {
            resetButton.getParentView().define("cols", []);
            resetButton.getParentView().define("rows", [
                {},
                { 
                    view: "button", 
                    id: "reset_button",
                    value: "Reset to Default", 
                    css: "reset-button",
                },
                { height: 10 },
                { 
                    view: "button", 
                    id: "save_button",
                    value: "Save Changes", 
                    css: "webix_primary save-button",
                }
            ]);
            resetButton.getParentView().refresh();
        }
        
        // Adjust form label position
        if (form) {
            form.define("elementsConfig", { labelPosition: "top" });
            form.refresh();
        }
        
    } else if (width <= 991) {
        // Tablet view adjustments
        console.log("Applying tablet layout");
        
        // Reset to horizontal layout with smaller labels
        resetToneRows();
        resetButtonLayout();
        
        // Adjust form label position
        if (form) {
            form.define("elementsConfig", { labelPosition: "left", labelWidth: 120 });
            form.refresh();
        }
        
    } else {
        // Desktop view adjustments
        console.log("Applying desktop layout");
        
        // Reset to normal layout
        resetToneRows();
        resetButtonLayout();
        
        // Adjust form label position
        if (form) {
            form.define("elementsConfig", { labelPosition: "left", labelWidth: 150 });
            form.refresh();
        }
    }
    
    // Force UI to adjust
    if (webix && webix.ui && webix.ui.resize) {
        webix.ui.resize();
    }
}

// Function to reset tone rows to horizontal layout
function resetToneRows() {
    const messageToneRow = $$("message_tone_row");
    const groupToneRow = $$("group_tone_row");
    
    if (messageToneRow) {
        messageToneRow.define("rows", []);
        messageToneRow.define("cols", [
            { view: "label", label: "Messages", width: 100, css: "tone-label" },
            { 
                view: "button", 
                type: "icon", 
                icon: "mdi mdi-play", 
                width: 40, 
                click: "playMessageTone",
                css: "play-button"
            },
            { 
                view: "richselect", 
                name: "message_tone", 
                options: ["Default", "Chime", "Beep", "Custom"], 
                value: "Default",
                css: "tone-select" 
            }
        ]);
        messageToneRow.define("height", 40);
        messageToneRow.refresh();
    }
    
    if (groupToneRow) {
        groupToneRow.define("rows", []);
        groupToneRow.define("cols", [
            { view: "label", label: "Groups", width: 100, css: "tone-label" },
            { 
                view: "button", 
                type: "icon", 
                icon: "mdi mdi-play", 
                width: 40, 
                click: "playGroupTone",
                css: "play-button"
            },
            { 
                view: "richselect", 
                name: "group_tone", 
                options: ["Default", "Chime", "Beep", "Custom"], 
                value: "Default",
                css: "tone-select" 
            }
        ]);
        groupToneRow.define("height", 40);
        groupToneRow.refresh();
    }
}

// Function to reset button layout to horizontal
function resetButtonLayout() {
    const resetButton = $$("reset_button");
    const saveButton = $$("save_button");
    
    if (resetButton && saveButton) {
        resetButton.getParentView().define("rows", []);
        resetButton.getParentView().define("cols", [
            {},
            { 
                view: "button", 
                id: "reset_button",
                value: "Reset to Default", 
                width: 150,
                css: "reset-button",
            },
            { width: 10 },
            { 
                view: "button", 
                id: "save_button",
                value: "Save Changes", 
                width: 150,
                css: "webix_primary save-button",
            }
        ]);
        resetButton.getParentView().refresh();
    }
}

// Function to add responsive styles
function addResponsiveStyles() {
    webix.html.addStyle(`
        /* Base styles */
        .settings-title h2 {
            color: #3498db;
            padding: 10px;
            border-bottom: 1px solid #eee;
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .webix_fieldset {
            margin-bottom: 15px;
        }
        
        .webix_fieldset legend {
            font-weight: bold;
            color: #2980b9;
            padding: 0 10px;
        }
        
        .webix_switch.webix_el_switch .webix_switch_box {
            background-color: #e0e0e0;
        }
        
        .webix_switch.webix_el_switch .webix_switch_box.webix_switch_on {
            background-color: #27ae60;
        }
        
        .save-button button {
            background-color: #2980b9;
            border-radius: 4px;
        }
        
        .reset-button button {
            background-color: #bdc3c7;
            border-radius: 4px;
        }
        
        .play-button button {
            background-color: #3498db;
            color: white;
            border-radius: 4px;
        }
        
        /* Improve accessibility */
        [tabFocus="true"]:focus {
            outline: 2px solid #3498db;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
        }
        
        /* Responsive styles */
        @media (max-width: 767px) {
            /* Mobile styles */
            .webix_fieldset {
                padding: 5px !important;
            }
            
            .webix_view.webix_form {
                padding: 5px !important;
            }
            
            .webix_el_box input, .webix_el_box select, .webix_el_box textarea {
                width: 100% !important;
            }
            
            .tone-select .webix_el_box {
                width: calc(100% - 50px) !important;
            }
            
            .webix_el_button button {
                width: 100% !important;
            }
        }
        
        @media (min-width: 768px) and (max-width: 991px) {
            /* Tablet styles */
            .webix_fieldset {
                padding: 10px !important;
            }
        }
    `);
}