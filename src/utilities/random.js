// program to generate random strings

// declare all characters
const characters = "abcdefghijklmnoprstuvw";

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const url = `http://www.themealdb.com/api/json/v1/1/search.php?f=${generateString(
  1
)}`;
// console.log(url);

export { generateString };
