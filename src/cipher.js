  let cipher = {};

  cipher.encode = (offset, string) => {
    let desloc = "";
    let resultLetterOffset = "";
    let finalletter = "";

    for (let i = 0; i < string.length; i++) {
      let letter = parseInt(string.charCodeAt(i));
      offset = parseInt(offset);

      if ( letter > 64 && letter < 91) {
        desloc = (((letter - 65) + offset ) % 26) + 65; 
        resultLetterOffset = String.fromCharCode(desloc);
        finalletter = finalletter + resultLetterOffset;
      }
      
      if ( letter > 96 && letter < 123) {
        desloc = (((letter - 96) + offset ) % 26) + 96; 
        resultLetterOffset = String.fromCharCode(desloc);
        finalletter = finalletter + resultLetterOffset;
      } else {
        resultLetterOffset = String.fromCharCode(letter);
        finalletter = finalletter + resultLetterOffset;  
      }
    }

    return finalletter; 
  }

  cipher.decode = (offset, string) => {
    let desloc = "";
    let resultLetterOffset = "";
    let finalletter = "";

    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      letter = parseInt(letter);
      offset = parseInt(offset);

      if ( letter > 64 && letter < 91) {
        desloc = (((letter - 65) - offset ) % 26) + 65; 
        resultLetterOffset = String.fromCharCode(desloc);
        finalletter = finalletter + resultLetterOffset;
      }

      if ( letter > 96 && letter < 123) {
        desloc = (((letter - 96) - offset ) % 26) + 96; 
        resultLetterOffset = String.fromCharCode(desloc);
        finalletter = finalletter + resultLetterOffset;
      } else {
        resultLetterOffset = String.fromCharCode(letter);
        finalletter = finalletter + resultLetterOffset;  
      }
                
  }
  return finalletter; 
}
