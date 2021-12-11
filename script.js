const topo = document.querySelector('[data-name="top"');
const right = document.querySelector('[data-name="right"');
const down = document.querySelector('[data-name="down"');
const left = document.querySelector('[data-name="left"');
const resultado = document.querySelector('[data-name="resultado"');
const copiar = document.querySelector('[data-name="copy"');
const btn = document.querySelector("button");
const quadrado = document.querySelector(".square");
const texto = document.getElementById("texto");

function limpaInputs() {
  topo.value = "";
  right.value = "";
  down.value = "";
  left.value = "";
}

topo.focus();
btn.addEventListener("click", function () {
  const bordas =
    topo.value +
    "px" +
    " " +
    right.value +
    "px" +
    " " +
    down.value +
    "px" +
    " " +
    left.value +
    "px";

  if (topo.value && right.value && down.value && left.value) {
    quadrado.style.borderRadius = bordas;
    resultado.textContent = "border-radius: ";
    resultado.append(bordas);
    limpaInputs();
  } else {
    alert("preencha todos os campos");
  }
  topo.focus();
});
