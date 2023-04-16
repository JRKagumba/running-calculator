const setupGoalForm = () => {
    const goalForm = document.getElementById("goal-form");
    goalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const distance = document.getElementById("goal-distance").value;
        const time = document.getElementById("goal-time").value;
        displayGoal(distance, time);
    });
};

const displayGoal = (distance, time) => {
    const goalProgress = document.getElementById("goal-progress");
    goalProgress.innerHTML = `
        <p>Goal: Run ${distance} km in ${time} minutes</p>
        <p>Fake progress data: 50% completed</p>
    `;
};
