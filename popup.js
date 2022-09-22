// // Initialize butotn with users's prefered color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // When the button is clicked, do stuff
// postItButton.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: createPostIt,
//   });
// });

// // The body of this function will be execuetd as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
// var aButton = document.createElement('button');
// aButton.id = "aButton";
// thatDiv.appendChild(aButton);

// var aScript = document.createElement("script");
// aScript.src="aButtonHandler.js";
// thatDiv.appendChild(aScript); 

// addButton();

// function addButton()
// {
//     //adds a button by the code above.
//     aButton.addEventListener('click', function() {
//         alert('damn');
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   var theButton = document.getElementById('aButton');
//   theButton.addEventListener('click', function() {
//       alert('damn');
//   });
// });
// // // button on click
// function createPostIt() {
  
// }
// Submit form with id function.
function submit_by_id() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validation()) // Calling validation function
  {
  document.getElementById("form_id").submit(); //form submission
  alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
  }
  }
  
  // Submit form with name function.
  function submit_by_name() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validation()) // Calling validation function
  {
  var x = document.getElementsByName('form_name');
  x[0].submit(); //form submission
  alert(" Name : " + name + " n Email : " + email + " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
  }
  }
  
  // Submit form with class function.
  function submit_by_class() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validation()) // Calling validation function
  {
  var x = document.getElementsByClassName("form_class");
  x[0].submit(); //form submission
  alert(" Name : " + name + " n Email : " + email + " n Form Class : " + document.getElementById("form_id").getAttribute("class") + "nn Form Submitted Successfully......");
  }
  }
  
  // Submit form with HTML <form> tag function.
  function submit_by_tag() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validation()) // Calling validation function
  {
  var x = document.getElementsByTagName("form");
  x[0].submit(); //form submission
  alert(" Name : " + name + " n Email : " + email + " n Form Tag : <form>nn Form Submitted Successfully......");
  }
  }
  
  // Name and Email validation Function.
  function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  if (name === '' || email === '') {
  alert("Please fill all fields...!!!!!!");
  return false;
  } else if (!(email).match(emailReg)) {
  alert("Invalid Email...!!!!!!");
  return false;
  } else {
  return true;
  }
  }

// function handle_form_submission()
// {
//   // alert('Submit button pressed');
//   // console.log("hello");
//   // return true; //do not submit the form

//   // $('#changeColor').click(function(){
//     var data = $('#name').val();
//     alert(data);
//     this.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(data);
// }


// document.getElementById("submit").addEventListener("click", calculate)
// document.getElementById("7b").addEventListener("click", () => (des(7)))
// document.getElementById("8b").addEventListener("click", () => (des(8)))
// document.getElementById("9b").addEventListener("click", () => (des(9)))
// document.getElementById("4b").addEventListener("click", () => (des(4)))
// document.getElementById("5b").addEventListener("click", () => (des(5)))
// document.getElementById("6b").addEventListener("click", () => (des(6)))
// document.getElementById("1b").addEventListener("click", () => (des(1)))
// document.getElementById("2b").addEventListener("click", () => (des(2)))
// document.getElementById("3b").addEventListener("click", () => (des(3)))
// document.getElementById("0b").addEventListener("click", () => (des(0)))
// document.getElementById("+b").addEventListener("click", () => (des("+")))
// document.getElementById("/b").addEventListener("click", () => (des("/")))
// document.getElementById("-b").addEventListener("click", () => (des("-")))
// document.getElementById("*b").addEventListener("click", () => (des("*")))

// function calculate(){
//     var input = document.getElementById("textField").value
//     const value = eval(input)
//     document.getElementById("textField").value=value
// }

// function des(val){

//     document.getElementById("textField").value+=val
// }

