const loadDashboardWidgets = () => {
    const dashboardWidgets = document.getElementById("dashboard-widgets");
    const fakeWidgets = ["Total Distance", "Average Pace", "Longest Run"];

    fakeWidgets.forEach((widget) => {
        const widgetElement = document.createElement("div");
        widgetElement.classList.add("widget");
        widgetElement.textContent = widget;
        dashboardWidgets.appendChild(widgetElement);
    });
};


const setupToggleWidgetsButton = () => {
    const toggleWidgetsButton = document.getElementById("toggle-widgets");
    toggleWidgetsButton.addEventListener("click", () => {
        const dashboardWidgets = document.getElementById("dashboard-widgets");
        const isHidden = dashboardWidgets.style.display === "none";
        
        if (isHidden) {
            dashboardWidgets.style.display = "block";
            toggleWidgetsButton.textContent = "Hide Widgets";
        } else {
            dashboardWidgets.style.display = "none";
            toggleWidgetsButton.textContent = "Show Widgets";
        }
    });
};
