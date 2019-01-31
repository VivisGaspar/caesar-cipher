
var resultado = cipher.encode(1,"abc");
if (resultado === "bcd") {
  console.log("teste passou");
} else {
  console.log('deu pau' + resultado + 'bcd')
} 

var resultado = cipher.encode(7,"abc");
if (resultado === "hij") {
  console.log("teste passou");
} else {
  console.log('deu pau' + resultado + 'hij')
} 

var resultado = cipher.encode(1,"ABC");
if (resultado === "hij") {
  console.log("teste passou");
} else {
  console.log('deu pau' + resultado + 'BCD')
} 