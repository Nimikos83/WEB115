// projectJS.js

function generateMealPlan() {
    // Get user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;
    var mondayBreakfast = document.getElementById('mondayBreakfast').value;

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Generate meal plan page
    var mealPlanPage = '<!DOCTYPE html>\n';
    mealPlanPage += '<html lang="en">\n';
    mealPlanPage += '<head>\n';
    mealPlanPage += '<meta charset="UTF-8">\n';
    mealPlanPage += '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    mealPlanPage += '<title>Meal Plan</title>\n';
    mealPlanPage += '<link rel="stylesheet" href="styles.css">\n';
    mealPlanPage += '</head>\n';
    mealPlanPage += '<body>\n';
    mealPlanPage += '<header>\n';
    mealPlanPage += '<h1>' + name + '</h1>\n';
    mealPlanPage += '<p>Email: ' + email + '</p>\n';
    mealPlanPage += '<p>Goal for the Week: ' + goal + '</p>\n';
    mealPlanPage += '</header>\n';
    mealPlanPage += '<main>\n';
    mealPlanPage += '<h2>Meal Plan</h2>\n';
    // Include meal plan details here using variables like mondayBreakfast
    // ...

    mealPlanPage += '</main>\n';
    mealPlanPage += '<footer>\n';
    mealPlanPage += '<button onclick="clearMealPlan()">Clear Meal Plan</button>\n';
    mealPlanPage += '<button onclick="printMealPlan()">Print/Download Meal Plan</button>\n';
    mealPlanPage += '</footer>\n';
    mealPlanPage += '<script src="mealPlanJS.js"></script>\n'; // Include any additional JavaScript file if needed
    mealPlanPage += '</body>\n';
    mealPlanPage += '</html>';

    // Open a new window and write the meal plan
    var mealPlanWindow = window.open('', '_blank');
    mealPlanWindow.document.write(mealPlanPage);
}

function validateEmail(email) {
    // Simple email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function clearMealPlan() {
    // Implement the logic to clear the meal plan
    // This can include resetting input fields, etc.
}

function printMealPlan() {
    // Implement the logic to print or download the meal plan
    // This can include using the window.print() method or creating a downloadable file
}

