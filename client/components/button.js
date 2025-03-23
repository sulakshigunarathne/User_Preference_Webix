export const GeneralButton = (label, clickHandler) => {
    return {
        view: "button",
        css: "custom-button",
        label: label,  // Dynamic label
        autowidth: true,
        height: 45,
        click: clickHandler // Dynamic click function
    };
};
