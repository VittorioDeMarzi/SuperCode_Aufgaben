document.querySelector("h1").style.color = "blue";

const separator = document.querySelector("div");
separator.style.width = "100vw";
separator.style.height = "5px";
separator.style.backgroundColor = "gray";
separator.style.marginBottom = "20px";

function checkAlter() {

  const alter = Number(document.querySelector("#alter").value);
  console.log(alter);

  const output = document.querySelector(".output");
  
  if (alter >= 18) {
    output.innerHTML = `Ja. Du kannst mit ${alter} Shisha rauchen.`;
  } else {
    output.innerHTML = `Nein du darfst mit ${alter} kein Shisha rauchen.`;
  }
}
