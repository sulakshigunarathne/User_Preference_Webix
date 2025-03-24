export const AccSettings = {
    id: "acc_settings",
    rows: [
        { template: "<h2>Account Settings</h2>", autoheight: true },

        // Profile Picture Section
        {
            cols: [
                {
                    rows: [
                        {
                            template: `
                                <div style="text-align:center;">
                                    <div id="profile-container" style="position:relative; width:120px; height:120px; margin:auto;">
                                        <img id="profile-img" src="https://dummyimage.com/150"
                                            style="width:100%; height:100%; border-radius:50%; border:2px solid #ccc;">
                                    </div>
                                    <input type="file" id="file-upload" accept="image/*" style="display:none;">
                                </div>
                            `,
                            autoheight: true
                        },
                        {
                            cols: [
                                { 
                                    view: "button", value: "Upload", css: "webix_primary", click: function() {
                                        document.getElementById("file-upload").click();
                                    } 
                                },
                                { 
                                    view: "button", value: "Remove", css: "webix_danger", click: function() {
                                        document.getElementById("profile-img").src = "https://dummyimage.com/150";
                                        document.getElementById("file-upload").value = ""; // Reset file input
                                    } 
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // Profile Information
        { 
            view: "form", id: "profileForm", elements: [
                { view: "text", label: "Full Name", name: "full_name", placeholder: "Enter your name", required: true },
                { view: "text", label: "Email", name: "email", placeholder: "Enter your email", disabled: true },
                { view: "text", label: "Phone Number", name: "phone", placeholder: "Enter your phone number", required: true },
                { 
                    cols: [
                        { view: "button", value: "Save Changes", css: "webix_primary", click: function() {
                            let form = $$("profileForm");
                            if (!form.validate()) {
                                webix.message({ type: "error", text: "Please fill in all required fields correctly." });
                                return;
                            }
                            webix.message("Profile updated!");
                        }}
                    ]
                }
            ],
            rules: {
                full_name: webix.rules.isNotEmpty,
                phone: function(value) { return /^[0-9]{10}$/.test(value); }
            }
        },

        // Change Password Section
        { template: "<h3>Change Password</h3>", autoheight: true },
        { 
            view: "form", id: "passwordForm", elements: [
                { view: "text", type: "password", label: "Current Password", name: "current_password", required: true },
                { view: "text", type: "password", label: "New Password", name: "new_password", required: true },
                { view: "text", type: "password", label: "Confirm Password", name: "confirm_password", required: true },
                { 
                    cols: [
                        { view: "button", value: "Update Password", css: "webix_primary", click: function() {
                            let form = $$("passwordForm");
                            let values = form.getValues();

                            if (!form.validate()) {
                                webix.message({ type: "error", text: "Please fill in all password fields." });
                                return;
                            }

                            if (values.new_password !== values.confirm_password) {
                                webix.message({ type: "error", text: "Passwords do not match!" });
                                return;
                            }

                            webix.message("Password updated successfully!");
                        }}
                    ]
                }
            ],
            rules: {
                current_password: webix.rules.isNotEmpty,
                new_password: function(value) { return value.length >= 6; },
                confirm_password: webix.rules.isNotEmpty
            }
        }
    ],

    on: {
        onAfterRender: function() {
            // File Upload Change Event
            document.getElementById("file-upload").addEventListener("change", function(event) {
                let file = event.target.files[0];
                if (file) {
                    let reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById("profile-img").src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }
};
