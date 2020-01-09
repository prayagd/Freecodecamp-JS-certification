function rot13(str) { // LBH QVQ VG!
    let newStr = "";
    for(let i = 0; i < str.length; i++){
      let n = str.charCodeAt(i);
      if(n <= 77 && n > 64){
        let temp1 = n + 13;
        newStr += String.fromCharCode(temp1);
      }
      else if(n > 77 && n <= 90){
        let temp2 = n - 13;
        newStr += String.fromCharCode(temp2);
      }
      else{
        newStr += str[i];
      }
    }
    console.log(newStr);
    return newStr;
    }
    
    // Change the inputs below to test
    rot13("SERR PBQR PNZC");
    