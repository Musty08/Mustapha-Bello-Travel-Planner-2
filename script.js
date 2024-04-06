function addDestination(event) {
    event.preventDefault();
    const destinationInput = document.getElementById("destinationInput");
    const destination = destinationInput.value.trim();
    if (destination === "") return;
    const destinationList = document.getElementById("destinationList");
    const destinationItem = document.createElement("li");
    destinationItem.textContent = destination;
    destinationList.appendChild(destinationItem);
    destinationInput.value = "";
}
function addActivity(event) {
    event.preventDefault();
    const activityInput = document.getElementById("activityInput");
    const activity = activityInput.value.trim();
    if (activity === "") return;
    const activityList = document.getElementById("activityList");
    const activityItem = document.createElement("li");
    activityItem.textContent = activity;
    activityList.appendChild(activityItem);
    activityInput.value = "";
}