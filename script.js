function validar() {
  var valueA = document.getElementById("campoA").value;
  valueA = Number(valueA);
  var valueB = document.getElementById("campoB").value;
  valueB = Number(valueB);

  if (valueB > valueA) {
    alert("FORMULÁRIO VÁLIDO.");
  } else {
    alert("FORMULÁRIO INVÁLIDO");
  }
}
