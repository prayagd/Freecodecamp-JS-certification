function convertToRoman(num) {
    let decArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let numFound = "";
    for(let i = romanArr.length; i >= 0 ; i--){
        while(num >= decArr[i]){
            numFound += romanArr[i];
            num -= decArr[i];
        }
    }
    return numFound;   
   }
   
   convertToRoman(36);
   