import { AccSettings } from "./settings/acc_settings.js";
import { NotSettings } from "./settings/not_settings.js";
import { PrSettings } from "./settings/pr_settings.js";

export const SettingsPage = {
    id: "settings",
    responsive: true,
    type: "space",
    cols: [
        { 
            view: "layout",
            id: "settingsMenuWrapper",
            rows: [
                {
                    view: "button",
                    id: "toggleMenuButton",
                    value: "☰ Menu",
                    hidden: true,
                    click: function () {
                        let menu = $$("settingsMenu");
                        let isVisible = menu.isVisible();
                        if (isVisible) {
                            menu.hide();
                        } else {
                            menu.show();
                        }
                    }
                },
                {
                    view: "list", 
                    id: "settingsMenu",
                    data: [
                        { id: "acc_settings", value: "Account" },
                        { id: "pr_settings", value: "Privacy" },
                        { id: "not_settings", value: "Notification" }
                    ],
                    ready: function () { 
                        this.select(this.getFirstId()); 
                    },
                    on: {
                        onItemClick: function (id) {
                            let selectedItem = this.getItem(id);
                            showsettingsView(selectedItem.id);
                        }
                    },
                    select: true,
                    scroll: false,
                    width: 120 
                }
            ]
        },
        {
            view: "scrollview",
            body: {
                view: "multiview",
                id: "settingsView",
                cells: [
                    { id: "acc_settings", ...AccSettings },
                    { id: "pr_settings", ...PrSettings },
                    { id: "not_settings", ...NotSettings },
                ]
            }
        }
    ],
    on: {
        onViewResize: function () {
            let menu = $$("settingsMenu");
            let button = $$("toggleMenuButton");
            if (window.innerWidth < 600) { // Adjust this breakpoint as needed
                menu.hide();
                button.show();
            } else {
                menu.show();
                button.hide();
            }
        }
    }
};

window.showsettingsView = function (viewId) {
    $$("settingsView").setValue(viewId);
};