const setupGoalForm = () => {
    const goalForm = document.getElementById("goal-form");
    goalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const distance = document.getElementById("goal-distance").value;
        const time = document.getElementById("goal-time").value;
        displayGoal(distance, time);
    });
};

const setupProgressUpdater = () => {
    const updateProgressButton = document.getElementById("update-progress");
    updateProgressButton.addEventListener("click", () => {
        const distance = parseFloat(document.getElementById("goal-distance").value);
        const actualProgress = parseFloat(document.getElementById("actual-progress").value);
        const progressPercentage = Math.min((actualProgress / distance) * 100, 100).toFixed(2);
        displayGoal(distance, progressPercentage);
    });
};

const displayGoal = (distance, progressPercentage) => {
    const goalProgress = document.getElementById("goal-progress");
    goalProgress.innerHTML = `
        <p>Goal: Run ${distance} km</p>
        <p>Progress: ${progressPercentage}% completed</p>
        <label for="actual-progress">Actual progress (km):</label>
        <input type="number" id="actual-progress" min="0" step="0.1">
        <button id="update-progress">Update Progress</button>
    `;
    setupProgressUpdater();
};
