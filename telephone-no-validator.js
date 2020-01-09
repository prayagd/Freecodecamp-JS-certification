function telephoneCheck(str) {
    let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?(\d{3})[\s-]?(\d{4})$/g 
    return regex.test(str);
      // Good luck!
      //always write the regex expression step by step and always test your theory before believing anybody or any other code.
    }
    
    telephoneCheck("555)-555-5555");
    