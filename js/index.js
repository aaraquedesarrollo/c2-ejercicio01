const palabra = "javascript";

console.log(firstLetterUpperCase(palabra));

function firstLetterUpperCase(palabra) {
  return palabra[0].toUpperCase() + palabra.slice(1);
}
