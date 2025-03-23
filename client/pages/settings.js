import { AccSettings } from "./settings/acc_settings.js";
import { NotSettings } from "./settings/not_settings.js";
import { PrSettings } from "./settings/pr_settings.js";

export const SettingsPage = {
    id: "settings",
    responsive: true,
    type: "space",
    cols: [
        { 
            view:"list", 
            data:[
                {id:"acc_settings",value:"account"},
                {id:"pr_settings",value:"privacy"},
                {id:"not_settings",value:"notification"}
            ],
            ready:function(){ 
              this.select(this.getFirstId()); 
            },
            on: {
                onItemClick: function (id) {
                  let selectedItem = this.getItem(id); // Get the selected item
                  console.log(selectedItem)
                  showsettingsView(selectedItem.id)
                }},
            select:true,
            scroll:false,
            width:120 
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
              },
            },
    ]
  };

  window.showsettingsView = function (viewId) {
    $$("settingsView").setValue(viewId);
  };