let cipher = {};

cipher.encode = (offset, string) => {
  let desloc = "";
  let resultLetterOffset = "";
  let finalletter = "";

  for (let i = 0; i < string.length; i++) {
    let letter = parseInt(string.charCodeAt(i));
    offset = parseInt(offset);

    if (letter > 64 && letter < 91) {
      desloc = ((letter - 65 + offset) % 26) + 65;
      resultLetterOffset = String.fromCharCode(desloc);
      finalletter = finalletter + resultLetterOffset;
    } else if (letter > 96 && letter < 123) {
      desloc = ((letter - 96 + offset) % 26) + 96;
      resultLetterOffset = String.fromCharCode(desloc);
      finalletter = finalletter + resultLetterOffset;
    } else {
      resultLetterOffset = String.fromCharCode(letter);
      finalletter = finalletter + resultLetterOffset;
    }
  }

  return finalletter;
};

cipher.decode = (offset, string) => {
  let desloc = "";
  let resultLetterOffset = "";
  let finalletter = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    letter = parseInt(letter);
    offset = parseInt(offset);

    if (letter > 64 && letter < 91) {
      desloc = ((letter - 90 - offset) % 26) + 90;
      resultLetterOffset = String.fromCharCode(desloc);
      finalletter = finalletter + resultLetterOffset;
    } else if (letter > 96 && letter < 123) {
      desloc = ((letter - 122 - offset) % 26) + 122;
      resultLetterOffset = String.fromCharCode(desloc);
      finalletter = finalletter + resultLetterOffset;
    } else {
      resultLetterOffset = String.fromCharCode(letter);
      finalletter = finalletter + resultLetterOffset;
    }
  }

  return finalletter;
};

cipher.load = () => {
  const btnCode = document.getElementById("btn-code");
  const btnDecode = document.getElementById("btn-decode");
  const digitText = document.getElementById("digit-text");
  const digitDisplacement = document.getElementById("digit-displacement");
  const result = document.getElementById("result");

  btnCode.addEventListener("click", function(event) {
    const resultEncode = cipher.encode(digitDisplacement.value, digitText.value);
    result.value = resultEncode;
    event.preventDefault();
  });

  btnDecode.addEventListener("click", function(event) {
    const resultDecode = cipher.decode(digitDisplacement.value, digitText.value);
    result.value = resultDecode;

    event.preventDefault();
  });
};
