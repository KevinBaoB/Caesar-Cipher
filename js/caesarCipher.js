exports.caesarCipher = function (str, num) {
  if (num < 0) {
    num = 26 + (num % 26);
  }
  return str
    .split("")
    .map((str) => {
      normalStr = String.fromCharCode(str.charCodeAt());
      prePoint = str.charCodeAt();
      if (prePoint >= 65 && prePoint <= 90) {
        return String.fromCharCode(((prePoint - 65 + num) % 26) + 65);
      } else if (prePoint >= 97 && prePoint <= 122) {
        return String.fromCharCode(((prePoint - 97 + num) % 26) + 97);
      } else {
        return normalStr;
      }
    })
    .join("");
};

// console.log(caesarCipher("WHAT", -5));
// console.log(caesarCipher("What a string!", 5));
// console.log(caesarCipher("Boy! What a string!", -5));
// console.log("Wjt! Rcvo v nomdib!");

// caesarCipher = function (str, num) {
//   let arr = [];
//   for (let i in str) {
//     if (!/^[a-z]+$/i.test(str[i])) {
//       arr.push(str[i]);
//     }
//     const alphaNum = str.charCodeAt(i);
//     if (alphaNum > 64 && alphaNum < 91) {
//       const newPos = alphaNum + num;
//       if (newPos > 90) {
//         const correct = 64 + (newPos - 90);

//         arr.push(String.fromCharCode(correct));
//       } else if (newPos < 65) {
//         const negCorrect = 91 - (65 - newPos);
//         arr.push(String.fromCharCode(negCorrect));
//       } else {
//         arr.push(String.fromCharCode(newPos));
//       }
//     } else if (alphaNum > 96 && alphaNum < 123) {
//       let newPos = alphaNum + num;

//       if (newPos > 122) {
//         let correct = 96 + (newPos - 122);

//         arr.push(String.fromCharCode(correct));
//       } else if (newPos < 97) {
//         let negCorrect = 123 - (97 - newPos);
//         arr.push(String.fromCharCode(negCorrect));
//       } else {
//         arr.push(String.fromCharCode(newPos));
//       }
//     }
//   }

//   return arr.join("");
// };

// const singleUpperCase = function (str) {
//   return str === str.toUpperCase();
// };

// const caesarCipher = function (str, num) {
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!/^[a-z]+$/i.test(str[i])) {
//       res += str[i];
//     } else if (singleUpperCase(str[i])) {
//       res += String.fromCharCode(((str.charCodeAt(i) - 65 + num) % 26) + 65);
//     } else {
//       res += String.fromCharCode(((str.charCodeAt(i) - 97 + num) % 26) + 97);
//     }
//   }
//   return res;
// };
