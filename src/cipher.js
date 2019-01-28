window.cipher = {
  encode: function (offset, string) {
    const ALPHABETIC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const OFFSET_NUMBER = parseInt(offset);
    let word = '';

    for (let i = 0; i < string.length; i++) {
      let position = (string.charCodeAt(i) - 65 + OFFSET_NUMBER) % 26;
      word += ALPHABETIC[position];
      console.log(position)
    }
    
    document.getElementById('digite-texto').value = word;
  },

  decode: function (offset, string) {
    const ALPHABETIC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const OFFSET_NUMBER = parseInt(offset);
    let word = '';

    for (let i = 0; i < string.length; i++) {
      let position = (string.charCodeAt(i) + 65 - OFFSET_NUMBER) % 26;
      word += ALPHABETIC[position]
    }
    
    document.getElementById('digite-texto').value = word;
  },
};


