function getUserInfo(e) {
    e.preventDefault();
    alert(1);
    console.log(e.srcElement);
    console.log(e.srcElement.userName);
    console.log(e.srcElement.userAge);
    let userName = e.srcElement.userName.value;

    let userAge = e.srcElement.userAge.value;


    if (userAge == 1, 21, 31, 41, 51, 61, 71, 81, 91, 101) {
        alert("Привет, " + userName + ", тебе " + userAge + " год.")
    }
    else if (userAge == 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44) {
        alert("Привет, " + userName + ", тебе " + userAge + " года.")
    }
    else {
        alert("Привет, " + userName + ", тебе " + userAge + " лет.")
    }
 
}

userInfo.addEventListener('submit', getUserInfo)