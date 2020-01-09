function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let newArr = [];
    for(let i = str.length - 1; i >= 0; i--){
      newArr.push(str[i])
    }
    let newStr = newArr.join("")
    if(str === newStr){
      return true;
    }
    return false;
    // Good luck!
  }
  
  
  
  palindrome("_eye");
  