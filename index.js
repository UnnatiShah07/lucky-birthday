const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", findLuckyBirthday);

function findLuckyBirthday() {
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    if (dob && luckyNumber.value) compareValues(sum, luckyNumber.value);
    else result.innerHTML = "Please enter both fields âšī¸";
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) result.innerHTML = "đ Your birthday is lucky đ";
    else result.innerHTML = "Your birthday is not lucky đ";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}
