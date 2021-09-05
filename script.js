const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumberButton = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");

function compareValues (sum, luckyNumber) {
 if(sum%luckyNumber === 0) {
   outputBox.innerText = "your birthday is lucky 😊";
 } else {
   outputBox.innerText = "Your birthday is not lucky 😒";
 }
}
function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(sum && luckyNumber.value) {
 compareValues(sum, luckyNumber.value)
  } else {
    outputBox.innerText = "please Enter both the fields😫"
  }

}
function calculateSum(dob) {
  // const replace_ =date.replaceAll("-", '');
  // return replace_;
// const arr = date.split('');
// for(let i = 0; i<arr.length; i++) {
//   if (arr[i] === "-") {
//     arr[i] = "";
//   }
// }
// console.log(arr.length);
// return arr;

dob = dob.replaceAll("-", "");
let sum = 0;
for(let i=0; i<dob.length; i++) {
  sum = sum + Number(dob.charAt(i));
}
return sum;  
}
checkNumberButton.addEventListener("click", checkBirthDateIsLucky)