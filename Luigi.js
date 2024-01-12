function toggle() {
    var x = document.getElementById('myluigi');
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

/////// 2
const activityTwoBtn = document.querySelector(".btn-activity-two");

const activityTwoInput = document.querySelector(".input-activity-two");



activityTwoBtn.addEventListener("click", () => {
    if (activityTwoInput.value === "") {
        // Validate the input value to check if it has text
        alert("Please enter a valid URL");
    } else {
        // Set the image src to the input value
        activityTwoImg.src = activityTwoInput.value;
    }
});


///// 3
const activityThreeBtn = document.querySelector(".btn-activity-three");
const activityThreeHeading = document.querySelector(".activity-three-heading");
const activityThreeInput = document.querySelector(".input-activity-three");

activityThreeBtn.addEventListener("click", () => {
    // Validate input value to check if it has text
    if (activityThreeInput.value === "") {
        alert("Please a colour");
    } else {
        // Set the heading colour to the input value
        activityThreeHeading.style.color = activityThreeInput.value.toLowerCase();
    }
});