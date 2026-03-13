// Function to generate multiplication table
function generateTable() {
    const num = prompt("Enter a number to see its multiplication table:", "");
    
    if (num === null || num === "") {
        return;
    }
    
    const number = parseInt(num);
    
    if (isNaN(number)) {
        alert("Please enter a valid number!");
        return;
    }
    
    let tableHTML = `<h3>Multiplication Table of ${number}</h3>`;
    
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<div>${number} × ${i} = ${number * i}</div>`;
    }
    
    document.getElementById('tableOutput').innerHTML = tableHTML;
    document.getElementById('tableOutput').style.display = 'block';
}

// Function for addition
function doAddition() {
    const num1 = prompt("Enter the first number:", "");
    
    if (num1 === null || num1 === "") {
        return;
    }
    
    const num2 = prompt("Enter the second number:", "");
    
    if (num2 === null || num2 === "") {
        return;
    }
    
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    const sum = number1 + number2;
    
    const resultHTML = `
        <h3>Addition Result</h3>
        <div class="result-value">${number1} + ${number2} = ${sum}</div>
    `;
    
    document.getElementById('additionResult').innerHTML = resultHTML;
    document.getElementById('additionResult').style.display = 'block';
}

// Function for subtraction
function doSubtraction() {
    const num1 = prompt("Enter the first number (minuend):", "");
    
    if (num1 === null || num1 === "") {
        return;
    }
    
    const num2 = prompt("Enter the second number (subtrahend):", "");
    
    if (num2 === null || num2 === "") {
        return;
    }
    
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers!");
        return;
    }
    
    const difference = number1 - number2;
    
    const resultHTML = `
        <h3>Subtraction Result</h3>
        <div class="result-value">${number1} - ${number2} = ${difference}</div>
    `;
    
    document.getElementById('subtractionResult').innerHTML = resultHTML;
    document.getElementById('subtractionResult').style.display = 'block';
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log("Kid-Zone Website Loaded!");
});
