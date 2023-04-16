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
