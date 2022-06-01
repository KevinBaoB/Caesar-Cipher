// exports.
// 64 < alphabets > 91
caesarCipher = function (str, num) {
  let arr = [];
  for (let i in str) {
    if (!/^[a-z]+$/i.test(str[i])) {
      arr.push(str[i]);
    }
    const alphaNum = str.charCodeAt(i);
    if (alphaNum > 64 && alphaNum < 91) {
      const newPos = alphaNum + num;
      if (newPos > 90) {
        const correct = 64 + (newPos - 90);

        arr.push(String.fromCharCode(correct));
      } else {
        arr.push(String.fromCharCode(newPos));
      }
    } else if (alphaNum > 96 && alphaNum < 123) {
      let newPos = alphaNum + num;

      if (newPos > 122) {
        let correct = 96 + (newPos - 122);

        arr.push(String.fromCharCode(correct));
      } else {
        arr.push(String.fromCharCode(newPos));
      }
    }
  }

  return arr.join("");
};

console.log(caesarCipher("What", 5));
console.log(caesarCipher("What a string!", 5));
