function decoder(code) {
  let codeArr = code.split("");
  let decodeArr = [];
  for (let i = 0; i < codeArr.length; i++) {
    if (!isNaN(codeArr[i])) {
      let indNum = Number(codeArr[i]);
      let newInd = i + indNum + 1;
      decodeArr.push(codeArr[newInd]);
    }
  }
  decodeArr = decodeArr.join("");
  console.log(decodeArr);
}

decoder("0h2xce5ngbrdy");
