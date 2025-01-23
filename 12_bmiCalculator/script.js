function bmi() {
    var height = document.getElementById("height").value;
    var heightUnit = document.getElementById("height-unit").value;
    var weight = document.getElementById("weight").value;
    var weightUnit = document.getElementById("weight-unit").value;
    var result = document.getElementById("result");
    var feedback = document.getElementById("feedback");
    var info = document.getElementById("info");

    if (height > 0 && weight > 0) {
        if (heightUnit === "ft") {
            height = height * 30.48; // convert feet to cm
        }
        if (weightUnit === "lbs") {
            weight = weight * 0.453592; // convert lbs to kg
        }

        var bmi = weight / ((height / 100) * (height / 100));
        result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
        if (bmi < 18.5) {
            feedback.innerHTML = "Underweight: It’s important to eat nutritious food and maintain a balanced diet.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            feedback.innerHTML = "Healthy: Keep up with your current lifestyle to maintain your health.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            feedback.innerHTML = "Overweight: Consider incorporating exercise and a balanced diet into your routine.";
        } else {
            feedback.innerHTML = "Obese: It's advisable to seek guidance from a healthcare professional.";
        }
        info.style.display = "none";
    } else {
        info.style.display = "block";
        feedback.innerHTML = "";
        result.innerHTML = "";
    }
}
