function solve() {
  const text = document.getElementById("text").value;
  const conventional = document.getElementById("naming-convention").value;

  let result = "";

  switch (conventional) {
    case "Camel Case":
      let textArr = text.toLowerCase().split(" ");
      result += textArr.shift();
      textArr.forEach(x => {
        result += x[0].toUpperCase() + x.substring(1);
      })
      break;
    case "Pascal Case":
      text.toLowerCase().split(" ").forEach(x => {
        result += x[0].toUpperCase() + x.substring(1);
      })
      break;

    default: result = "Error!"; break;
  }

  document.getElementById("result").textContent += `${result}`

}