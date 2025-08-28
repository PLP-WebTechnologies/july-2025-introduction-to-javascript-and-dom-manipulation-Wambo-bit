// 🎯 Part 1: Variables & Conditionals
function checkAge() {
  let age = document.getElementById("userAge").value;

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult.";
  } else if (age > 0) {
    document.getElementById("ageResult").innerText = "🧒 You are a minor.";
  } else {
    document.getElementById("ageResult").innerText = "❌ Please enter a valid age.";
  }
}

//  Part 2: Functions
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").innerText =
    Total = ${price} x ${quantity} = ${total};
  return total;
}

// Another reusable function: format text
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(formatName("waMbuI")); // Example output in console


//  Part 3: Loops
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear before appending

  // For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // While loop (console example)
  let count = 5;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
}

//  Part 4: DOM Manipulation
let toggleBtn = document.getElementById("toggleBtn");
let toggleMsg = document.getElementById("toggleMsg");

toggleBtn.addEventListener("click", function () {
  if (toggleMsg.style.display === "none") {
    toggleMsg.style.display = "block";
  } else {
    toggleMsg.style.display = "none";
  }
});

// Extra DOM example: dynamically create an element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JS, awesome!";
document.body.appendChild(newPara);