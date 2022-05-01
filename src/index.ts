let base = document.getElementById("CasillaBase");
let altura = document.getElementById("CasillaAltura");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  //TU CODIGO VA AQUI, POR EJEMPLO:
  let base: number = Number(CasillaBase.value);
  let altura: number = Number(CasillaAltura.value);
  let area: number = base * altura;
  console.log("El valor del área es: ", area);
});
